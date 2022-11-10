// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Account, PrismaClient } from '../../prisma/generated/prisma-client-js'
import { PasswordHasher } from "../../lib/bcrypt"
import { Tokenizer } from '../../lib/jwt'
import httpStatus from 'http-status'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
 switch (req.method) {
  case 'POST':
   const { username, password } = req.body
    await prisma.$connect()
     
       try {
          const user: Account = await prisma.account.findUniqueOrThrow({
         where: {
           username: username
         }
          })
        
         await prisma.$disconnect()
         
         if (!await PasswordHasher.compare(password, user.password)) {
          return res.status(httpStatus.BAD_REQUEST).json({ message: "Incorrect Crudentials" });
         }

         const token = Tokenizer.sign(user)
        
        return res.status(httpStatus.OK).json({ token });

       } catch (err) {
        await prisma.$disconnect()
        return res.status(httpStatus.BAD_REQUEST).json({ message: "Incorrect Crudentials" });
       }

  default:
   return res.status(400).json({ name: 'Wrong' })
 }
}

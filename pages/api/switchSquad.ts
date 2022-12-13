// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '../../prisma/generated/prisma-client-js'
import httpStatus from 'http-status'
import { PasswordHasher } from '../../lib/bcrypt'
import { getAuthenticatedUser } from '../../lib/auth'
import { client } from '../../lib/prisma'

const prisma = new PrismaClient()



export default async function handler (
 req: NextApiRequest,
 res: NextApiResponse
) {
 switch (req.method)
 {
  case 'POST':

   const { squad, newSquadName } = req.body

   try
   {

    const newSquad = await client.$executeRaw`
     START TRANSACTION;
     CREATE T
      UPDATE team
      SET squadId = ${squad.id} WHERE squadId = ${squad.id};
     COMMIT;`
   

    return res.status(httpStatus.CREATED).json({ message: "Account Created" })

   } catch (err)
   {
    return res.status(httpStatus.BAD_REQUEST).json({
     message: 'Not Registered', error: err
    });
   }
 
  default:
   return res.status(400).json({ name: 'Wrong' })
 }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '../../prisma/generated/prisma-client-js'
import httpStatus from 'http-status'
import { PasswordHasher } from '../../lib/bcrypt'
import { getAuthenticatedUser } from '../../lib/auth'

const prisma = new PrismaClient()



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST':

      const { username, password } = req.body

      try {

        if (!username || !password) {
          throw Error("No Username or Password Provided")
        }

        await prisma.$connect()

        const pwd = await PasswordHasher.hash(password);

        const user = await prisma.account.create({
          data: { username, password: pwd }
        });

        await prisma.$disconnect()

        return res.status(httpStatus.CREATED).json({ user, message: "Account Created" })

      } catch (err) {
        return res.status(httpStatus.BAD_REQUEST).json({
          message: 'Not Registered', error: err
        });
      }
    case "GET":
      const user = await getAuthenticatedUser(req)

      if (!user) {
        return res.status(httpStatus.UNAUTHORIZED).json({ message: "Unauthorized" })
      } else {
        return res.status(httpStatus.OK).json({ message: 'Found', user })
      }

    case 'PATCH':
      return res.status(200).json({ name: 'John Doe' })
    case 'DELETE':
      return res.status(200).json({ name: 'John Doe' })
    default:
      return res.status(400).json({ name: 'Wrong' })
  }
}

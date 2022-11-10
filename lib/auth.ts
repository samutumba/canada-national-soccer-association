import type { NextApiRequest } from 'next'
import { Tokenizer } from './jwt'
import { PrismaClient } from '../prisma/generated/prisma-client-js'

const client = new PrismaClient()

export const isAuthenticated = (req: NextApiRequest) => {
 if (req.headers.authorization) {
  const result = Tokenizer.verify(req.headers.authorization)
  if (result) {
   return true
  } else {
   return false
  }
 } else {
  return false
  }
}

export const getAuthenticatedUser = async (req: NextApiRequest) => {
 if (req.headers.authorization) {
  const result = Tokenizer.verify(req.headers.authorization)
  if (result && typeof result !== "string") {

   const { id } = result

   await client.$connect()

   const user = await client.account.findUnique({
    where: {
     id
    }
   })

   await client.$disconnect()

   return user
  } else {
   return undefined
  }
 } else {
  return undefined
  }
}
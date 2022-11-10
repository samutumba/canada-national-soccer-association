import { Account } from "../prisma/generated/prisma-client-js";
import jwt from 'jsonwebtoken'

export class Tokenizer {
 static sign(data: Account) {
  return jwt.sign(data, process.env.SECRET || " ", {
           expiresIn: "10h" 
   })
 }

 static verify(token: string) {
  try {
   const result = jwt.verify(token, process.env.SECRET || " ")
   return result
  } catch (err) {
   return undefined
  }
  
 
 }
} 
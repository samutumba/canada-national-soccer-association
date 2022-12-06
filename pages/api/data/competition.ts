// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import httpStatus from 'http-status';
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../lib/prisma';
import { Competition } from '../../../prisma/generated/prisma-client-js';
type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
 switch (req.method){
  case 'POST':
    res.status(200).json({ name: 'John Doe' });
   case "GET":
     try
     {
      const competitions: Competition[] = await client.$queryRaw`SELECT * FROM Competition`

       return res.status(httpStatus.OK).json({ competitions })
     } catch (err)
     {
       return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong" })
      }
  case 'PATCH':
   return res.status(200).json({ name: 'John Doe' })
  
  default:
   return res.status(400).json({ name: 'Wrong' })
 }
}

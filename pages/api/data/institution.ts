// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import httpStatus from 'http-status';
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../lib/prisma';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
 switch (req.method){
  case 'POST':
   return res.status(200).json({ name: 'John Doe' });
  case "GET":
     try {

       await client.$connect()
       const institutions = await client.institution.findMany({
         include: {
          Squad: true
         }
       });
       await client.$disconnect()

       res.status(httpStatus.OK).json({ institutions })
     } catch (err) {

       res.status(httpStatus.BAD_REQUEST).json({ error: err })
     }
  case 'PATCH':
   return res.status(200).json({ name: 'John Doe' })
  
  default:
   return res.status(400).json({ name: 'Wrong' })
 }
}

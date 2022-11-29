// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../lib/prisma';
import httpStatus from 'http-status';
import { Player } from '../../../prisma/generated/prisma-client-js';
import { boolean } from 'yup';

type Data = {
 name: string
}

export default async function handler(
 req: NextApiRequest,
 res: NextApiResponse
) {
 switch (req.method) {
  case 'POST':
   return res.status(200).json({ name: 'John Doe' });
  case "GET":
   try {
   
    await client.$connect()
    const teams = await client.team.findMany({
     include: {
        Game: true,
        starters: true,
       squad: true
     }
    });
    await client.$disconnect()
    
    res.status(httpStatus.OK).json({ teams })
   } catch (err) {
    
    res.status(httpStatus.BAD_REQUEST).json({ error: err })
   }
   

   
   break;
  case 'PATCH':
   return res.status(200).json({ name: 'John Doe' })

  default:
   return res.status(400).json({ name: 'Wrong' })
 }
}

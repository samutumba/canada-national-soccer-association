// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import httpStatus from 'http-status';
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../lib/prisma';
import { prisma } from '../../../prisma/generated/prisma-client-js';

type Data = {
 name: string
}

export default async function handler(
 req: NextApiRequest,
 res: NextApiResponse
) {
 await client.$connect();
  switch (req.method)
  {
    case 'POST':
      const gameEvents = await client.gameEvent.findMany({
        
      })

  case 'POST':
   try {

    const gameEvent = await client.gameEvent.create({
     data: req.body
    })

    res.status(httpStatus.OK).json({ message: "Created", gameEvent })

   } catch (err) {
    res.status(httpStatus.BAD_REQUEST).json({ error: err })
   }
   return res.status(200).json({ name: 'John Doe' });

  default:
   return res.status(400).json({ name: 'Wrong' })
 }
}

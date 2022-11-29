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
 switch (req.method) {
 
 
 
  case 'POST':
   try {

    const game = await client.game.create({
     data: req.body
    })

    res.status(httpStatus.OK).json({message: "Created", game })

   } catch (err) {
    res.status(httpStatus.BAD_REQUEST).json({ error: err })
   }
   return res.status(200).json({ name: 'John Doe' });
  case "GET":
   try {

    const games = await client.game.findMany({
     include: {
      events: true,
        team: true,
        location: true,
        
     }
    });
    await client.$disconnect()

    res.status(httpStatus.OK).json({ games })
   } catch (err) {

    res.status(httpStatus.BAD_REQUEST).json({ error: err })
   }
  case 'PATCH':
   try {
    const game = await client.game.update({
     where: {
      id: req.body.id,
     },
     data: req.body,
    })

    res.status(httpStatus.OK).json({ message: "Updated", game })
   } catch (err) {
    res.status(httpStatus.BAD_REQUEST).json({ error: err })
   }
   

  default:
   return res.status(400).json({ name: 'Wrong' })
 }
}

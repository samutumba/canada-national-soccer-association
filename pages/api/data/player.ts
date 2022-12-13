// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import httpStatus from 'http-status';
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../lib/prisma';
import { Player } from '../../../prisma/generated/prisma-client-js';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
 switch (req.method){
   case 'POST':
     const { body } = req.body

     
    return res.status(200).json({ name: 'John Doe' });
   case "GET":
     await client.$connect()
     try {
       const players: Player[] = await client.$queryRaw`SELECT * FROM Player`
       
       await client.$disconnect()
       return res.status(httpStatus.OK).json({ players })
     } catch (err) {
       await client.$disconnect()
       return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: err })
     }
     
    
   case 'PATCH':
     const { name, dob, isDomestic, gender, position, healthRecordId, phone, streetAddress, city, province, country, postalCode, id } = req.body

     try {
       const player = await client.player.update({
         where: {
           id
         },
         data: {
           name, dob, isDomestic, gender, position, phone, streetAddress, city, province, country, postalCode
         }
       })
       return res.status(200).json({ message: 'Player Updated' })
     } catch (err) {
       return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: err })
     }

  case 'DELETE':
    return res.status(200).json({ name: 'John Doe' })
  default:
   return res.status(400).json({ name: 'Wrong' })
 }
}

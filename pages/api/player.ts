// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import httpStatus from 'http-status';
import type { NextApiRequest, NextApiResponse } from 'next'
import { isAuthenticated } from '../../lib/auth';
import { client } from '../../lib/prisma';

export default async function handler(
 req: NextApiRequest,
 res: NextApiResponse
) {
 if (isAuthenticated(req)) {
  await client.$connect()
  try {
   switch (req.method) {
      case 'POST':
      const { name, dob, isDomestic, gender, position, phone, streetAddress, city, province, country, postalCode, id } = req.body

     const player = await client.player.upsert({
      where: {
       id
      },
      create: {
       name, dob, isDomestic, gender, position, phone, streetAddress, city, province, country, postalCode
      },
      update: {
       name, dob, isDomestic, gender, position, phone, streetAddress, city, province, country, postalCode
      }
     });

     return res.status(httpStatus.OK).json({
      message: "Player Modified",
      player
     })
      case "GET":
       
      return res.status(200).json({ name: 'John Doe' })
     case 'PATCH':
      return res.status(200).json({ name: 'John Doe' })

     default:
      return res.status(httpStatus.BAD_GATEWAY).json({ message: `${req.method} is not valid` })
    }
  } catch (error) {
   return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    error,
   })
  }
  
 } else {
  return res.status(httpStatus.UNAUTHORIZED).json({
   message: "UNAUTHORIZED"
  })
 }
 
}

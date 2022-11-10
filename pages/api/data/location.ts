// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import httpStatus from 'http-status';
import type { NextApiRequest, NextApiResponse } from 'next'
import { isAuthenticated } from '../../../lib/auth';
import { client } from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
 switch (req.method){
  case 'POST':
   if (await isAuthenticated(req)) {
    const { name, category, streetAddress, city, province, country, postalCode } = req.body
    if (name && category && streetAddress && city && province && country && postalCode) {
     
     await client.$connect()
     const create = await client.location.create({
      data: { name, category, streetAddress, city, province, country, postalCode }
     })
     await client.$disconnect()
     
     return res.status(httpStatus.CREATED).json({ message: 'Location Created', location: create });
    } else {
     return res.status(httpStatus.BAD_REQUEST).json({ message: 'Missing criteria' });
    }
   } else {
    return res.status(httpStatus.UNAUTHORIZED).json({ name: 'Unauthorized' });
    }
    
  case "GET":
   if (await isAuthenticated(req)) { 
    await client.$connect()

    const locations = await client.location.findMany()

    await client.$disconnect()

    return res.status(httpStatus.OK).json({ message: 'Location Found', locations });
   } else {
    return res.status(httpStatus.UNAUTHORIZED).json({ name: 'Unauthorized' });
   }
   
  case 'PATCH':
   const { id, name, category, streetAddress, city, province, country, postalCode } = req.body

   try {
    if (await isAuthenticated(req)) { 
    if (id && name && category && streetAddress && city && province && country && postalCode) { 
     await client.$connect()
     const updatedLocation = await client.location.update({
      where: {
       id
      },
      data: { name, category, streetAddress, city, province, country, postalCode }
     })
     await client.$disconnect()

     return res.status(httpStatus.OK).json({ message: 'Location Updated', location: updatedLocation });
    }else {
     return res.status(httpStatus.BAD_REQUEST).json({ message: 'Missing criteria' });
    }
   } else {
    return res.status(httpStatus.UNAUTHORIZED).json({ name: 'Unauthorized' });
    }
   } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was a problem processing your request"})
   }
   
  case 'DELETE':
    return res.status(200).json({ name: 'John Doe' })
  default:
   return res.status(400).json({ name: 'Wrong' })
 }
}

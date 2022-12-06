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

       console.log("Here");
       console.log(req.body, "/n")
       //console.log(req.body(), "/n")
       const player = await client.player.create({
         data: req.body
       });

       res.status(httpStatus.OK).json({
         message: "Player Create",
         player
       })
       break;
      case "GET":
       const players = await client.player.findMany({
         include: {
           Squad: true,
           Team: true,
           GameEvent: true,
           scholarship: true,
          
  }
})
       return res.status(200).json({ players })
     case 'PATCH':
      return res.status(200).json({ name: 'John Doe' })

     default:
      return res.status(httpStatus.BAD_GATEWAY).json({ message: `${req.method} is not valid` })
    }
  } catch (error) {
    console.log("\n\n",error)
   return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
     error
     
   })
  }
  
 } else {
  return res.status(httpStatus.UNAUTHORIZED).json({
   message: "UNAUTHORIZED"
  })
 }
 
}

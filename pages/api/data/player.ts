// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
 switch (req.method){
  case 'POST':
    return res.status(200).json({ name: 'John Doe' });
   case "GET":
    //  const user = await prisma.user.find()
    return res.status(200).json({ user: "" })
  case 'PATCH':
    return res.status(200).json({ name: 'John Doe' })
  case 'DELETE':
    return res.status(200).json({ name: 'John Doe' })
  default:
   return res.status(400).json({ name: 'Wrong' })
 }
}

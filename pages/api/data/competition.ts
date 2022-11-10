// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
 switch (req.method){
  case 'POST':
   return res.status(200).json({ name: 'John Doe' });
  case "GET":
   return res.status(200).json({ name: 'John Doe' })
  case 'PATCH':
   return res.status(200).json({ name: 'John Doe' })
  
  default:
   return res.status(400).json({ name: 'Wrong' })
 }
}

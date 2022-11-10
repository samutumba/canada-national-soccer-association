import axios from "axios";

export class ImageHosting {
 static async upload(file: string) {
  axios.post('https://freeimage.host/api/1/upload', {
   key: process.env.FREE_IMAGE_API_KEY,
   action: "upload",
   source: file
  }).then((res) => {
   return {
    success: true,
    url: res.data.image.url
   }
  }).catch((err) => {
   return {
    success: false,
    err
    }
   })
 }
}
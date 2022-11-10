import CryptoJS from "crypto-js";
const secret = process.env.HASH_SECRET || "";

export class Hasher {
 static encrypt(value: string) {
  return CryptoJS.AES.encrypt(value, secret).toString();
 }
 static decrypt(value: string) {
  return CryptoJS.AES.decrypt(value, secret);
  }
}
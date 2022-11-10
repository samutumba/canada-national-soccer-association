import bcrypt from 'bcryptjs'

export class PasswordHasher {

    /** Function to hash passwords
     *
     * @param password unhashed password
     * @returns hashed Password
     */
    static async hash(password: string) {
        const salt = await bcrypt.genSalt(10)
        return await bcrypt.hash(password, salt)
    }

    /** Function to compare hashes and passwords
     *
     * @param password
     * @param hashedPassword
     * @returns whether passwords are the same
     */
 static async compare(password: string, hashedPassword: string) {
     const answer = await bcrypt.compare(password, hashedPassword);
  return answer;
    }

}

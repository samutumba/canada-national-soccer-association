import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
   CredentialsProvider({
    name: 'Credentials',
    credentials: {
      username: { label: "Username", type: "text", placeholder: "samutumba" },
      password: {  label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
     
      const user = {}
      // If no error and we have user data, return it
      if (user) {
        return user
      }
      // Return null if user data could not be retrieved
      return null
    }
  })
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)
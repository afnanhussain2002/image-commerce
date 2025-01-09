import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions ={
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials:{},
            async authorize(credentials) {
               return {id: 1, name:'admin', role: 'admin'}
            }
        })
    ]
}
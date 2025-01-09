import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions ={
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials:{
                email:{
                    label: "Email",
                    type: "email",
                    placeholder: "email"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "password"
                }
            },
            async authorize(credentials) {
               return {id: 1, name:'admin', role: 'admin'}
            }
        })
    ]
}
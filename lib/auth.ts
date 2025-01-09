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
               if (!credentials?.email || !credentials?.password) {
                throw new Error("Invalid credentials");
               }
            }
        })
    ]
}
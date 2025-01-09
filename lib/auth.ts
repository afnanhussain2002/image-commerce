import { NextAuthOptions } from "next-auth";
import { connectToDatabase } from "./db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

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

               try {
                await connectToDatabase();

                const user = await User.findOne({email: credentials.email});

                if (!user) {
                    throw new Error("No User Found with this email");
                }

                const isValid = await bcrypt.compare(credentials.password, user.password);
               } catch (error) {
                console.error("Auth error",error);
                throw error;
               }
            }
        })
    ]
}
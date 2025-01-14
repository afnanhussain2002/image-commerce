import { connectToDatabase } from "@/lib/db";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
            return NextResponse.json({ error: "email and password required" }, { status: 400 });
        }

        await connectToDatabase();

        const existingUser = await User.findOne({ email });
        
    } catch (error) {
        console.log(error);
    }
}
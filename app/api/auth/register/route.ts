import { connectToDatabase } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
            return NextResponse.json({ error: "email and password required" }, { status: 400 });
        }

        await connectToDatabase();
    } catch (error) {
        console.log(error);
    }
}
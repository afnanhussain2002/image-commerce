import { connectToDatabase } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, props:{params: Promise<{id: string}>}) {
    try {
        const {id} = await props.params;
        await connectToDatabase();
        
    } catch (error) {
        console.error("Error fetching single product:", error);
        return NextResponse.json({ error: "Failed to fetch single product" }, { status: 500 });
    }

}
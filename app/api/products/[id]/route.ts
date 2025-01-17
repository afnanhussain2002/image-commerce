import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, props:{params: Promise<{id: string}>}) {
    try {
        
    } catch (error) {
        console.error("Error fetching single product:", error);
        return NextResponse.json({ error: "Failed to fetch single product" }, { status: 500 });
    }

}
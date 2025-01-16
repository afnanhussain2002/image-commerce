import { connectToDatabase } from "@/lib/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectToDatabase();
        const products = await Product.find({}).lean();

        if (!products || products.length === 0) {
            return NextResponse.json({ message: "No products found" }, { status: 404 });
        }
    } catch (error) {
        
    }
}
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

        return NextResponse.json({ products }, { status: 200 });
    } catch (error) {
        console.error("Error fetching products:", error);
        return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
    }
}
import { connectToDatabase } from "@/lib/db";
import Product from "@/models/Product";

export async function GET() {
    try {
        await connectToDatabase();
        const products = await Product.find({}).lean();
    } catch (error) {
        
    }
}
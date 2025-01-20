import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.text();
        const signature = request.headers.get('x-razorpay-signature');
        
    } catch (error) {
        
    }
}
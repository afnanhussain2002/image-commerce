import { NextRequest } from "next/server";
import crypto from "crypto";

export async function POST(request: NextRequest) {
    try {
        const body = await request.text();
        const signature = request.headers.get('x-razorpay-signature');

        const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET!).update(body).digest('hex');

        if (expectedSignature !== signature) {
            return new Response('Invalid signature', { status: 400 });
            
        }

        const event = JSON.parse(body);
        
    } catch (error) {
        
    }
}
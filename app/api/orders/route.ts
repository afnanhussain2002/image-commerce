import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(request: Request) {
    try {
        const session = await getServerSession(authOptions);
    } catch (error) {
        
    }
}
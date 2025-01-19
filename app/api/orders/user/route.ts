export async function GET() {
    try {
        const session = await getServerSession(authOptions);
    } catch (error) {
        console.error("orders get error", error);
    }
}
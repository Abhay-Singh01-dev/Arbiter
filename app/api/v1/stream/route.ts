export async function GET() {
  return new Response("data: connected\n\n", {
    headers: {
      "Content-Type": "text/event-stream",
    },
  });
}
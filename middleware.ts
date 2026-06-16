export function middleware() {
  return new Response(null);
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
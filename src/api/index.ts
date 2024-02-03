import { fetchUserProfile } from "../lib/fetch";

const server = Bun.serve({
  port: 1234,
  async fetch(request) {
    const { pathname, searchParams } = new URL(request.url);

    if(pathname.startsWith("/api/users/")) {
      const userId = searchParams.get("userId")!;
      const userName = searchParams.get("userName")!;

      const data = await fetchUserProfile({ userId: userId, userName: userName })

      return new Response(JSON.stringify(data), {
        headers: {
          "content-type": "application/json",
        },
      });
    }

    return new Response(null, { status: 404 });

  },
})

console.log(`Listening on localhost:${server.port}`)
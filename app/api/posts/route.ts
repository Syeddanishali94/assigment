import { NextResponse } from 'next/server';
import { posts } from './data';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    console.log('Received ID:', id);

    if (id) {
      const numericId = parseInt(id, 10);

      if (isNaN(numericId)) {
        return new Response(JSON.stringify({ error: "Invalid ID format" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      const blog = posts.find((b) => b.id === numericId);

      if (blog) {
        return new Response(JSON.stringify(blog), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      } else {
        return new Response(JSON.stringify({ error: "Blog not found" }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      }
    }

    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing the request:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

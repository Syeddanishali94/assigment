import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  img: string;
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data = await res.json();

  if (!Array.isArray(data)) {
    throw new Error("Unexpected response format");
  }

  return data as Post[];
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <Card className="h-full">
      <Image
        src={post.img}
        alt={post.title}
        width={500}
        height={500}
        className="w-full h-[250px]"
      />
      <Link href={`/blogpage/${post.id}`}>
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
        </CardHeader>
      </Link>
      <CardContent>
        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{post.author}</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
        </div>
      </CardContent>
    </Card>
  );
}

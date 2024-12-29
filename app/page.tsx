import PostCard from '@/components/PostCard';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch('/api/posts', { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  const data = await res.json();

  if (!Array.isArray(data)) {
    throw new Error('Unexpected response format');
  }

  return data as Post[];
}

export default async function Home() {
  let posts: Post[] = [];

  try {
    posts = await getPosts();
  } catch (error) {
    console.error(error.message);
  }

  return (
    <div className="mt-[45px] bg-background">
    
      {/* Main Content Section */}
      <main className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Latest Posts</h2>
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No posts available at the moment.</p>
        )}
      </main>

     
    </div>
  );
}

import PostCard from '@/components/PostCard';

interface Post {
  id: any;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  img: string;
}


const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, { cache: 'no-store' });

    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    const posts = await response.json();

    if (!Array.isArray(posts)) {
      throw new Error('Unexpected response format');
    }

    return posts.map((post) => ({
      ...post,
      id: String(post.id), // Ensure id is a string
    })) as Post[];
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching posts:', error.message);
    } else {
      console.error('Unknown error occurred:', error);
    }
    return [];
  }
};

export default async function Home() {
  let posts: Post[] = [];

  try {
    posts = await fetchPosts();
  } catch (error) {
    console.error('Failed to load posts:', error);
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
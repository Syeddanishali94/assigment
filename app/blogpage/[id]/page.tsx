"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  img: string;
  content: string;
}

interface Comment {
  id: number;
  text: string;
  user: string;
}

export default function PostPage() {
  const { id } = useParams<{ id: string }>(); 
  const [postData, setPostData] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  useEffect(() => {
    if (!id) {
      setError("Missing 'id' in URL.");
      return;
    }

    async function fetchPostData() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/posts?id=${id}`
        );

        if (!response.ok) {
          throw new Error("Post not found");
        }

        const post = await response.json();
        setPostData(post);
      } catch (err) {
        console.error("Error fetching post:", err);
        setError("Failed to fetch the post.");
      }
    }

    fetchPostData();

    // Load comments from localStorage
    const savedComments = localStorage.getItem(`comments-${id}`);
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, [id]);

  const handleAddComment = () => {
    if (!newComment.trim()) return; // Prevent empty comments
    const comment: Comment = {
      id: Date.now(),
      text: newComment.trim(),
      user: "Anonymous",
    };

    const updatedComments = [...comments, comment];
    setComments(updatedComments);
    localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments));
    setNewComment("");
  };

  if (error) {
    return <div className="text-red-600 text-center mt-8">{error}</div>;
  }

  if (!postData) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article>
        <header className="mb-6">
          <h1 className="text-4xl font-bold">{postData.title}</h1>
          <div className="text-muted-foreground text-sm">
            <span>By {postData.author}</span> •{" "}
            <time dateTime={postData.date}>
              {new Date(postData.date).toLocaleDateString()}
            </time>
          </div>
        </header>

        {postData.img && (
          <div className="mb-6">
            <img
              src={postData.img}
              alt={postData.title}
              className="w-full h-auto rounded"
            />
          </div>
        )}

        <section className="prose max-w-none">
          {postData.content.split("\n").map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </section>
      </article>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-grow border p-2 rounded"
          />
          <button
            onClick={handleAddComment}
            className="bg-primary text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
        <ul className="mb-6 space-y-4">
          {comments.map((comment) => (
            <li key={comment.id} className="border-b pb-2">
              <p className="text-sm text-muted-foreground">{comment.user}:</p>
              <p>{comment.text}</p>
            </li>
          ))}
        </ul>
        
      </section>
    </div>
  );
}

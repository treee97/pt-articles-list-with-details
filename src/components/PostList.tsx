import { PostCard } from "./PostCard";
import { fetchPosts } from "../api/fetchPosts";
import { useState, useEffect } from "react";
import { PostListProps, IPost } from "../types/types";

export const PostList = ({ onPostSelect }: PostListProps) => {
  const [posts, setPosts] = useState<IPost[]>();
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const postsListData = async () => {
      try {
        const postsData = await fetchPosts();
        setPosts(postsData);
      } catch (error) {
        console.log("Error fetching articles: ", error);
      }
    };
    postsListData();
  }, []);

  const handlePostSelect = (post: IPost) => {
    onPostSelect(post);
    setActive(post.id);
  };

  return (
    <section className="w-full md:w-2/5 p-8 bg-red-300 overflow-y-auto max-h-screen">
      <h2 className="text-2xl font-bold">Articles</h2>
      <div className="flex gap-2 flex-col p-4">
        {posts ? (
          posts.map((post) => (
            <PostCard
              key={post.id}
              {...post}
              onSelect={() => handlePostSelect(post)}
              isActive={post.id === active}
            />
          ))
        ) : (
          <p>Articles are being loaded</p>
        )}
      </div>
    </section>
  );
};

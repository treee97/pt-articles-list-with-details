import { ArticleCard } from "./ArticleCard";
import { fetchPosts } from "../api/fetchPosts";
import { useState, useEffect } from "react";
import { ArticleListProps, IPost } from "../types/types";

export const ArticleList = ({ onPostSelect }: ArticleListProps) => {
  const [posts, seIPosts] = useState<IPost[]>();
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const postsListData = async () => {
      try {
        const postsData = await fetchPosts();
        seIPosts(postsData);
      } catch (error) {
        console.log("Error fetching it bro => ", error);
      }
    };
    postsListData();
  }, []);

  const handlePostSelect = (post: IPost) => {
    onPostSelect(post);
    setActive(post.id);
  };
  return (
    <section className="w-full md:w-1/3 p-8 bg-red-300 overflow-y-auto max-h-screen">
      <h2 className="text-2xl font-bold">Articles</h2>
      <div className="flex gap-2 flex-col p-4">
        {posts ? (
          posts.map((post) => (
            <ArticleCard
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

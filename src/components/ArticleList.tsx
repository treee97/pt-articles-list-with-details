import { ArticleCard } from "./ArticleCard";
import { fetchPosts } from "../api/fetchPosts";
import { useState, useEffect } from "react";
import { ArticleListProps, IPost } from "../types/types";

export const ArticleList = ({ onPostSelect }: ArticleListProps) => {
  const [posts, seIPosts] = useState<IPost[]>();
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
  };
  return (
    <section className="w-1/2 p-8 overflow-hidden overflow-y-auto">
      <h2>Articles</h2>
      <div className="flex gap-2 flex-col p-4">
        {posts ? (
          posts.map((post) => (
            <ArticleCard
              key={post.id}
              {...post}
              onSelect={() => handlePostSelect(post)}
            />
          ))
        ) : (
          <p>Articles are being loaded</p>
        )}
      </div>
    </section>
  );
};

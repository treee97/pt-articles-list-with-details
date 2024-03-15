import { ArticleDetailsProps } from "../types/types";
import ArticleInfoCard from "./ArticleInfoCard";

export const ArticleDetails = ({ post }: ArticleDetailsProps) => {
  if (!post) {
    return (
      <section className="hidden w-full p-8 md:flex items-center justify-center">
        <p>No post selected</p>
      </section>
    );
  }

  return (
    <section className="hidden md:block w-full p-8">
      <ArticleInfoCard post={post} />
    </section>
  );
};

import { PostDetailsProps } from "../types/types";
import PostListCardInfo from "./PostListCardInfo";

export const PostDetails = ({ post }: PostDetailsProps) => {
  if (!post) {
    return (
      <section className="hidden w-full p-8 md:flex items-center justify-center">
        <p>No post selected</p>
      </section>
    );
  }

  return (
    <section className="hidden md:block w-full p-8">
      <PostListCardInfo post={post} />
    </section>
  );
};

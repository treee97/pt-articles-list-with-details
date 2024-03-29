import { ArticleDetailsProps } from "../types/types";

const ArticleInfoCard = ({ post }: ArticleDetailsProps) => {
  return (
    <div className="">
      <p>Post: {post?.id}</p>
      <p>Title: {post?.title}</p>
      <p>Body: {post?.body}</p>
    </div>
  );
};

export default ArticleInfoCard;

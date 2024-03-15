import { ArticleDetailsProps } from "../types/types";

const ArticleInfoCard = ({ post }: ArticleDetailsProps) => {
  const { title, body, id } = post;

  return (
    <div className="">
      <p>Post: {id}</p>
      <p>Title: {title}</p>
      <p>Body: {body}</p>
    </div>
  );
};

export default ArticleInfoCard;

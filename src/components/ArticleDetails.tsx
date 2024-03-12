import { ArticleDetailsProps } from "../types/types";

export const ArticleDetails = ({ post }: ArticleDetailsProps) => {
  if (!post) {
    return (
      <section className="w-1/2 p-8 flex items-center justify-center">
        <p>No post selected</p>
      </section>
    );
  }
  const { title, body, id } = post;

  return (
    <section className="w-full p-8">
      <div className="">
        <p>Post: {id}</p>
        <p>Title: {title}</p>
        <p>Body: {body}</p>
      </div>
    </section>
  );
};

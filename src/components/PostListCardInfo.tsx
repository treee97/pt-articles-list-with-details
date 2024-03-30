import { PostDetailsProps } from "../types/types";

const PostListCardInfo = ({ post }: PostDetailsProps) => {
  return (
    <div className="">
      <p>Post: {post?.id}</p>
      <p>Title: {post?.title}</p>
      <p>Body: {post?.body}</p>
    </div>
  );
};

export default PostListCardInfo;

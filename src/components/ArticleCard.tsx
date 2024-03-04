import { ArticleCardPost } from "../types/types";
export const ArticleCard = ({ title, id, onSelect }: ArticleCardPost) => {
  return (
    <div className="w-full min-h-32 cursor-pointer" onClick={onSelect}>
      <p>ID: {id}</p>
      <p className="title">{title}</p>
    </div>
  );
};

import { ArticleCardPost } from "../types/types";
export const ArticleCard = ({ title, id, onSelect }: ArticleCardPost) => {
  return (
    <div
      className="w-full min-h-28 hover:bg-gray-50 rounded-md p-2 cursor-pointer overflow-hidden overflow-y-auto"
      onClick={onSelect}
    >
      <p>ID: {id}</p>
      <p className="title">{title}</p>
    </div>
  );
};

import { PostCardProps } from "../types/types";
export const PostCard = ({ title, id, onSelect, isActive }: PostCardProps) => {
  return (
    <button
      className={`${
        isActive ? "bg-blue-600" : ""
      } w-full min-h-28 hover:bg-gray-50 border border-red-500 rounded-md p-2 cursor-pointer overflow-hidden overflow-y-auto`}
      onClick={onSelect}
    >
      <div className="flex justify-between">
        <p>Article: {id}</p>
        <p>Read :) delete sonar cloud</p>
      </div>
      <p className="title">{title}</p>
    </button>
  );
};

import { ArticleCardPost } from "../types/types";
export const ArticleCard = ({
  title,
  id,
  onSelect,
  isActive,
}: ArticleCardPost) => {
  return (
    <div
      className={`${
        isActive ? "bg-blue-600" : ""
      } w-full min-h-28 hover:bg-gray-50 border border-red-500 rounded-md p-2 cursor-pointer overflow-hidden overflow-y-auto`}
      onClick={onSelect}
    >
      <div className="flex justify-between">
        <p>Article: {id}</p>
        <p>Read :)</p>
        <p>Read :)</p> <p>Read :)</p> <p>Read :)</p> <p>Read :)</p>{" "}
        <p>Read :)</p> <p>Read :)</p>
        java.lang.IllegalStateException: The plugin [python] does not support
        Java 11.0.14 i have java 17 tho
      </div>
      <p className="title">{title}</p>
    </div>
  );
};

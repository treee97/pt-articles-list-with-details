export interface IPost {
    userId: string;
    id: number;
    title: string;
    body: string;
}
export interface ArticleCardPost extends IPost{
    onSelect: () => void;
}
export interface ArticleListProps {
    onPostSelect: (post: IPost) => void;
  }

  export interface ArticleDetailsProps {
    post: IPost | null;
  }
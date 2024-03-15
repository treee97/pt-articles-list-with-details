export interface IPost {
    userId: string;
    id: number;
    title: string;
    body: string;
}
export interface ArticleCardPost extends IPost{
    onSelect: () => void;
    isActive: boolean;
}
export interface ArticleListProps {
    onPostSelect: (post: IPost) => void;
  }

  export interface ArticleDetailsProps {
    post: IPost | null;
  }
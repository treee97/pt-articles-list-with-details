export interface IPost {
    userId: string;
    id: number;
    title: string;
    body: string;
    read: boolean;
}
export interface ArticleCardPost extends IPost{
    onSelect: () => void;
    isActive: boolean;
}
export interface ArticleListProps {
    onPostSelect: (post: IPost) => void;
    handleIsMobileModal: () => void;
  }

export interface ArticleDetailsProps {
    post: IPost | null;
  }
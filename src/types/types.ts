export interface IPost {
    userId: string;
    id: number;
    title: string;
    body: string;
    read: boolean;
}
export interface PostCardProps extends IPost{
    onSelect: () => void;
    isActive: boolean;
}
export interface PostListProps {
    onPostSelect: (post: IPost) => void;
    handleIsMobileModal: () => void;
  }

export interface PostDetailsProps {
    post: IPost | null;
  }
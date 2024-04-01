import { IPost } from "../types/types";

export const fetchPosts = async () => {
    try {
        // We destructure. Get the posts from the fetch and then we give it the type IPost[].
        const { posts }: { posts: IPost[] } = await fetch('https://my.api.mockaroo.com/posts.json?key=9fc4a870').then(response => response.json())
    
    return posts
        
    } catch (error) {
        console.log(error);
        
    }
    
}
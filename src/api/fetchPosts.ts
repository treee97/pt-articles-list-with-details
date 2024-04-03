import { IPost } from "../types/types";

const MOCKAROO_API_KEY = import.meta.env.VITE_MOCKAROO_API_KEY

export const fetchPosts = async () => {
    try {
        // We destructure. Get the posts from the fetch and then we give it the type IPost[].
        const { posts }: { posts: IPost[] } = await fetch(`https://my.api.mockaroo.com/posts.json?key=${MOCKAROO_API_KEY}`).then(response => response.json())
    
    return posts
        
    } catch (error) {
        console.log(error);
        
    }
    
}
import { IPost } from "../types/types";

export const fetchPosts = async () => {
    try {
    const response: IPost[] = await fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
    
    return response
        
    } catch (error) {
        console.log(error);
        
    }
    
}
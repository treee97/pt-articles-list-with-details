import { useState } from "react";
import "./App.css";
import { ArticleDetails } from "./components/ArticleDetails";
import { ArticleList } from "./components/ArticleList";
import { IPost } from "./types/types";

function App() {
  const [selectedPost, setSelectedPost] = useState<IPost | null>(null);
  const handlePostSelect = (post: IPost) => {
    setSelectedPost(post);
  };
  return (
    <>
      <header className="relative border border-red-500">
        <nav className="flex justify-between border border-blue-500">
          <div>githublogo</div>
          <div>Title</div>
          <div>my website!</div>
        </nav>
      </header>
      <main className="flex bg-gray-200 gap-2">
        <ArticleList onPostSelect={handlePostSelect} />
        <div className="border border-slate-100 my-8" />
        <ArticleDetails post={selectedPost} />
      </main>
    </>
  );
}

export default App;

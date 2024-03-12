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
    <main className="bg-gray-200 gap-2 min-h-screen border-2 border-green-500">
      <header className="">
        <nav className="flex justify-between border border-blue-500">
          <div>githublogo</div>
          <div>Title</div>
          <div>my website!</div>
        </nav>
      </header>
      <div className="flex">
        <ArticleList onPostSelect={handlePostSelect} />
        <div className="border border-slate-100 my-8" />
        <ArticleDetails post={selectedPost} />
      </div>
    </main>
  );
}

export default App;

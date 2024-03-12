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
    <main className="bg-gray-200 gap-2">
      <header className="">
        <nav className="flex justify-between">
          <div className="text-xl">githublogo</div>
          <div>Title</div>
          <div>my website!</div>
        </nav>
      </header>
      <div className="flex gap-5 max-h-[calc(100vh_-_28px)]">
        {/* nota: este 24px sale del tamaño de lo que ocupa el header. esto es 100vh - header height.
        Inspeccionamos para ver cuánto mide. Esto no me parece muy práctico.  */}
        <ArticleList onPostSelect={handlePostSelect} />
        <div className="border border-red-600 my-8" />
        <ArticleDetails post={selectedPost} />
      </div>
    </main>
  );
}

export default App;

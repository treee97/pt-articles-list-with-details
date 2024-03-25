import { useEffect, useState } from "react";
import "./App.css";
import { ArticleDetails } from "./components/ArticleDetails";
import { ArticleList } from "./components/ArticleList";
import { IPost } from "./types/types";
import ModalArticleDetailsMobile from "./components/modalArticleDetailsMobile/ModalArticleDetailsMobile";

function App() {
  const [selectedPost, setSelectedPost] = useState<IPost | null>(null);
  const [isMobileModal, setIsMobileModal] = useState(false);
  const handlePostSelect = (post: IPost) => {
    setSelectedPost(post);
    setIsMobileModal(true);
  };
  const handleIsMobileModal = () => {
    setIsMobileModal(!isMobileModal);
  };

  useEffect(() => {
    const handleResize = () => {
      if (selectedPost) {
        setIsMobileModal(window.innerWidth < 768);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [selectedPost]);

  // >768

  return (
    <div className="bg-gray-200 gap-2">
      {/* navbar */}
      <header className="">
        <nav className="flex justify-between">
          <div className="text-xl">githublogo</div>
          <div>Title</div>
          <div>my website!</div>
        </nav>
      </header>
      {/* main section */}
      <main className="flex gap-5 max-h-[calc(100vh_-_28px)]">
        {/* nota: este 24px sale del tamaño de lo que ocupa el header. esto es 100vh - header height.
        Inspeccionamos para ver cuánto mide. Esto no me parece muy práctico.  */}
        <ArticleList
          onPostSelect={handlePostSelect}
          handleIsMobileModal={handleIsMobileModal}
        />
        {isMobileModal ? (
          <ModalArticleDetailsMobile
            handleIsMobileModal={handleIsMobileModal}
          />
        ) : (
          <ArticleDetails post={selectedPost} />
        )}
      </main>
      {/*  */}
    </div>
  );
}

export default App;

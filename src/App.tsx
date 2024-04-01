import { useEffect, useState } from "react";
import "./App.css";
import { PostDetails } from "./components/PostDetails";
import { PostList } from "./components/PostList";
import { IPost } from "./types/types";
import { ModalPostDetails } from "./components/modalArticleDetailsMobile/ModalPostDetails";
function App() {
  const [selectedPost, setSelectedPost] = useState<IPost | null>(null);
  const [isMobileModal, setIsMobileModal] = useState<boolean>(
    window.innerWidth < 768
  );

  const handlePostSelect = (post: IPost) => {
    setSelectedPost(post);

    if (window.innerWidth < 768 && post) {
      setIsMobileModal(true);
    }
  };
  const handleIsMobileModal = () => {
    setIsMobileModal(!isMobileModal);
    if (!isMobileModal) {
      setSelectedPost(null);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileModal(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        {/* nota: este 24px sale del tamaño de lo que ocupa el header. esto es 100vh - header height.*/}
        <PostList
          onPostSelect={handlePostSelect}
          handleIsMobileModal={handleIsMobileModal}
        />
        {isMobileModal && selectedPost ? (
          <ModalPostDetails handleIsMobileModal={handleIsMobileModal} />
        ) : (
          <PostDetails post={selectedPost} />
        )}
      </main>
      {/*  */}
    </div>
  );
}

export default App;

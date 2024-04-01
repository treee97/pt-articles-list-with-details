interface IProps {
  handleIsMobileModal: () => void;
}
export const ModalPostDetails = ({ handleIsMobileModal }: IProps) => {
  return (
    <div className="z-10 animate-fade-in inset-0 fixed bg-black/60 backdrop-blur-sm min-w-screen items-center flex justify-center">
      {/* modal background */}
      <div className="h-52 w-52 absolute flex flex-col items-center p-8 shadow-md bg-white rounded-md">
        <h3>Title of modal</h3>
        <button className="border" onClick={() => handleIsMobileModal()}>
          CLOSE ME
        </button>
      </div>
    </div>
  );
};

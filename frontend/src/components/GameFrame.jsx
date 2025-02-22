
import Header from "./Header"

const GameFrame = () => {
  return (
    <div className="bg-[#161D29] min-h-screen h-fit ">
    <Header/>
    <iframe
      src="/games/index.html"
      width="1000"
      height="600"
      title="Game"
      style={{ border: "none",margin:"auto" }}
    ></iframe>
    </div>
  );
};

export default GameFrame;

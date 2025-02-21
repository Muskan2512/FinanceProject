import React from "react";
import TileGrid from "./TileGrid"; // Import the component
import Header from "./Header";
function App() {
  return (
    <div className="h-fit w-screen bg-[#161D29]  ">
    <Header/>
      <TileGrid />
    </div>
  );
}

export default App;
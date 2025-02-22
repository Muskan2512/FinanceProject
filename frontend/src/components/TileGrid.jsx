import React from "react";
import "./TileGrid.css"; // Create a separate CSS file for styling
import hangman from "../assets/hangman.jpg"
import quiz from "../assets/quiz.jpg" 
import puzzle from "../assets/puzzle.jpg"
import tutorial from "../assets/tutorial.jpg"
import { Link } from "react-router-dom";

const tilesData = [
  { imgSrc:tutorial, title: "TUTORIAL", info: "Responsive and smooth hover effect.",url:"/tutorial" },
  { imgSrc:quiz, title: "QUIZ", info: "Fully adaptable to screen sizes.", url:"/games/quiz"},
  { imgSrc:hangman, title: "FUN GAME", info: "Mobile-friendly layout included.", url:"/games/hangman" },
  // { imgSrc:puzzle, title: "PUZZLE", info: "Clean and modern card design." ,url:"/games/puzzle"},
];

const TileGrid = () => {
  return (
    <div className="tiles p-4">
      {tilesData.map((tile, index) => (
        <Link to={tile.url} className="tile" key={index}>
          <img src={tile.imgSrc} alt={tile.title} className="opacity-80"/>
          <div className="details">
            <span className="title">{tile.title}</span>
            <span className="info">{tile.info}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TileGrid;
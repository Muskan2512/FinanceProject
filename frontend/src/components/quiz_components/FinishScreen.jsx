import {useEffect} from "react";
import {ContextStore} from "../../store/ContextStore";
import {useContext} from "react";

function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  // const {user} =useContext(ContextStore);
  const userId=localStorage.getItem("user");
  // console.log("User id is:",userId);
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";


  useEffect(() => {
    const saveScore = async () => {
      if (!userId) {
        console.error("User ID is missing. Cannot save score.");
        return;
      }
    
      try {
        console.log("Inside this function", { userId, score: points });
        const response = await fetch("http://localhost:3000/api/v1/score/updateScore", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId, score: points }),
        });
    
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Error: ${response.status} - ${errorData.message}`);
        }
    
        console.log("Score saved successfully");
      } catch (error) {
        console.error("Error saving score:", error);
      }
    }});

  return (
    <div className="result_container">
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </div>
  );
}

export default FinishScreen;

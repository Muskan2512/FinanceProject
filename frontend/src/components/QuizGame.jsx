import react from "react"
import Header from "./Header"
import Quiz from "./quiz_components/Quiz"

const QuizGame=()=>{
  return <div className="h-fit min-h-screen w-screen bg-[#161D29] ">
  <Header/>
  <Quiz/>
  </div>
}

export default QuizGame;
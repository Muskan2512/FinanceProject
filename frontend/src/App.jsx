import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { Routes, Route } from 'react-router-dom'
import { ContextStore } from './store/ContextStore'
// import AllEvents from './components/AllEvents'
import AllEvents1 from './components/AllEvents1'
import Quiz from "./components/quiz_components/Quiz"
import Games from './components/Games'
import GameFrame from './components/GameFrame'
import QuizGame from "./components/QuizGame"
import Tutorial from "./components/Tutorial"
import PrivateRoute from "./components/privateRoute"
import Profile from "./components/Profile"
function App() {


  const val1 = localStorage.getItem("token")
  const val2 = localStorage.getItem("user")
  const [token, setToken] = useState(JSON.parse(val1))
  const [user, setUser] = useState(JSON.parse(val2))
  return (
    <div className="h-screen min-h-[100vh] w-screen bg-[#161D29]">
     
     <ContextStore.Provider
      value={{token:token,setToken,user:user,setUser}}>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path='/events' element={<AllEvents1/>}/> */}
        <Route path="/games" element={<AllEvents1/>}/>
        <Route path="/tutorial" element={<PrivateRoute>
        <Tutorial/>
        </PrivateRoute>}
        />
        <Route path='/games/quiz' element={
          <PrivateRoute>
        <QuizGame/>
        </PrivateRoute>}

        />
        <Route path="/games/hangman" element={
          <PrivateRoute>
        <GameFrame/>
          </PrivateRoute>        
        }/>

      <Route path="/progress" element={
        <PrivateRoute>
        <Profile/>
        </PrivateRoute>
      }/>

      </Routes>
      </ContextStore.Provider>
    </div>
  )
}

export default App

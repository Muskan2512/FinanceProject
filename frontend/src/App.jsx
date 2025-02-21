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
import Games from './components/Games'
import GameFrame from './components/GameFrame'
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
        <Route path='/events' element={<AllEvents1/>}/>
        <Route path="/games" element={<Games/>}/>
        <Route path='/games/quiz' element={<></>}/>
        <Route path='/games/puzzle' element={<></>}/>
        <Route path="/games/hangman" element={<GameFrame/>}/>
      </Routes>


      </ContextStore.Provider>
    </div>
  )
}

export default App

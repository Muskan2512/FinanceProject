import react from "react"
import {Link} from "react-router-dom"
import {useState} from "react"
import { useNavigate } from "react-router-dom";
import Header from "./Header";
const Tutorial=()=>{

  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate();
  const arr=[
    {title:"Hello World",desc:"This is the first tutorial"},
    {title:"Hello World2",desc:"This is the second tutorial"},
    {title:"Hello World3",desc:"This is the third tutorial"},
    {title:"Hello World4",desc:"This is the foruth tutorial"},
    {title:"Hello World5",desc:"This is the fifithe tutorial"},
  ]
  return(
    <div className="w-screen min-h-screen h-fit bg-[#161D29] flex flex-col justify-center items-center pad">
    <Header/>
      <p className="text-3xl navbar-color font-semibold pad ">Tutorial</p>
      <div className="flex flex-row gap-5 mx-auto flex-wrap justify-center items-center ">
      {
        arr.map((tut,i)=>{
          return(
            
            <div key={i} className="w-[25%] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 pad">
        <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg"  alt="" />
    <div className="p-5 flex flex-col justify-center items-center">
        
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dive into finance with Games</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <div className="flex flex-col items-center gap-4 p-4">

        <div className="flex flex-col items-center gap-4 p-4">
      <button onClick={() => setIsOpen(true)} className="mt cursor-pointer pad bg-blue-500 font-semibold navbar-color rounded">Play Video</button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white p-4 rounded shadow-lg w-[90%] max-w-lg">
            <button onClick={() => setIsOpen(false)} className="absolute pad top-2 right-2 text-gray-700 text-2xl">&times;</button>
            <video className="w-full rounded" controls autoPlay>
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
    </div>
    </div>
</div>


          )
        })
      }
      </div>
    </div>
  )


}

export default Tutorial
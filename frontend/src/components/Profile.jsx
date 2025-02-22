import { useEffect, useState } from "react";
import {useContext} from "react";
import {ContextStore} from "../store/ContextStore";
import Header from "./Header"

export default function ProfilePage() {
  const [users, setUser] = useState(null);

    const {user}=useContext(ContextStore);
    // console.log(user._id);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // console.log("Indeside useeffect")
        const response = await fetch(`http://localhost:3000/api/v1/score/getScore/${user._id}`);
        const data = await response.json();
        console.log("response is:",data);
        if (data.success) {
          setUser(data.data);
        } else {
          console.error("Error:", data.message);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-start items-center h-screen bg-[#161D29]">
    <Header/>
      <div className="bg-black shadow-lg rounded-lg p-6 w-96 text-center flex justify-center  gap-5 items-center flex-col navbar-color pad">
        <img 
          src={user.image || "https://via.placeholder.com/150"} 
          alt="Profile"
          className="w-20 h-20 mx-auto rounded-full border-4 border-[#161D29]"
        />
        <p className="text-xl font-semibold mt-4">UserName:{user?.userName}</p>
        <p className=" text-xl text-gray-600">Email:{user?.email}</p>
        <div className="mt-4 ">
          <p className="text-xl">
            <span className="font-semibold">Level:</span> {users?.level}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Total Score:</span> {users?.totalScore}
          </p>
        </div>
        
      </div>
    </div>
  );
}

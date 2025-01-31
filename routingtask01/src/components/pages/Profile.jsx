import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { username } = useParams(); 

  return(
    <div className="flex justify-center items-center">
      <h1><span className="text-[60px] font-bold">Welcome,</span> <span className="text-red-500 font-bold text-[60px]">{username}!</span></h1>
    </div>
  );
   
};

export default Profile;

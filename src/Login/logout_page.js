
import React from "react";

export default function Logout_page(){
  const handleClick=()=>{
    localStorage.clear();
    window.location.reload();
  }
  return(
    <div>
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}
import React from "react";
import "./style.css";
import Sidebar from "./Sidebar.js"
import Chat from "./Chat.js"

const App=()=>{
  return(
    <div className="app">
    <div className="app_body">
    <Sidebar/>
    <Chat/>
    </div>
    </div>
  )
}


export default App

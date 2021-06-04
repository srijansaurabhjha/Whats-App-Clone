import React,{useState,useEffect} from 'react'
import './SidebarChat.css'
import {Avatar} from '@material-ui/core'

const SidebarChat=({addNewChat})=>{
const [seed,setSeed] = useState('')
useEffect(()=>{
setSeed(Math.floor(Math.random()*5000))
},[])

const createChat=()=>{
  const roomName=prompt("Please Enter the name of new Chat");
  if(roomName){
    //do some stuff in database
  }
}

  return !addNewChat ?(
    <div className="sidebarChat">
    <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
    <div className="sidebarChat_Info">
    <h2>Room Name</h2>
    <p>Last Message....</p> 
    </div>
    </div>
  ):(
    <div onClick={createChat} className="sidebarChat">
    <h2>Add New Chat</h2>
    </div>
  )
}

export default SidebarChat
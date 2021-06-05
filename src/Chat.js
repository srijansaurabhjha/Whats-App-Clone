import React,{useState,useEffect} from 'react'
import './Chat.css'
import {Avatar, IconButton} from '@material-ui/core'
// import {AttachFile,MoreVert,SearchOutlined} from 'material-ui/icon'
import AttachFile from '@material-ui/icons/AttachFile'
import MoreVert from '@material-ui/icons/MoreVert'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
const Chart=()=>{
const [seed,setSeed] = useState('');
const [input,setInput]= useState('');

useEffect(()=>{
setSeed(Math.floor(Math.random()*5000))
},[])

const sendMessge=(e)=>{
e.preventDefault();
console.log(input);
setInput('');
}

  return(
    <div className="chat">
   <div className="chat_header">
   <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
   <div className="chat_headerInfo">
   <h3>Room Name</h3>
   <p>Last Seen......</p>
   </div>
   <div className="chat_headerRight">
   <IconButton>
   <SearchOutlined/>
   </IconButton>
   <IconButton>
   <AttachFile/>
   </IconButton>
   <IconButton>
   <MoreVert/>
   </IconButton>
   </div>
   </div>
   <div className="chat_body">
  <p className={`chat_message ${true && "chat_receiver"}`}>
  <span className="chat_name">
   Srijan  
  </span>
  hello
  <span className="chat_timestamp">
  7:38pm
  </span>
  </p>
   </div>
  <div className="chat_footer">
  <IconButton>
  <InsertEmoticonIcon/>
  </IconButton>
  <form >
  <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Type Your Message here"/>
  <button onClick={sendMessge} type="submit">Send</button>
  </form>
  <IconButton>
  <MicIcon/>
  </IconButton>
  </div> 
    </div>
  )
}

export default Chart
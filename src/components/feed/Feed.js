import React,{  useEffect, useState} from 'react'
import './feed.css';
import InputOptions from './InputOptions';
import CreateIcon from "@material-ui/icons/Create"
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionIcon from "@material-ui/icons/Subscriptions"
import EventNoteIcon from "@material-ui/icons/EventNote"
import CalenderViewDayIcon from "@material-ui/icons/CalendarViewDay"
import Post from './Post';
import { db } from './firebase';
import * as firebase from 'firebase'

function Feed() {
    const [input,setInput]=useState("")
    const [posts,setPosts]=useState([]);
  
     useEffect(()=>{
         db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot =>(
             setPosts(snapshot.docs.map(doc=>(
                 {
                     id:doc.id,
                     data:doc.data(),

                 }
             )))
         ))
     },[])
    const sendPost = e=>{
        e.preventDefault();
        db.collection("posts").add({
            name:'vaidik',
            description:"test",
            message:input,
            photoUrl:'',
            timestamp:firebase.FieldValue.serverTimestamp(),

         });
         setInput("");
        
        
        
    }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input type="text" value={input} onChange={e=>setInput(e.target.value) }/>
                        <button onClick={sendPost} type='submit'>Send</button>

                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOptions  Icon={ImageIcon}title="Photo" color="#70B5F9"/>
                    <InputOptions  Icon={SubscriptionIcon}title="Video" color="#E7A33E"/>
                    <InputOptions  Icon={EventNoteIcon}title="Event" color="#C0cbcd"/>
                    <InputOptions  Icon={CalenderViewDayIcon}title="Write Article" color="#7fc15e"/>
                </div>
            </div>
            {posts.map(({id,data:{name,description,message,photoUrl}})=>(
                <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoURL={photoUrl}
                />
             ) )}
           
        </div>
    )
}

export default Feed

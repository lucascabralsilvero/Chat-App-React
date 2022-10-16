import React,{useState, useEffect, useRef} from 'react';
import SendMessage from './SendMessage';
import Message from './Message';
import {query, collection, orderBy , onSnapshot} from "firebase/firestore";
import {db} from "../firebase"

const style = {
    main:  `flex flex-col p-[10px] relative overflow-auto mb-[50px] `
}

const Chat = () => {

    const [messages, setMessages] = useState([]);
    const scroll = useRef();

    useEffect(() => {
        const q = query(collection(db, "messages"), orderBy("timestamp"));
        const unsubscribed = onSnapshot(q,(querySnapshot) =>{
            let messages = []
            querySnapshot.forEach((doc) => {
                messages.push({...doc.data(), id:doc.id})
            })
            setMessages(messages)    
        })
        scroll.current?.scrollIntoView({ behavior: "smooth"});

        return () => unsubscribed();
    }, []);


  return (
    <>
        <main className={style.main}>
            {messages && messages.map((message) => (
                <Message key={message.id} message={message} />
                ))}
        <span  ref={scroll}></span>
        </main>
        <SendMessage scroll={scroll} />
    </>
  )
}

export default Chat;
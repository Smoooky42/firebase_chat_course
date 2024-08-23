import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Avatar, Container, Grid, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Loader from "./Loader";
import { serverTimestamp, collection, query, orderBy, addDoc} from "firebase/firestore";
import {useCollectionData} from "react-firebase-hooks/firestore";

const Chat = () => {
    const {auth, firestore} = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState("");

    const q = query(collection(firestore, "messages"), orderBy("createdAt"))
    const [messages, loading] = useCollectionData(q)


    const sendMessage = async () => {
        await addDoc(collection(firestore, "messages"), {
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoURL,
            text: value,
            createdAt: serverTimestamp(),
        })
        setValue('')
    }

    if (loading) return <Loader />;

    return (
        <Container>
            <Grid container style={{height: window.innerHeight - 84, marginTop: 20}} justifyContent={"center"} >
                <div style={{width: "80%", height: "70vh", border: "1px solid black", overflowY: "auto"}}>
                    {messages.map(msg =>
                        <div style={{
                            margin:10,
                            border: user.uid === msg.id ? "2px solid green" : "2px solid red",
                            marginLeft: user.uid === msg.id ? "auto" : "10px",
                            width: "fit-content",
                            padding: 5
                        }}>
                            <Grid container>
                                <Avatar src={msg.photoURL} />
                                <div>{msg.displayName}</div>
                            </Grid>
                            <div>{msg.text}</div>
                        </div>
                    )}
                </div>
                <Grid container diraction={"column"} style={{width: "80%"}} justifyContent={"flex-end"}>
                    <TextField value={value} onChange={(e)=> setValue(e.target.value)} fullWidth maxRows={2} variant={"outlined"}/>
                    <Button onClick={sendMessage} variant={"outlined"}>Отправить</Button>
                </Grid>
            </Grid>

        </Container>
    );
};

export default Chat;
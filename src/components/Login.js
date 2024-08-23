import React, {useContext} from 'react';
import {Container, Grid} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Context} from '../index'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const Login = () => {
    const {auth} = useContext(Context);


    const login = async () => {
        const provider = new GoogleAuthProvider()
        const {user} = await signInWithPopup(auth, provider);
    }

    return (
        <Container className="Login">
            <Grid
                container
                style={{height: window.innerHeight - 64}}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Grid
                    container
                    style={{width:400, background: 'lightgray'}}
                    alignItems={"center"}
                    justifyContent={"center"}
                    diraction={"column"}
                >
                    <Box p={5}>
                        <Button onClick={login} variant={"outlined"}>Войти с помощью Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
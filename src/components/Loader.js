import React from 'react';
import {Container, Grid} from "@mui/material";

const Loader = () => {
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
                    alignItems={"center"}
                    justifyContent={"center"}
                    diraction={"column"}
                >
                    <span className="loader"></span>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;
import Home from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";
import React from 'react';
import { Box } from "@mui/material";

export default function SinglePageRoutes({refs}) {
    return (
        <Box sx={{
            mt: '3rem'
        }}>
            <Home innerRef={refs.refHome}/>
            <About innerRef={refs.refAbout}/>
            <Contact innerRef={refs.refContact}/>
        </Box>
    );
}
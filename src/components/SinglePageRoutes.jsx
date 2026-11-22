import Home from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";
import React from 'react';

export default function SinglePageRoutes({refs}) {
    return (
        <div style={{marginTop: '3rem'}}>
            <Home innerRef={refs.refHome}/>
            <About innerRef={refs.refAbout}/>
            <Contact innerRef={refs.refContact}/>
        </div>
    );
}
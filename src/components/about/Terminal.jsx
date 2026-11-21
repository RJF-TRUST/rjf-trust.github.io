import React from 'react';
import Style from "./Terminal.module.scss";
import classNames from "classnames";
import {Box} from "@mui/material";

const iconClass = "fa fa-circle";

function Terminal(props) {
   const {text} = props;

   return (
      <Box
         component={'section'}
         className={classNames(Style.terminal, Style.shadowed)}
         sx={{
            width: {xs: '80%', md: '50%'},
            borderRadius: '0.5rem',
            mb: '4rem'
         }}>
         <Box
            sx={{
               p: '0.5rem',
               borderRadius: '0.5rem 0.5rem 0 0',
               fontSize: '1rem',
               backgroundColor: '#8c8c8c'
            }}>
            <i className={classNames(iconClass, Style.red)}/>
            <i className={classNames(iconClass, Style.amber)}/>
            <i className={classNames(iconClass, Style.green)}/>
         </Box>
         <Box
            sx={{
               py: {xs: '1rem', md: '2rem'},
               px: {xs: '2rem', md: '3rem'},
               borderRadius: '0 0 0.5rem 0.5rem',
               fontSize: '1.5rem',
               fontFamily: 'Courier New, Courier, monospace',
               backgroundColor: '#27242f'
            }}>
            {text}
         </Box>
      </Box>
   );
}

export default Terminal;
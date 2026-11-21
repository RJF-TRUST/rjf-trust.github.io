import React, { useEffect, useState } from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from './Navbar';
import { Box } from '@mui/material';
import MultiPageRoutes from './MultiPageRoutes';
import { singlePage } from '../info/Info';
import SinglePageRoutes from './SinglePageRoutes';
import useScrollObserver from '../hooks/useScrollObserver';

export default function BaseLayout() {
   const pathname = window.location.pathname;
   const [active, setActive] = useState(pathname === '/' ? 'home' : pathname.slice(1));
   const refHome = useScrollObserver(setActive);
   const refAbout = useScrollObserver(setActive);
   const refContact = useScrollObserver(setActive);
   let [darkMode, setDarkMode] = useState(false);



   function handleToggleDarkMode() {
      let oppositeOfCurrentDarkMode = !darkMode
      console.log(oppositeOfCurrentDarkMode)
      localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`)
      setDarkMode(oppositeOfCurrentDarkMode)
   }

   useEffect(() => {
      let detectedDarkMode = JSON.parse(localStorage.getItem('darkMode'));

      if (detectedDarkMode) {
         setDarkMode(detectedDarkMode)
      } else {
         localStorage.setItem('darkMode', 'false')
      }
   }, [])

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         {/* Page shell: navbar, content and footer stacked in a full-height column.
             MUI 9 removed GridLegacy (`item`), and Grid no longer supports column layouts. */}
         <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                   minHeight: '100vh', width: '100%'}}>
            <Box>
               <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} active={active} setActive={setActive} />
            </Box>
            <Box sx={{flexGrow: 1}}>
               {singlePage ? <SinglePageRoutes refs={{refHome, refAbout, refContact}}/> : <MultiPageRoutes />}
            </Box>
            <Box>
               <Box
                  component={'footer'}
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     py: '1.5rem',
                     width: '100%',
                     opacity: 0.7
                  }}>
                  <p>portfolio created &#10000; by <a href={'https://jacky.fan.nz/'}>Jacky Fan</a></p>
                  <p>copyright© 2026</p>
               </Box>
            </Box>
         </Box>
      </Box>
   );
}


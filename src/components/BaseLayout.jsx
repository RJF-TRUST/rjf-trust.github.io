import React, { useEffect, useState } from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from './Navbar';
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
      <div className={darkMode ? Style.dark : Style.light}>
         {/* Page shell: navbar, content and footer stacked in a full-height column. */}
         <div className={Style.shell}>
            <div>
               <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} active={active} setActive={setActive} />
            </div>
            <div className={Style.content}>
               {singlePage ? <SinglePageRoutes refs={{refHome, refAbout, refContact}}/> : <MultiPageRoutes />}
            </div>
            <div>
               <footer className={Style.footer}>
                  <p>portfolio created &#10000; by <a href={'https://jacky.fan.nz/'}>Jacky Fan</a></p>
                  <p>copyright© 2026</p>
               </footer>
            </div>
         </div>
      </div>
   );
}


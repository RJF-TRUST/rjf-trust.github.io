import React from 'react';
import Style from "./Toggler.module.scss";

export default function Toggler({darkMode, handleClick}) {
   return (
      <div className={Style.toggler}>
         {
            darkMode ?
               <span onClick={handleClick} aria-label="Full Moon" role="img">🌕</span>
               :
               <span onClick={handleClick} aria-label="New Moon" role="img">🌑</span>
         }
      </div>
   );
}
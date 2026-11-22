import React from 'react';
import Style from "./Terminal.module.scss";
import classNames from "classnames";
import {Circle} from "../icons/Icons";

function Terminal(props) {
   const {text} = props;

   return (
      <section className={classNames(Style.terminal, Style.shadowed)}>
         <div className={Style.titleBar}>
            <Circle className={classNames(Style.dot, Style.red)}/>
            <Circle className={classNames(Style.dot, Style.amber)}/>
            <Circle className={classNames(Style.dot, Style.green)}/>
         </div>
         <div className={Style.body}>
            {text}
         </div>
      </section>
   );
}

export default Terminal;
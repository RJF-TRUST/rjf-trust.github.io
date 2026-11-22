import React from 'react';
import Style from "./Home.module.scss";

function EmojiBullet(props) {
    const {emoji, text} = props;

    return (
        <li className={Style.bullet} style={{cursor: 'default'}}>
            <span aria-label="cheese" role="img" className={Style.emoji}>{emoji}</span> {text}
        </li>
    );
}

export default EmojiBullet;
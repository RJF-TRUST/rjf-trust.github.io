import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {info} from "../../info/Info";


export default function About({innerRef}) {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about{firstName} </p>
            <p><span style={{color: info.baseColor}}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio[0]}
            </p>
            {info.bio.slice(1).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{color: info.baseColor}}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            {info.skills.map(({category, items}) => (
                <div key={category} className={Style.skillGroup}>
                    <p className={Style.category} style={{color: info.baseColor}}>{category}/</p>
                    <ul className={Style.skills}>
                        {items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                </div>
            ))}
        </>;
    }

    function miscText() {
        return (
            <>
                <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                    hobbies/interests</p>
                <p><span style={{color: info.baseColor}}>hobbies/interests <span
                    className={Style.green}>(main)</span> $</span> ls</p>
                <ul>
                    {info.hobbies.map((hobby, index) => (
                        <li key={index}><span className={Style.hobbyEmoji}>{hobby.emoji}</span>{hobby.label}</li>
                    ))}
                </ul>
            </>
        );
    }

    return (
        <div ref={innerRef} id={'about'} className={Style.page}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </div>
    );
}
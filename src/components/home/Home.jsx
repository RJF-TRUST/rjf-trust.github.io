import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {info} from "../../info/Info";

export default function Home({innerRef}) {

   return (
      <main ref={innerRef} id={'home'} className={Style.home}>
         <img
            className={classNames(Style.avatar, Style.shadowed)}
            alt={'image of developer'}
            style={{background: info.gradient}}
            src={me}/>
         <div>
            <h1>Hi, I'm <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{info.firstName}</span><span className={Style.hand}>🤚</span>
            </h1>
            <h2>I'm {info.position}.</h2>
            <ul className={Style.bio}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text}/>
               ))}
            </ul>
            <div className={Style.socials}>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </div>
         </div>
      </main>
   );
}
import React from 'react';
import {Email as EmailIcon, LinkedIn as LinkedInIcon, WorkspacePremium as WorkspacePremiumIcon} from '../icons/Icons';
import Terminal from '../about/Terminal';
import Style from './Contact.module.scss';
import {info} from '../../info/Info';

// Credly has no dedicated icon, so it uses the badge icon.
const icons = {
    linkedin: LinkedInIcon,
    credly: WorkspacePremiumIcon,
    email: EmailIcon,
};

// Allow a line break after each "/" so long addresses wrap at path segments on
// narrow screens instead of mid-word. <wbr> adds no characters to the text.
function breakAfterSlashes(text) {
    return text.split('/').flatMap((part, index, parts) =>
        index < parts.length - 1 ? [part, '/', <wbr key={index}/>] : [part]);
}

function ContactLink({id, label, text, link}) {
    const Icon = icons[id];
    const isExternal = !link.startsWith('mailto:');
    const externalProps = isExternal
        ? {target: '_blank', rel: 'noopener noreferrer', 'aria-label': `${label}: ${text} (opens in a new tab)`}
        : {'aria-label': `${label}: ${text}`};

    return (
        <li>
            <a href={link} className={Style.link} {...externalProps}>
                {Icon && <Icon className={Style.icon}/>}
                <span className={Style.value}>{breakAfterSlashes(text)}</span>
            </a>
        </li>
    );
}

export default function Contact({innerRef}) {
    const prompt = `${info.firstName}${info.lastName}`.toLowerCase();

    const text = <>
        <p><span style={{color: info.baseColor}}>{prompt} $</span> cat contact</p>
        <p><span style={{color: info.baseColor}}>contact <span className={Style.green}>(main)</span> $</span> {info.contact.intro}</p>
        <ul className={Style.links}>
            {info.contact.links.map((contact) => <ContactLink key={contact.id} {...contact}/>)}
        </ul>
    </>;

    return (
        <div ref={innerRef} id={'contact'} className={Style.page}>
            <Terminal text={text}/>
        </div>
    );
}

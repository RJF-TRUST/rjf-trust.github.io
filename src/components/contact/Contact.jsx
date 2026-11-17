import React from 'react';
import {Box} from '@mui/material';
import {Email as EmailIcon, LinkedIn as LinkedInIcon, WorkspacePremium as WorkspacePremiumIcon} from '@mui/icons-material';
import Terminal from '../about/Terminal';
import Style from './Contact.module.scss';
import {info} from '../../info/Info';

// Credly has no dedicated icon, so it uses the badge icon.
const icons = {
    linkedin: LinkedInIcon,
    credly: WorkspacePremiumIcon,
    email: EmailIcon,
};

function ContactLink({id, label, text, link}) {
    const Icon = icons[id];
    const isExternal = !link.startsWith('mailto:');
    const externalProps = isExternal
        ? {target: '_blank', rel: 'noopener noreferrer', 'aria-label': `${label}: ${text} (opens in a new tab)`}
        : {'aria-label': `${label}: ${text}`};

    return (
        <li>
            <a href={link} className={Style.link} {...externalProps}>
                {Icon && <Icon className={Style.icon} fontSize={'inherit'} aria-hidden={'true'}/>}
                <span className={Style.value}>{text}</span>
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
        <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'contact'}>
            <Terminal text={text}/>
        </Box>
    );
}

import React from 'react';

function SocialIcon(props) {
    const {link, icon: Icon, label} = props;
    return (
        <a target="_blank" aria-label={label}
           rel="noopener noreferrer" href={link}>
            <Icon/>
        </a>
    );
}

export default SocialIcon;
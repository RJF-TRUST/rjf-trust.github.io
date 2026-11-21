import React from 'react';
import {Box} from "@mui/material";

function EmojiBullet(props) {
    const {emoji, text} = props;

    return (
        <Box
            component={'li'}
            style={{cursor: 'default'}}
            sx={{
                fontSize: '1rem',
                lineHeight: 1.5
            }}>
            <Box
                component={'span'}
                aria-label="cheese"
                role="img"
                sx={{
                    mr: {xs: '0.5rem', md: '1rem'},
                    fontSize: '1.5rem'
                }}>{emoji}</Box> {text}
        </Box>
    );
}

export default EmojiBullet;
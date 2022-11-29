import React, { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import TopicIcon from '@mui/icons-material/Topic';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PopupMenuTraining from '../popup-menu-training/popup-menu-training.component';
import { useRouter } from 'next/router';

import Link from 'next/link';

export default function BottomNav() {
    const [value, setValue] = useState(0);
    const [popupMenu, showPopupMenu] = useState(false);
    const links = ['/', '/training', '/blog', '/contact'];
    const router = useRouter();

    return (
        <Box
            sx={{
                width: '100%',
                position: 'fixed',
                bottom: 0,
                backgroundColor: '#ffffff',
                zIndex: 9999,
                '@media screen and (min-width: 769px)': {
                    display: 'none',
                },
            }}
        >
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={() => router.push(links[0])} />
                <BottomNavigationAction
                    label="Services"
                    icon={<PeopleIcon />}
                    onClick={() => showPopupMenu(!popupMenu)}
                    onMouseLeave={() => showPopupMenu(false)}
                />
                <PopupMenuTraining isVisible={popupMenu} />
                <BottomNavigationAction label="Blog" icon={<TopicIcon />} onClick={() => router.push(links[2])} />
                <BottomNavigationAction
                    label="Contact"
                    icon={<ContactPageIcon />}
                    onClick={() => router.push(links[3])}
                />
            </BottomNavigation>
        </Box>
    );
}

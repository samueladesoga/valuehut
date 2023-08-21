import React from 'react';
import itemStyles from './popup-menu-item.module.scss';
import Link from 'next/link';

interface PopupMenuItemTypes {
    label: string,
    href: string,
    children?: any
}

const PopupMenuItem: React.FC<PopupMenuItemTypes> = ({ label, href }) => {
    return (
        <Link className={`${itemStyles.popupMenuItem} link link-reverse`} href={ href }>
            { label }
        </Link>
    )
}

export default PopupMenuItem;
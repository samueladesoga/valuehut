import React, { useState } from 'react';
import PopupMenuTraining from '../popup-menu-training/popup-menu-training.component';
import Link from 'next/link';
import navbarStyles from './navbar-container.module.scss';

const NavbarContainer: React.FC = () => {
    const [ popupMenu, showPopupMenu ] = useState(false);
    return (
        <nav className={`${navbarStyles.navbarContainer}`}>
            <Link className={`link link-reverse ${navbarStyles.navbar__link} ${navbarStyles.navbar__homeLink}`} href='/'>Home</Link>
            <span onMouseOver={()=>showPopupMenu(true)} onMouseLeave={()=>showPopupMenu(false)} onClick={()=>showPopupMenu(!popupMenu)} className={`link link-reverse ${navbarStyles.navbar__link} ${navbarStyles.navbar__whatWeDo}`}>
                <span className={`${navbarStyles.navbar__whatWeDo}`}>Services</span>
                <PopupMenuTraining classname={`${navbarStyles.popupMenuOpen}`} isVisible={popupMenu} />
            </span>
            <Link className={`link link-reverse ${navbarStyles.navbar__link}`} href='/blog'>Blog</Link>
            <Link className={`link link-reverse ${navbarStyles.navbar__link}`} href='/about'>About Us</Link>
            <Link className={`link link-reverse ${navbarStyles.navbar__link}`} href='/contact'>Contact Us</Link>
        </nav>
    )
}

export default NavbarContainer;
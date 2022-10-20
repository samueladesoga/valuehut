import React, { useState } from 'react';
import PopupMenuTraining from '../popup-menu-training/popup-menu-training.component';
import Link from 'next/link';
import navbarStyles from './navbar-container.module.scss';

const NavbarContainer: React.FC = () => {
    const [ popupMenu, showPopupMenu ] = useState(false);
    return (
        <nav className={`${navbarStyles.navbarContainer}`}>
            <Link href='/'><a className={`link link-reverse ${navbarStyles.navbar__link} ${navbarStyles.navbar__homeLink}`}>Home</a></Link>
            <span onMouseOver={()=>showPopupMenu(true)} onMouseLeave={()=>showPopupMenu(false)} onClick={()=>showPopupMenu(!popupMenu)} className={`link link-reverse ${navbarStyles.navbar__link} ${navbarStyles.navbar__whatWeDo}`}>
                <span className={`${navbarStyles.navbar__whatWeDo}`}>Services</span>
                <PopupMenuTraining classname={`${navbarStyles.popupMenuOpen}`} isVisible={popupMenu} />
            </span>
            <Link href='/blog'><a className={`link link-reverse ${navbarStyles.navbar__link}`}>Blog</a></Link>
            <Link href='/about'><a className={`link link-reverse ${navbarStyles.navbar__link}`}>About Us</a></Link>
            <Link href='/contact'><a className={`link link-reverse ${navbarStyles.navbar__link}`}>Contact Us</a></Link>
        </nav>
    )
}

export default NavbarContainer;
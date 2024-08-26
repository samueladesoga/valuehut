import React, { useState, useEffect } from 'react';
import headerStyles from './header.module.scss';

import LogoContainer from '../logo-container/logo-container.component';
import NavbarContainer from '../navbar-container/navbar-container.component';
import CartButtonContainer from '../cart-button-container/cart-button-container.component';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        window.onscroll = () => {
            if(document.documentElement.scrollTop > 80) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        };
    }, [])
    const styles = scrolled ? 
                    {
                        height: 80,
                        transition: "all 0.25s"
                    } : 
                    {
                        transition: "all 0.25s"
                    }
    return (
        <header className={`${headerStyles.header}`} style={styles}>
            <div className={`${headerStyles.headerContainer}`} id="start">
                <LogoContainer imageURL='/logo/vh-logo.png' />
                <NavbarContainer />
                <CartButtonContainer />
            </div>
        </header>
    )
}

export default Header;
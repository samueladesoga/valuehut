import React from 'react';
import { ContactDataTypes } from '../../data/content';
import footerStyles from './footer.module.scss';
import LogoContainer from '../logo-container/logo-container.component';
import { content } from '../../data/content';

interface FooterTypes {
    howto?: string;
    offices: ContactDataTypes[];
}

function Footer({ howto, offices }: FooterTypes) {
    return (
        <footer className={`${footerStyles.footer}`}>
            <div className={`${footerStyles.footerContainer}`}>
                <>
                    <LogoContainer imageURL="/logo/logo-primary-bg-black.png" />
                    <LogoContainer imageURL="/logo/ptn.png" />
                    <h3>Contact Us Now:</h3>
                    {offices.map(({ region, email, address, phone }, i) => (
                        <div className={`${footerStyles.footer__contactData}`} key={`office-${i}`}>
                            <p className="details-responsive">
                                <u>{region} office:</u>
                            </p>
                            <p className="details-responsive">
                                Email:{' '}
                                <a className="link footer__link" href={`mailto:${email}`}>
                                    {email}
                                </a>
                            </p>
                            <p className="details-responsive">
                                Call:{' '}
                                <a className="link footer__link" href={`tel:${phone}`}>
                                    {phone}
                                </a>
                            </p>
                        </div>
                    ))}
                </>
            </div>
        </footer>
    );
}

export default Footer;

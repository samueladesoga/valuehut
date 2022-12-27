import React, { SyntheticEvent, useRef } from 'react';
import contactPageStyles from './contact-page.module.scss';
import ContactData from '../../components/contact-data/contact-data.component';
import { ContactDataTypes } from '../../data/content';
import { SpinnerContainer, SpinnerMiniOverlay } from '../../components/spinner/spinner.styles';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

export interface ContactProps {
    howto: string;
    offices: ContactDataTypes[];
}

const Spinner = () => (
    <SpinnerMiniOverlay>
        <SpinnerContainer />
    </SpinnerMiniOverlay>
);

const ContactPage: React.FC<ContactProps> = ({ howto, offices }) => {
    const form = useRef<HTMLFormElement>(null);

    const handleSendEmail = (e: SyntheticEvent) => {
        e.preventDefault();
        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
                form.current as HTMLFormElement,
                process.env.NEXT_PUBLIC_EMAIL_USER_ID as string,
            )
            .then((result: EmailJSResponseStatus) => {
                alert('Email has been sent, thank you!');
                form.current?.reset();
            })
            .catch((rejected: any) => alert('An error has occurred, please try again!'));
    };
    return (
        <div className={`page ${contactPageStyles.contactPage}`}>
            <div className={`${contactPageStyles.howToContact}`}>
                <div className={contactPageStyles.howToContactUs}>
                    <h1>How to contact us</h1>
                    <p>{howto}</p>
                </div>

                <div className={contactPageStyles.formContainer}>
                    <h2>Send us an Email :</h2>
                    <form ref={form} onSubmit={handleSendEmail}>
                        <div className="input">
                            <label htmlFor="form_email" className="text-lg">
                                Email
                            </label>
                            <input type="email" placeholder="Type your email..." name="form_email" />
                        </div>
                        <div className="input">
                            <label htmlFor="from_name" className="text-lg">
                                Name
                            </label>
                            <input type="text" placeholder="Type your name..." name="from_name" />
                        </div>
                        <div className="input">
                            <label htmlFor="form_subject" className="text-lg">
                                Subject
                            </label>
                            <input type="text" placeholder="Type a subject..." name="form_subject" />
                        </div>
                        <div className="mb-4">
                            <label className="text-lg" htmlFor="message">
                                Message
                            </label>
                            <textarea placeholder="Type a message..." rows={5} name="message" />
                        </div>
                        <div>
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={`${contactPageStyles.contactDataBlock}`}>
                {!offices.length ? (
                    <Spinner />
                ) : (
                    offices.map(({ region, address, email, phone }) => (
                        <ContactData region={region} email={email} phone={phone} address={address} key={address} />
                    ))
                )}
            </div>
        </div>
    );
};

export default ContactPage;

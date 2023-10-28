import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { content, ContactDataTypes } from '../data/content';
import ContactPage, { ContactProps } from '../pages-components/contact-page/contact-page.component';

export function getStaticProps() {
    const { howto } = content.pages.contact;
    return {
        props: {
            howto,
        },
    };
}

const Contact: NextPage<ContactProps> = ({ howto }) => {
    const [offices, setOffices] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/offices');
            const data = await response.json();
            setOffices(data.offices);
        };
        fetchData();
    }, []);
    return (
        <>
            <Head>
                <title>Coaching Agile Organisation and Teams; Improving Effectiveness and Efficiency | Valuehut</title>
                <meta
                    name="description"
                    content="Improve your organisation's agile capabilities with ValueHut; our services include Coaching, Consultancy and Training. Contact us today for a no-obligation consultation. Visit Now!"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ContactPage howto={howto} offices={offices} />
        </>
    );
};

export default Contact;

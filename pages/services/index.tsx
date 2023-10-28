import type { NextPage } from 'next';
import Head from 'next/head';
import WhatWeDoPage from '../../pages-components/what-we-do-page/what-we-do-page.component';
import { content } from '../../data/content';

export function getStaticProps() {
    const introduction = content.pages.whatWeDo.introduction;
    return {
        props: {
            introduction,
        },
    };
}

const Services: NextPage = ({ introduction }: any) => {
    return (
        <>
            <Head>
                <title>
                    Agile Coaching, Training and Consultancy Service | Valuehut
                </title>
                <meta
                    name="description"
                    content="Transforming your organisation, the leading agile coaching, training, and consultancy service offered by Valuehut. Drive innovation by improving effectivesness and efficiency."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <WhatWeDoPage introduction={introduction} />
        </>
    );
};

export default Services;

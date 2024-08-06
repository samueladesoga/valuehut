import type { NextPage } from 'next';
import Head from 'next/head';
import AboutPage, { AboutPageProps } from '../pages-components/about-page/about-page.component';
import aboutPageProps from '../lib/about.data';

export function getStaticProps() {
    const aboutProps: AboutPageProps = aboutPageProps();
    return {
        props: {
            aboutProps,
        },
    };
}

const About: NextPage = ({ aboutProps }: any) => {
    return (
        <>
            <Head>
                <title>About ValueHut Consulting</title>
                <meta name="description" content="Valuehut.co" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AboutPage {...aboutProps} />
        </>
    );
};

export default About;

import type { NextPage } from 'next'
import Head from 'next/head'
import Homepage from '../pages-components/homepage/homepage.component'
import homepageProps from '../lib/homepage.data'
import { HomepageTypes } from '../data/content';

export function getStaticProps() {
    const homeProps = homepageProps();
    return {
        props: { 
            homeProps
        }
    }
}

interface HomeTypes {
    homeProps: HomepageTypes
}

const Home: NextPage<HomeTypes> = ({ homeProps }) => {
    return (
        <>
            <Head>
                <title>Valuehut Limited - Offices in London, UK and Lagos, Nigeria.</title>
                <meta name="description" content="ValueHut is an agile coaching and training consultancy that is helping Organisations to rethink their ways of working in other to help these organisations deliver most value to their customers." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Homepage {...homeProps} />
        </>
    )
}

export default Home

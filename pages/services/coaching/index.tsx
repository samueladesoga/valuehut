import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { content } from '../../../data/content';
import { coaching } from '../../../data/coaching';
import ConsultingPage from '../../../pages-components/trainings-page/consulting-page';

export function getStaticProps() {
    const introdution = content.pages.whatWeDo.introdution;
    return {
        props: { 
            introdution
        }
    }
}

const Coaching: NextPage = ({ introdution }: any) => {
    const [coaching, setCoaching] = useState({
        title: " ",
        imageURL: " ",
        articles: [{
            content: " ",
        }]
    });
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/coaching");
            const data = await response.json();
            setCoaching(data.coaching)
            setLoading(false)
        };
        setLoading(true)
        fetchData();
    }, [])
    return (
        <>
            <Head>
                <title>ValueHut Limited - Agile Coaching</title>
                <meta name="description" content="ValueHut's Agile Coaching service supports your organisation on the journey to being agile. Our coaches are your mirror and keep the blindsides in check. Our coaches have experience of working using multiple Agile frameworks and practices." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ConsultingPage url={"coaching"} consulting={coaching} introdution={content.pages.whatWeDo.introdution} />
        </>
    )
}

export default Coaching

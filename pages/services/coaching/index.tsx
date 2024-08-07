import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { content } from '../../../data/content';
import { coaching } from '../../../data/coaching';
import ConsultingPage from '../../../pages-components/trainings-page/consulting-page';

export function getStaticProps() {
    const introduction = content.pages.whatWeDo.introduction;
    return {
        props: { 
            introduction
        }
    }
}

const Coaching: NextPage = ({ introduction }: any) => {
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
                <title>Enterprise Agility Coaching and Consulting | ValueHut Consulting</title>
                <meta name="description" content="Transform your organisation with ValueHut Consulting. Our Agile Coaching and Consulting Service by ValueHut Consulting, improving teams effectiveness and efficiency. For more details, our services contact us today!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ConsultingPage url={"coaching"} consulting={coaching} introduction={content.pages.whatWeDo.introduction} />
        </>
    )
}

export default Coaching

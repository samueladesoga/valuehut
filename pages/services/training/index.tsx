import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { content } from '../../../data/content';
import { training } from '../../../data/training';
import Spinner from '../../../components/spinner/spinner.component';
import TrainingsPage from '../../../pages-components/trainings-page/trainings-page.component';

export function getStaticProps() {
    const introdution = content.pages.whatWeDo.introdution;
    return {
        props: { 
            introdution
        }
    }
}

const Trainings: NextPage = ({ introdution }: any) => {
    const [trainings, setTrainings] = useState(training.training);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/trainings");
            const data = await response.json();
            setTrainings(data.trainings)
            setLoading(false)
        };
        setLoading(true)
        fetchData();
    }, [])
    return (
        <>
            <Head>
                <title>Professional Scrum and Agile Training Services | ValueHut</title>
                <meta name="description" content="Professional Scrum and Agile Training offered by ValueHut Limited. Gain valuable insights and practical knowledge to develop your organisational agile capabilities. Contact us today!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TrainingsPage url={"training"} trainings={trainings} introdution={content.pages.whatWeDo.introdution} />
        </>
    )
}

export default Trainings

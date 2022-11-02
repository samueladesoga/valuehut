import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { content } from '../../../data/content';
import Spinner from '../../../components/spinner/spinner.component';
import TrainingsPage from '../../../pages-components/trainings-page/trainings-page.component';
import { getAllTrainingsIds } from '../../../lib/training.data';
import Training from '../../../pages-components/training/training.component';
import TrustBox from '../../../components/trustbox/trustbox.component';

import { training, TrainingTypes } from '../../../data/training';

export function getStaticProps({ params }: any) {
    const trainings = training.training.filter(tr => {
        return tr.title.toLowerCase().split(" ").join("-") === params.id
    })
    return {
        props: { 
            training: trainings[0]
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllTrainingsIds();
    return {
      paths,
      fallback: false,
    };
  }

interface TPTypes {
    training: TrainingTypes
}

const TrainingPage: NextPage<TPTypes> = ({ training }) => {
    const [loading, setLoading] = useState(false);
    const [streams, setStreams] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/training?id=${training.title.toLowerCase().split(" ").join("-")}`);
            const data = await response.json();
            setStreams(data.streams);
            setLoading(false)
        };
        setLoading(true)
        fetchData();
    }, [])
    return (
        <>
            <Head>
                <title>{`${training.title} - Valuehut`}</title>
                <meta name="description" content="ValueHut Training offerings can be booked on this page or contact us for private trainings for your organisation especially in Lagos, Accra and Nairobi." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {
                loading ? 
                <Spinner /> : 
                <Training training={training} streams={streams} />
                <TrustBox />
            }
        </>
    )
}

export default TrainingPage

import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { content } from '../../../data/content';
import ConsultingPage from '../../../pages-components/trainings-page/consulting-page';
import Spinner from '../../../components/spinner/spinner.component';

export function getStaticProps() {
    const introduction = content.pages.whatWeDo.introduction;
    return {
        props: {
            introduction,
        },
    };
}

const Consulting: NextPage = ({ introduction }: any) => {
    const [consulting, setConsulting] = useState({
        title: ' ',
        imageURL: ' ',
        articles: [
            {
                content: ' ',
            },
        ],
    });
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/consulting');
            const data = await response.json();
            setConsulting(data.consulting);
            setLoading(false);
        };
        setLoading(true);
        fetchData();
    }, []);
    return (
        <>
            <Head>
                <title>Agile Consultancy Services | ValueHut Consulting</title>
                <meta
                    name="description"
                    content="Our agile consultancy services include Team Augumentation, Product Backlog Management services, Product Inception and Discovery Services, Test Automation and Continous Delivery Capabilities. Try ValueHut Consulting today!"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {loading ? (
                <Spinner />
            ) : (
                <ConsultingPage
                    url={'consulting'}
                    consulting={consulting}
                    introduction={content.pages.whatWeDo.introduction}
                />
            )}
        </>
    );
};

export default Consulting;

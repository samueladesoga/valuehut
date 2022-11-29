import React, { lazy, Suspense } from 'react';
import trainingsStyles from './trainings-page.module.scss';
import Link from 'next/link';
import MainArticle from '../../components/main-article/main-article.component';
import Spinner from '../../components/spinner/spinner.component';

import { TrainingTypes } from '../../data/training';
import { consulting, ConsultingTypes, ConsultingArticleTypes } from '../../data/consulting';
import { content, IntrodutionTypes } from '../../data/content';
import ServiceArticle from '../../components/service-article/service-article.component';

interface ConsultingPageTypes {
    url: string;
    consulting: ConsultingTypes;
    introdution: any;
    children?: any;
}

const ConsultingPage: React.FC<ConsultingPageTypes> = ({ url, consulting, introdution }) => {
    const introdutionArticle = introdution.filter((item: any) => item.header.toLowerCase() === url)[0];
    return (
        <div className={`${trainingsStyles.trainingsPage}`}>
            <MainArticle {...introdutionArticle} />
            <Suspense fallback={<Spinner />}>
                {consulting.articles.map((consult: ConsultingArticleTypes, i: number) => {
                    return (
                        <MainArticle
                            imageURL={consult.imageURL}
                            header={consult.title ? consult.title : ''}
                            description={consult.content}
                            key={`consult-${consult.title}`}
                        />
                    );
                })}
            </Suspense>
            <ServiceArticle title="For more details:" content="">
                <Link href="/contact">
                    <a className="button button-primary button-primary-large">Contact us</a>
                </Link>
            </ServiceArticle>
        </div>
    );
};

export default ConsultingPage;

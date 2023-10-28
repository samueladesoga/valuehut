import React, { lazy, Suspense } from 'react';
import trainingsStyles from './trainings-page.module.scss';
import Link from 'next/link';
import MainArticle from '../../components/main-article/main-article.component';
import Spinner from '../../components/spinner/spinner.component';

import { TrainingTypes } from '../../data/training';
import { consulting, ConsultingTypes, ConsultingArticleTypes } from '../../data/consulting';
import { content, introductionTypes } from '../../data/content';
import ServiceArticle from '../../components/service-article/service-article.component';

interface ConsultingPageTypes {
    url: string;
    consulting: ConsultingTypes;
    introduction: any;
    children?: any;
}

const ConsultingPage: React.FC<ConsultingPageTypes> = ({ url, consulting, introduction }) => {
    const introductionArticle = introduction.filter((item: any) => item.header.toLowerCase() === url)[0];
    return (
        <div className={`${trainingsStyles.trainingsPage}`}>
            <MainArticle {...introductionArticle} isHeader />
            <Suspense fallback={<Spinner />}>
                {consulting.articles.map((consult: ConsultingArticleTypes, i: number) => {
                    return (
                        <MainArticle
                            imageURL={consult.imageURL}
                            header={consult.title ? consult.title : ''}
                            description={consult.content}
                            descriptionList={consult.contentList}
                            key={`consult-${consult.title}`}
                            link={consult.link}
                        />
                    );
                })}
            </Suspense>
            <ServiceArticle title="For more details:" content="">
                <Link href="/contact" className="button button-primary button-primary-large">
                    Contact us
                </Link>
            </ServiceArticle>
        </div>
    );
};

export default ConsultingPage;

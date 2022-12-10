import React, { lazy, Suspense } from 'react';
import trainingsStyles from './trainings-page.module.scss';

import MainArticle from '../../components/main-article/main-article.component';
import Spinner from '../../components/spinner/spinner.component';

import { TrainingTypes } from '../../data/training';
import { IntrodutionTypes } from '../../data/content';
import TrustBox from '../../components/trustbox/trustbox.component';

interface TrainingsPageTypes {
    url: string;
    trainings: TrainingTypes[];
    introdution: any;
    children?: any;
}

const TrainingsPage: React.FC<TrainingsPageTypes> = ({ url, trainings, introdution }) => {
    const introdutionArticle = introdution.filter((item: any) => item.header.toLowerCase() === 'training')[0];
    return (
        <div className={`${trainingsStyles.trainingsPage}`}>
            <MainArticle {...introdutionArticle} />
            <Suspense fallback={<Spinner />}>
                {trainings.map((training: TrainingTypes, i: number) => {
                    return (
                        <MainArticle
                            imageURL={training.imageURL}
                            header={training.title}
                            description={training.description}
                            streams={training.streams}
                            isTraining={training.isTraining}
                            logo={training.logo}
                            key={`training-${training.title}`}
                        />
                    );
                })}
            </Suspense>
            <TrustBox />
        </div>
    );
};

export default TrainingsPage;

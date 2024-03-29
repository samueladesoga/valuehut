import React, { lazy, Suspense } from 'react';
import trainingsStyles from './trainings-page.module.scss';

import MainArticle from '../../components/main-article/main-article.component';
import Spinner from '../../components/spinner/spinner.component';

import { TrainingTypes } from '../../data/training';
import { introductionTypes } from '../../data/content';
import TrustBox from '../../components/trustbox/trustbox.component';

interface TrainingsPageTypes {
    url: string;
    trainings: TrainingTypes[];
    introduction: any;
    children?: any;
}

const TrainingsPage: React.FC<TrainingsPageTypes> = ({ url, trainings, introduction }) => {
    const introductionArticle = introduction.filter((item: any) => item.header.toLowerCase() === 'training')[0];
    return (
        <div className={`${trainingsStyles.trainingsPage}`}>
            <MainArticle {...introductionArticle} isHeader />
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
            <section style={{ padding: '10px', width: '100%', maxWidth: '100%', marginTop: '20px' }}>
                <h2>What our clients say</h2>
                <TrustBox />
            </section>
        </div>
    );
};

export default TrainingsPage;

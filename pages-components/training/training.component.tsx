import React from 'react';
import trainingStyles from './training.module.scss';
import { TrainingTypes, StreamTypes } from '../../data/training';
import TrainingArticle from '../../components/training-article/training-article.component';
import Link from 'next/link';

import DatesTable from '../../components/dates-table/dates-table.component';
import TrainingBanner from '../../components/training-banner/training-banner.component';

interface TrainingComponentTypes {
    training: TrainingTypes;
    streams: StreamTypes[];
    children?: any;
}

const Training: React.FC<TrainingComponentTypes> = ({ training, streams }) => {
    const { title, description, articles, imageURL, logo } = { ...training };
    return (
        <div className={`page ${trainingStyles.trainingPage}`}>
            <TrainingBanner title={title} logo={`/training/${logo}`} imageURL={`${imageURL}`} />
            <div className={`${trainingStyles.trainingPage__placeholder}`}></div>
            {description && <TrainingArticle title="About this Course" content={description} />}
            <div id="book-now" className={`${trainingStyles.bookNow}`}>
                {streams && <DatesTable streams={streams} training={training} />}
            </div>
            {articles &&
                articles.map((article, i) => (
                    <TrainingArticle key={`${article.content[0]}${i}${article.content[0]}`} {...article} />
                ))}
        </div>
    );
};

export default Training;

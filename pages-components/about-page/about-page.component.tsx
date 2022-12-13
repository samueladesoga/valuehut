import React from 'react';
import aboutPageStyles from './about-page.module.scss';
import { TrainerTypes, PreviousClientsTypes, ArticleTypes } from '../../data/content';

import Employee from '../../components/employee/employee.component';
import MainArticle from '../../components/main-article/main-article.component';
import PreviousClients from '../../components/previous-clients/previous-clients.component';
import { textAlign } from '@mui/system';

export interface AboutPageProps {
    trainers: TrainerTypes[];
    headerArticle: ArticleTypes;
    previousClients: PreviousClientsTypes[];
}

const AboutPage: React.FC<AboutPageProps> = ({ trainers, headerArticle, previousClients }) => {
    // const trainers = useAppSelector((state) => (state.content.pages.about.trainers));
    // const { headerArticle } = useAppSelector((state) => (state.content.pages.home));
    const articleTextAlign = {
        textAlign: 'left',
    };
    return (
        <div className={`page ${aboutPageStyles.aboutPage}`}>
            <div className={`${aboutPageStyles.WhatWeDo__title}`}>
                <h1>About us</h1>
            </div>
            <MainArticle
                imageURL={'images/' + headerArticle.imageURL}
                header={headerArticle.header}
                description={headerArticle.description}
                style={articleTextAlign}
                slug={undefined}
            />

            <h1 className={`${aboutPageStyles.aboutPage__trainersHeader}`}>Our People</h1>
            {trainers.map((trainer: TrainerTypes) => (
                <Employee {...trainer} key={trainer.name} />
            ))}

            <PreviousClients previousClients={previousClients} />
        </div>
    );
};

export default AboutPage;

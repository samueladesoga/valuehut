import React from 'react';
import  aboutPageStyles from './about-page.module.scss';
import { TrainerTypes, PreviousClientsTypes, ArticleTypes } from '../../data/content';

import Employee from '../../components/employee/employee.component';
import MainArticle from '../../components/main-article/main-article.component';
import PreviousClients from '../../components/previous-clients/previous-clients.component';

export interface AboutPageProps {
    trainers: TrainerTypes[], 
    headerArticle: ArticleTypes, 
    previousClients: PreviousClientsTypes[]
}

const AboutPage:React.FC<AboutPageProps> = ({ trainers, headerArticle, previousClients }) => {
    // const trainers = useAppSelector((state) => (state.content.pages.about.trainers));
    // const { headerArticle } = useAppSelector((state) => (state.content.pages.home));
    return (
        <div className={`page ${aboutPageStyles.aboutPage}`}>
            <MainArticle 
                { ...headerArticle }
            />

            <h1 className={`${aboutPageStyles.aboutPage__trainersHeader}`}>Our People</h1>
            { trainers.map((trainer: TrainerTypes) => <Employee {...trainer} key={trainer.name} />) }

            <PreviousClients previousClients={previousClients} />
        </div>
    )
}

export default AboutPage;
import { url } from 'inspector';
import React from 'react';
import serviceBoxStyles from './service-box.module.scss';
import { TrainingTypes } from '../../data/training';
import Link from 'next/link';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ServiceBoxTypes {
    header: string;
    description: string;
    url: string;
    imageURL: string;
    children?: any;
}

const ServiceBox: React.FC<ServiceBoxTypes> = ({ header, description, imageURL, url }) => {
    return (
        <div className={serviceBoxStyles.container}>
            <Link className={`link ${serviceBoxStyles.serviceBox}`} href={url}>
                <div
                    className={`${serviceBoxStyles.serviceBox__content}`}
                    style={{ backgroundImage: `url(${imageURL})` }}
                >
                    <h1 className={`${serviceBoxStyles.serviceBox__header}`}>{header}</h1>
                </div>
            </Link>
            <div className={serviceBoxStyles.informativeText} dangerouslySetInnerHTML={{ __html: description }} />
            <Link className={`link ${serviceBoxStyles.readMore}`} href={url}>
                Read More {'>'}
            </Link>
        </div>
    );
};

export default ServiceBox;

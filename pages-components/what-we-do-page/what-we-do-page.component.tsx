import React, { useState, useEffect } from 'react';
import wwdStyles from './what-we-do-page.module.scss';
import Link from 'next/link';
import MainArticle from '../../components/main-article/main-article.component';

import { WhatWeDoTypes, introductionTypes } from '../../data/content';

// interface WhatWeDoTypes {
//     children?: any
// }

const WhatWeDoPage: React.FC<WhatWeDoTypes> = ({ introduction }) => {
    return (
        <div className={`${wwdStyles.servicesPage}`}>
            <div className={`${wwdStyles.whatWeDoPage}`}>
                <div className={`${wwdStyles.WhatWeDo__title}`}>
                    <h1>Our Services</h1>
                </div>
                <div className={`${wwdStyles.whatWeDoPage__content}`}>
                    {introduction.map((s) => (
                        <MainArticle imageURL={s.imageURL} header={s.header} description={s.description}>
                            <Link className="button button-secondary button-secondary-default" 
                                 style={{ marginBottom: 30 }}
                                 href={`services/${s.header.toLowerCase()}`}> 
                                 Read More
                            </Link>
                        </MainArticle>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhatWeDoPage;

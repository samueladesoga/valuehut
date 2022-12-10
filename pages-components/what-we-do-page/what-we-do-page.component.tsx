import React, { useState, useEffect } from 'react';
import wwdStyles from './what-we-do-page.module.scss';
import Link from 'next/link';
import MainArticle from '../../components/main-article/main-article.component';

import { WhatWeDoTypes, IntrodutionTypes } from '../../data/content';

// interface WhatWeDoTypes {
//     children?: any
// }

const WhatWeDoPage: React.FC<WhatWeDoTypes> = ({ introdution }) => {
    return (
        <div className={`${wwdStyles.servicesPage}`}>
            <div className={`${wwdStyles.whatWeDoPage}`}>
                <div className={`${wwdStyles.whatWeDoPage__content}`}>
                    {introdution.map((s) => (
                        <MainArticle imageURL={s.imageURL} header={s.header} description={s.description}>
                            <Link href={`services/${s.header.toLowerCase()}`}>
                                <a
                                    className="button button-secondary button-secondary-default"
                                    style={{ marginBottom: 30 }}
                                >
                                    Read More
                                </a>
                            </Link>
                        </MainArticle>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhatWeDoPage;

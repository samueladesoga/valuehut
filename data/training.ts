// Here you can add the new training.
// Use Interface below as a template to add right fields
// when you will create a new training

// Important!
// Each word of title should be in Capitalize Case

// Start and End Dates should be JSON objects!
// (See how it looks now)

import { primaryMarket, tertiaryMarket } from './countries';

export interface PriceTypes {
    region: string;
    regionDescription: string | string[];
    amount: number;
    currency?: CurrencyTypes;
}

export interface CurrencyTypes {
    name: string;
    symbol?: string;
    locale?: string;
    template?: string;
}

export interface StreamTypes {
    startDate: any;
    endDate: any;
    time: string;
    price: PriceTypes[];
    filled: boolean;
}

export interface TrainingArticleTypes {
    title?: string;
    content: string;
    contentList?: string[];
    imageURL?: string;
    textAlign?: string;
    imagePosition?: string;
}

export interface TrainingTypes {
    id: number;
    title: string;
    acronym?: string;
    description?: string;
    logo?: any;
    iconBorder?: string;
    imageURL: string;
    articles?: TrainingArticleTypes[];
    streams?: StreamTypes[];
    isTraining?: boolean;
}

interface TrainingObject {
    training: TrainingTypes[];
}

export const training: TrainingObject = {
    training: [
        {
            id: 1,
            title: 'Professional Scrum Master',
            acronym: 'PSM',
            description: `Professional Scrum Master (PSM) is an interactive, activity-based course 
            where students gain a thorough understanding of Professional Scrum and the role of the 
            Scrum Master. Students develop a deep understanding of the underlying principles of Scrum 
            and the Agile mindset while learning the practices applied by successful Scrum Teams through 
            a combination of discussion and exercises in class.`,
            imageURL: '/images/energy.jpg',
            logo: 'psm.svg',
            iconBorder: 'https://static.scrum.org/web/tokens/token-psm-color.svg',
            articles: [
                {
                    title: 'Course Learning Objectives',
                    content: `The course objectives include:`,
                    contentList: [
                        `Help Scrum Teams deliver value to their organization`,
                        `Understand the theory and principles behind Scrum such as Empiricism`,
                        `Understand how each part of the Scrum framework ties back to the principles and theory`,
                        `Understand uncertainty and complexity in product delivery`,
                        `Understand the meaning and importance of the Scrum values`,
                        `Learn what Done means and why it is crucial to transparency`,
                        `Know how to use the Product Backlog to plan with agility`,
                        `Understand the importance of self-managing teams and the role of Scrum Master in developing the self-managing abilities of the Scrum Team`,
                        `Clarify the leadership role a Scrum Master play on the team`,
                        `Learn the skills, traits and behaviour shifts required to be a Scrum Master`,
                    ],
                },
                {
                    title: 'Who should attend?',
                    content: ``,
                    contentList: [
                        `Practitioners that are interested in starting a career as a Scrum Master`,
                        `Scrum Masters, Agile/Scrum Coaches and consultant looking to improve their use of Scrum`,
                        `Anyone involved in product delivery using Scrum`,
                    ],
                },
                {
                    title: 'Assessment Certification',
                    content: `All participants completing the Professional Scrum Master course will receive 
                    a password to attempt the Professional Scrum Master I (PSM I) assessment. 
                    The industry-recognized PSM I certification requires a minimum passing score of 85%. 
                    PSM class participants who attempt the PSM I assessment within 14 days of receiving their 
                    free password and do not score at least 85% will be granted a 2nd attempt at no additional cost.`,
                },
                {
                    title: 'Additional Benefits',
                    content: ``,
                    contentList: [
                        `Participants are invited to a 90mins free coaching and support group call approximately 5days after the class. Details would be discussed in the class.`,
                        `All participants get an invite to the ValueHut support platform where they can get access to our trainers.`,
                    ],
                },
                {
                    title: 'More information',
                    content: ``,
                    contentList: [
                        `Mode of delivery is Virtual`,
                        `The price for the class is dependent on your home address.`,
                    ],
                },
            ],
            streams: [
                {
                    startDate: new Date('2022-11-04').toJSON(),
                    endDate: new Date('2022-11-05').toJSON(),
                    time: '9:00 - 17:00 London, UK & Lagos, Africa',
                    price: [
                        {
                            region: 'United Kingdom',
                            regionDescription: ['United Kingdom'],
                            amount: 1000,
                            currency: {
                                name: 'gbp',
                                symbol: '£',
                                locale: 'en_GB',
                                template: 'GBP',
                            },
                        },
                        {
                            region: 'Primary Market',
                            regionDescription: primaryMarket,
                            amount: 1000,
                        },
                        {
                            region: 'Tertiary Market',
                            regionDescription: tertiaryMarket,
                            amount: 800,
                        },
                        {
                            region: 'Secondary Market',
                            regionDescription: 'All countries not listed as primary or tertiary',
                            amount: 900,
                        },
                    ],
                    filled: true,
                },
                {
                    startDate: new Date('2023-01-27').toJSON(),
                    endDate: new Date('2023-01-28').toJSON(),
                    time: '9:00 - 17:00 London, UK & Lagos, Africa',
                    price: [
                        {
                            region: 'United Kingdom',
                            regionDescription: ['United Kingdom'],
                            amount: 1000,
                            currency: {
                                name: 'gbp',
                                symbol: '£',
                                locale: 'en_GB',
                                template: 'GBP',
                            },
                        },
                        {
                            region: 'Primary Market',
                            regionDescription: primaryMarket,
                            amount: 1000,
                        },
                        {
                            region: 'Tertiary Market',
                            regionDescription: tertiaryMarket,
                            amount: 800,
                        },
                        {
                            region: 'Secondary Market',
                            regionDescription: 'All countries not listed as primary or tertiary',
                            amount: 900,
                        },
                    ],
                    filled: false,
                },
                {
                    startDate: new Date('2023-03-17').toJSON(),
                    endDate: new Date('2023-03-18').toJSON(),
                    time: '9:00 - 17:00 London, UK & Lagos, Africa',
                    price: [
                        {
                            region: 'United Kingdom',
                            regionDescription: ['United Kingdom'],
                            amount: 1000,
                            currency: {
                                name: 'gbp',
                                symbol: '£',
                                locale: 'en_GB',
                                template: 'GBP',
                            },
                        },
                        {
                            region: 'Primary Market',
                            regionDescription: primaryMarket,
                            amount: 1000,
                        },
                        {
                            region: 'Tertiary Market',
                            regionDescription: tertiaryMarket,
                            amount: 800,
                        },
                        {
                            region: 'Secondary Market',
                            regionDescription: 'All countries not listed as primary or tertiary',
                            amount: 900,
                        },
                    ],
                    filled: false,
                },
                {
                    startDate: new Date('2023-05-12').toJSON(),
                    endDate: new Date('2023-05-13').toJSON(),
                    time: '9:00 - 17:00 London, UK & Lagos, Africa',
                    price: [
                        {
                            region: 'United Kingdom',
                            regionDescription: ['United Kingdom'],
                            amount: 1000,
                            currency: {
                                name: 'gbp',
                                symbol: '£',
                                locale: 'en_GB',
                                template: 'GBP',
                            },
                        },
                        {
                            region: 'Primary Market',
                            regionDescription: primaryMarket,
                            amount: 1000,
                        },
                        {
                            region: 'Tertiary Market',
                            regionDescription: tertiaryMarket,
                            amount: 800,
                        },
                        {
                            region: 'Secondary Market',
                            regionDescription: 'All countries not listed as primary or tertiary',
                            amount: 900,
                        },
                    ],
                    filled: false,
                },
            ],
            isTraining: true,
        },
        {
            id: 2,
            title: 'Professional Scrum Master II',
            acronym: 'PSM II',
            description: `Professional Scrum Master II (PSM II) is an advanced course that helps students to 
            understand the stances of an effective Scrum Master  while diving deep into how they serve the 
            Developers, Product Owner and organization. Students learn about practices and skills that enable 
            them have the right conversations and how to apply them to become better Scrum Masters. 
            It is specifically designed for experienced Scrum Masters who have a thorough understanding of the 
            Scrum Framework, with at least one year of experience looking to grow their knowledge and abilities 
            as a Scrum Master.`,
            imageURL: '/images/energy.jpg',
            logo: 'psmii.svg',
            iconBorder: 'https://static.scrum.org/web/tokens/token-psm-color.svg',
            articles: [
                {
                    title: 'Course Learning Objectives',
                    content: `The course objectives include:`,
                    contentList: [
                        `How the Scrum principles and values help guide Scrum Masters in the decisions they make`,
                        `What practices, tools, skills and stances make an effective Scrum Master`,
                        `How the Scrum Master acts as a servant-leader and improve their ability in this role`,
                        `What the Scrum Master can do to support Development Teams and Product Owners to become more effective`,
                        `Ways that the Scrum Master can help to change the environment making it more conducive for Scrum Teams to be successful with greater agility`,
                        `Provide tips and techniques for the Scrum Master to work with the rest of the organization in support of their Scrum Teams`,
                        `Improve impact of a successful Scrum Master on the organization`,
                        `How to deal with different types of Team conflicts`,
                        `Removing impediments`,
                    ],
                },
                {
                    title: 'Who should attend?',
                    content: ``,
                    contentList: [
                        `Experienced Scrum Masters who have a thorough understanding of the Scrum Framework`,
                        `Individuals with at least one year of experience looking to grow their knowledge and abilities 
                    as a Scrum Master`,
                    ],
                },
                {
                    title: 'Assessment Certification',
                    content: `All participants completing the Professional Scrum Master II course will receive a password to 
                    attempt the Professional Scrum Master II (PSM II) assessment. PSM II class participants who attempt 
                    the PSM II assessment within 14 days of receiving their free password and do not score at least 85% 
                    will be granted a 2nd attempt at no additional cost.`,
                },
                {
                    title: 'Additional Benefits',
                    content: ``,
                    contentList: [
                        `Participants are invited to a 90mins free coaching and support group call approximately 5days after the class. Details would be discussed in the class.`,
                        `All participants get an invite to the ValueHut support platform where they can get access to our trainers.`,
                    ],
                },
                {
                    title: 'More information',
                    content: ``,
                    contentList: [
                        `Mode of delivery is Virtual using Zoom`,
                        `The price for the class is dependent on your home address.`,
                    ],
                },
            ],
            streams: [
                {
                    startDate: new Date('2023-02-24').toJSON(),
                    endDate: new Date('2023-02-25').toJSON(),
                    time: '9:00 - 17:00 London, UK & Lagos, Africa',
                    price: [
                        {
                            region: 'United Kingdom',
                            regionDescription: ['United Kingdom'],
                            amount: 1100,
                            currency: {
                                name: 'gbp',
                                symbol: '£',
                                locale: 'en_GB',
                                template: 'GBP',
                            },
                        },
                        {
                            region: 'Primary Market',
                            regionDescription: primaryMarket,
                            amount: 1100,
                        },
                        {
                            region: 'Tertiary Market',
                            regionDescription: tertiaryMarket,
                            amount: 850,
                        },
                        {
                            region: 'Secondary Market',
                            regionDescription: 'All countries not listed as primary or tertiary',
                            amount: 950,
                        },
                    ],
                    filled: false,
                },
                {
                    startDate: new Date('2023-04-14').toJSON(),
                    endDate: new Date('2023-04-15').toJSON(),
                    time: '9:00 - 17:00 London, UK & Lagos, Africa',
                    price: [
                        {
                            region: 'United Kingdom',
                            regionDescription: ['United Kingdom'],
                            amount: 1100,
                            currency: {
                                name: 'gbp',
                                symbol: '£',
                                locale: 'en_GB',
                                template: 'GBP',
                            },
                        },
                        {
                            region: 'Primary Market',
                            regionDescription: primaryMarket,
                            amount: 1100,
                        },
                        {
                            region: 'Tertiary Market',
                            regionDescription: tertiaryMarket,
                            amount: 850,
                        },
                        {
                            region: 'Secondary Market',
                            regionDescription: 'All countries not listed as primary or tertiary',
                            amount: 950,
                        },
                    ],
                    filled: false,
                },
                {
                    startDate: new Date('2023-07-28').toJSON(),
                    endDate: new Date('2023-07-29').toJSON(),
                    time: '9:00 - 17:00 London, UK & Lagos, Africa',
                    price: [
                        {
                            region: 'United Kingdom',
                            regionDescription: ['United Kingdom'],
                            amount: 1100,
                            currency: {
                                name: 'gbp',
                                symbol: '£',
                                locale: 'en_GB',
                                template: 'GBP',
                            },
                        },
                        {
                            region: 'Primary Market',
                            regionDescription: primaryMarket,
                            amount: 1100,
                        },
                        {
                            region: 'Tertiary Market',
                            regionDescription: tertiaryMarket,
                            amount: 850,
                        },
                        {
                            region: 'Secondary Market',
                            regionDescription: 'All countries not listed as primary or tertiary',
                            amount: 950,
                        },
                    ],
                    filled: false,
                },
                {
                    startDate: new Date('2023-10-27').toJSON(),
                    endDate: new Date('2023-10-28').toJSON(),
                    time: '9:00 - 17:00 London, UK & Lagos, Africa',
                    price: [
                        {
                            region: 'United Kingdom',
                            regionDescription: ['United Kingdom'],
                            amount: 1100,
                            currency: {
                                name: 'gbp',
                                symbol: '£',
                                locale: 'en_GB',
                                template: 'GBP',
                            },
                        },
                        {
                            region: 'Primary Market',
                            regionDescription: primaryMarket,
                            amount: 1100,
                        },
                        {
                            region: 'Tertiary Market',
                            regionDescription: tertiaryMarket,
                            amount: 850,
                        },
                        {
                            region: 'Secondary Market',
                            regionDescription: 'All countries not listed as primary or tertiary',
                            amount: 950,
                        },
                    ],
                    filled: false,
                },
            ],
            isTraining: true,
        },
                {
            id: 3,
            title: 'Professional Scrum Facilitation Skills',
            acronym: 'PSFS',
            description: `Professional Scrum Facilitation Skills™ is an interactive class designed to help 
            Scrum Masters, Scrum Team Members and Leaders working with the Scrum Framework develop a facilitator’s mindset, 
            proficiency in facilitation skills, and learn when and how to select effective techniques for various circumstances. 
            Exceptional facilitation skills enable better problem-solving, more effective Scrum events and greater team alignment, 
            all leading to better outcomes. Often times, new Scrum Practitioners struggle with how to facilitate Scrum Event and this 
            class aims to provide a set of facilitation tools that participants can try out the very next day with their scrum teams.`,
            imageURL: '/images/energy.jpg',
            logo: 'psfs.svg',
            iconBorder: 'https://static.scrum.org/web/tokens/token-psm-color.svg',
            articles: [
                {
                    title: 'Course Learning Objectives',
                    content: `The course objectives include:`,
                    contentList: [
                        `Develop facilitation skills and a facilitator’s mindset`,
                        `Learn the facilitation principles that experienced facilitators fall back on when interactions are difficult`,
                        `Understand the roles that facilitation principles and the Scrum Values play in enhancing healthy collaboration in Scrum Teams`,
                        `Explore how facilitation can address challenging scenarios most Scrum Teams encounter`,
                        `Apply facilitation skills and techniques to improve the Scrum events and other interactions`,
                        `Understand how to encourage diverse perspectives, while bringing the team together to reach decisions`,
                        `Experience the elements of group dynamics and how they influence the decision-making process`, 
                        `Leave class with a toolbox of facilitation techniques and understand how to apply them in different circumstances`
                    ],
                },
                {
                    title: 'Who should attend?',
                    content: ``,
                    contentList: [
                        `Scrum Masters and any Scrum Team member interested in learning how to use facilitation to enhance their team’s success`,
                        `Scrum Coaches, Agile Coaches and Consultants`
                    ],
                },
                {
                    title: 'Assessment Certification',
                    content: `All participants completing the Professional Scrum Facilitation Skills  class will receive a password to 
                    attempt the Professional Scrum Facilitation Skills assessment. Participants who attempt 
                    the PSFS assessment within 14 days of receiving their free password and do not score at least 85% 
                    will be granted a 2nd attempt at no additional cost.`,
                },
                {
                    title: 'Additional Benefits',
                    content: ``,
                    contentList: [
                        `Participants are invited to a 90mins free coaching and support group call approximately 5days after the class. Details would be discussed in the class.`,
                        `All participants get an invite to the ValueHut support platform where they can get access to our trainers.`,
                    ],
                },
                {
                    title: 'More information',
                    content: ``,
                    contentList: [
                        `Mode of delivery is Virtual using Zoom`,
                        `The price for the class is dependent on your home address.`,
                    ],
                },
            ],
            streams: [
                {
                    startDate: new Date('2023-01-19').toJSON(),
                    endDate: new Date('2023-01-19').toJSON(),
                    time: '9:00 - 17:00 London, UK & Lagos, Africa',
                    price: [
                        {
                            region: 'United Kingdom',
                            regionDescription: ['United Kingdom'],
                            amount: 600,
                            currency: {
                                name: 'gbp',
                                symbol: '£',
                                locale: 'en_GB',
                                template: 'GBP',
                            },
                        },
                        {
                            region: 'Primary Market',
                            regionDescription: primaryMarket,
                            amount: 600,
                        },
                        {
                            region: 'Tertiary Market',
                            regionDescription: tertiaryMarket,
                            amount: 500,
                        },
                        {
                            region: 'Secondary Market',
                            regionDescription: 'All countries not listed as primary or tertiary',
                            amount: 450,
                        },
                    ],
                    filled: false,
                },
            ],
            isTraining: true,
        },
        {
            id: 4,
            title: 'Professional Agile Leadership',
            acronym: 'PAL-E',
            description: `Professional Agile Leadership is a 2 day workshop to equip leaders and managers 
            of Agile teams along with their Product Owners and Scrum Masters to help their organizations change.
            In this class, Leaders understand how agility adds value to their organization and why their 
            support in creating an agile culture is essential to success. The class provides Leaders 
            information that is required to support and enable teams by providing guidance and removing 
            impediments that are beyond the team’s ability to address.`,
            imageURL: '/images/fauxels.jpg',
            logo: 'pal-e.svg',
            iconBorder: 'https://static.scrum.org/web/tokens/token-psm-color.svg',
            articles: [
                {
                    title: 'Course Learning Objectives',
                    content: `The course objectives include:`,
                    contentList: [
                        `Understand how agility can help improve your organisation's performance`,
                        `Challenges of an Agile Leader and their teams`,
                        `Discover the management style suited for agile ways of working`,
                        `Learn how to assess and foster the team's agile maturity`,
                        `Explore how to connect values and goals to develop high performing teams`,
                        `Identify how to measure the benefits and impacts of agility in your organisation`,
                    ],
                },
                {
                    title: 'Who should attend?',
                    content: ``,
                    contentList: [
                        `The Professional Agile Leadership Essentials course is designed for managers and those in leadership roles.`,
                        `Top level managers and Middle level Managers who want to grow their organization’s ability to respond to market opportunities, competitive pressures, or opportunities for innovation.`,
                    ],
                },
                {
                    title: 'Assessment Certification',
                    content: `All participants will receive a password to attempt the will receive a password to attempt the PAL I assessment.
                    PAL participants who attempt the PAL I assessment within 14 days of receiving their free password and do not score at 
                    least 85% will be granted a 2nd attempt at no additional cost.`,
                },
                {
                    title: 'More information',
                    content: ``,
                    contentList: [
                        `Mode of delivery is Virtual using Zoom`,
                        `The price for the class is dependent on your home address.`,
                    ],
                },
            ],
            streams: [
                {
                    startDate: new Date('2022-07-15').toJSON(),
                    endDate: new Date('2022-07-16').toJSON(),
                    time: '9:00 - 17:00 London, UK & Lagos, Africa',
                    price: [
                        {
                            region: 'United Kingdom',
                            regionDescription: ['United Kingdom'],
                            amount: 1100,
                            currency: {
                                name: 'gbp',
                                symbol: '£',
                                locale: 'en_GB',
                                template: 'GBP',
                            },
                        },
                        {
                            region: 'Primary Market',
                            regionDescription: primaryMarket,
                            amount: 1100,
                        },
                        {
                            region: 'Tertiary Market',
                            regionDescription: tertiaryMarket,
                            amount: 850,
                        },
                        {
                            region: 'Secondary Market',
                            regionDescription: 'All countries not listed as primary or tertiary',
                            amount: 950,
                        },
                    ],
                    filled: true,
                },
                {
                    startDate: new Date('2022-12-09').toJSON(),
                    endDate: new Date('2022-12-10').toJSON(),
                    time: '9:00 - 17:00 London, UK & Lagos, Africa',
                    price: [
                        {
                            region: 'United Kingdom',
                            regionDescription: ['United Kingdom'],
                            amount: 1100,
                            currency: {
                                name: 'gbp',
                                symbol: '£',
                                locale: 'en_GB',
                                template: 'GBP',
                            },
                        },
                        {
                            region: 'Primary Market',
                            regionDescription: primaryMarket,
                            amount: 1100,
                        },
                        {
                            region: 'Tertiary Market',
                            regionDescription: tertiaryMarket,
                            amount: 850,
                        },
                        {
                            region: 'Secondary Market',
                            regionDescription: 'All countries not listed as primary or tertiary',
                            amount: 950,
                        },
                    ],
                    filled: false,
                },
                {
                    startDate: new Date('2023-06-09').toJSON(),
                    endDate: new Date('2023-06-10').toJSON(),
                    time: '9:00 - 17:00 London, UK & Lagos, Africa',
                    price: [
                        {
                            region: 'United Kingdom',
                            regionDescription: ['United Kingdom'],
                            amount: 1100,
                            currency: {
                                name: 'gbp',
                                symbol: '£',
                                locale: 'en_GB',
                                template: 'GBP',
                            },
                        },
                        {
                            region: 'Primary Market',
                            regionDescription: primaryMarket,
                            amount: 1100,
                        },
                        {
                            region: 'Tertiary Market',
                            regionDescription: tertiaryMarket,
                            amount: 850,
                        },
                        {
                            region: 'Secondary Market',
                            regionDescription: 'All countries not listed as primary or tertiary',
                            amount: 950,
                        },
                    ],
                    filled: false,
                },
                {
                    startDate: new Date('2023-11-17').toJSON(),
                    endDate: new Date('2023-11-18').toJSON(),
                    time: '9:00 - 17:00 London, UK & Lagos, Africa',
                    price: [
                        {
                            region: 'United Kingdom',
                            regionDescription: ['United Kingdom'],
                            amount: 1100,
                            currency: {
                                name: 'gbp',
                                symbol: '£',
                                locale: 'en_GB',
                                template: 'GBP',
                            },
                        },
                        {
                            region: 'Primary Market',
                            regionDescription: primaryMarket,
                            amount: 1100,
                        },
                        {
                            region: 'Tertiary Market',
                            regionDescription: tertiaryMarket,
                            amount: 850,
                        },
                        {
                            region: 'Secondary Market',
                            regionDescription: 'All countries not listed as primary or tertiary',
                            amount: 950,
                        },
                    ],
                    filled: false,
                },
            ],
            isTraining: true,
        },
        {
            id: 5,
            title: 'Applying Professional Scrum',
            acronym: 'APS',
            description: `The APS is a hands-on, activity-based course in which 
                        students experience how Professional Scrum and the Scrum framework 
                        improves their capacity to deliver 
                        value compared to traditional methods. Scrum enables 
                        a better way of working that highlights the use of 
                        experimentation, incremental delivery of customer value, 
                        frequent feedback loops and the fostering of strong team 
                        dynamics. The course is high recommended for teams 
                        that already work together in an organisation to improve 
                        their ways of working using Scrum. The class is delivered 
                        over a two days (8hrs per day).`,
            imageURL: '/images/morillo.jpg',
            logo: 'aps.svg',
            iconBorder: 'https://static.scrum.org/web/tokens/token-psm-color.svg',
            articles: [
                {
                    title: 'What will I learn?',
                    content: `Through this online interactive mentoring and coaching program of 16 hours of learning, ending with a coaching session for continuous growth, you will be able to advance the HOW TO dimension of ScrumMastering and agile coaching, and grow skills that help improve your Scrum Team, organizations and yourself. You can join from anywhere online. However please note that there is pre-work prior and homework after each online mentoring and coaching session (read more in commitment session).`,
                },
                {
                    title: 'Assessment Certification',
                    content: `All participants will receive a password to attempt the Professional Scrum Master I (PSM I) assessment. 
                    PSM class participants who attempt the PSM I assessment within 14 days of receiving their free password and 
                    do not score at least 85% will be granted a 2nd attempt at no additional cost.`,
                },
            ],
            streams: [],
            isTraining: true,
        },
    ],
};

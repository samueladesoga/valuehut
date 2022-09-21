// Here you can add the new training. 
// Use Interface below as a template to add right fields 
// when you will create a new training

// Important!
// Each word of title should be in Capitalize Case

// Start and End Dates should be JSON objects! 
// (See how it looks now)

import { primaryMarket, tertiaryMarket } from "./countries"

export interface PriceTypes {
    region: string,
    regionDescription: string | string[],
    amount: number,
    currency?: CurrencyTypes
}

export interface CurrencyTypes {
    name: string,
    symbol?: string,
    locale?: string,
    template?: string
}

export interface StreamTypes {
    startDate: any,
    endDate: any,
    time: string,
    price: PriceTypes[],
    filled: boolean
}

export interface TrainingArticleTypes {
    title?: string,
    content: string,
    contentList?: string[],
    imageURL?: string,
    textAlign?: string,
    imagePosition?: string
}

export interface TrainingTypes {
    id: number,
    title: string,
    acronym?: string,
    description?: string,
    logo?: any,
    iconBorder?: string,
    imageURL: string,
    articles?: TrainingArticleTypes[],
    streams?: StreamTypes[], 
    isTraining?: boolean
}

interface TrainingObject {
    training: TrainingTypes[]
}

export const training:TrainingObject = {
    training: [
        {
            id: 2,
            title: "Professional Scrum Master",
            acronym: "PSM",
            description: `Professional Scrum Master (PSM) is an interactive, activity-based course 
            where students gain a thorough understanding of Professional Scrum and the role of the 
            Scrum Master. Students develop a deep understanding of the underlying principles of Scrum 
            and the Agile mindset while learning the practices applied by successful Scrum Teams through 
            a combination of discussion and exercises in class.`,
            imageURL: "./energy.jpg",
            logo: "psm.svg",
            iconBorder: "https://static.scrum.org/web/tokens/token-psm-color.svg",
            articles: [
                {
                    title: "Course Learning Objectives",
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
                        `Learn the skills, traits and behaviour shifts required to be a Scrum Master`
                    ]
                },
                {
                    title: "Who should attend?",
                    content: ``,
                    contentList: [
                    `Practitioners that are interested in starting a career as a Scrum Master`,
                    `Scrum Masters, Agile/Scrum Coaches and consultant looking to improve their use of Scrum`,
                    `Anyone involved in product delivery using Scrum`
                    ]
                },
                {
                    title: "Assessment Certification",
                    content: `All participants completing the Professional Scrum Master course will receive 
                    a password to attempt the Professional Scrum Master I (PSM I) assessment. 
                    The industry-recognized PSM I certification requires a minimum passing score of 85%. 
                    PSM class participants who attempt the PSM I assessment within 14 days of receiving their 
                    free password and do not score at least 85% will be granted a 2nd attempt at no additional cost.`
                },
                {
                     title: "Additional Benefits",
                     content: ``,
                     contentList: [
                     `Participants are invited to a 2hrs free coaching and support group call approximately 5days after the class. Details would be shared in the class.`,
                     `All participants get an invite to the ValueHut support platform where they can get access to our trainers.`
                     ]
                },
                {
                     title: "More information",
                     content: ``,
                     contentList: [
                     `Mode of delivery is Virtual`,
                     `The price for the class is dependent on location.`
                     ]
                }
                
            ],
            streams: [
                {
                    startDate: new Date("2022-07-29").toJSON(),
                    endDate: new Date("2022-07-30").toJSON(),
                    time: "9:00 - 17:00 London, UK & Lagos, Africa",
                    price: [
                        {
                        region: "United Kingdom",
                        regionDescription: ["United Kingdom"],
                        amount: 1000,
                        currency: {
                            name: "gbp",
                            symbol: "£",
                            locale: "en_GB",
                            template: "GBP"
                            }
                        },
                        {
                        region: "Primary Market",
                        regionDescription: primaryMarket,
                        amount: 1000
                        },
                        {
                        region: "Tertiary Market",
                        regionDescription: tertiaryMarket,
                        amount: 800
                        },
                        {
                        region: "Secondary Market",
                        regionDescription: "All countries not listed as primary or tertiary",
                        amount: 900
                        }
                    ], 
                    filled: true
                },
                {
                    startDate: new Date("2022-09-16").toJSON(),
                    endDate: new Date("2022-09-17").toJSON(),
                    time: "9:00 - 17:00 London, UK & Lagos, Africa",
                    price: [
                        {
                        region: "United Kingdom",
                        regionDescription: ["United Kingdom"],
                        amount: 1000,
                        currency: {
                            name: "gbp",
                            symbol: "£",
                            locale: "en_GB",
                            template: "GBP"
                            }
                        },
                        {
                        region: "Primary Market",
                        regionDescription: primaryMarket,
                        amount: 1000
                        },
                        {
                        region: "Tertiary Market",
                        regionDescription: tertiaryMarket,
                        amount: 800
                        },
                        {
                        region: "Secondary Market",
                        regionDescription: "All countries not listed as primary or tertiary",
                        amount: 900
                        }
                    ], 
                    filled: true
                },
                {
                    startDate: new Date("2022-11-04").toJSON(),
                    endDate: new Date("2022-11-05").toJSON(),
                    time: "9:00 - 17:00 London, UK & Lagos, Africa",
                    price: [
                        {
                        region: "United Kingdom",
                        regionDescription: ["United Kingdom"],
                        amount: 1000,
                        currency: {
                            name: "gbp",
                            symbol: "£",
                            locale: "en_GB",
                            template: "GBP"
                            }
                        },
                        {
                        region: "Primary Market",
                        regionDescription: primaryMarket,
                        amount: 1000
                        },
                        {
                        region: "Tertiary Market",
                        regionDescription: tertiaryMarket,
                        amount: 800
                        },
                        {
                        region: "Secondary Market",
                        regionDescription: "All countries not listed as primary or tertiary",
                        amount: 900
                        }
                    ], 
                    filled: false
                }
            ],
            isTraining: true
        },
        {
            id: 3,
            title: "Professional Agile Leadership",
            acronym: "PAL-E",
            description: `Professional Agile Leadership is a 2 day workshop to equip leaders and managers 
            of Agile teams along with their Product Owners and Scrum Masters to help their organizations change.
            In this class, Leaders understand how agility adds value to their organization and why their 
            support in creating an agile culture is essential to success. The class provides Leaders 
            information that is required to support and enable teams by providing guidance and removing 
            impediments that are beyond the team’s ability to address.`,
            imageURL: "./fauxels.jpg",
            logo: "pal-e.svg",
            iconBorder: "https://static.scrum.org/web/tokens/token-psm-color.svg",
            articles: [
                {
                    title: "Course Learning Objectives",
                    content: `The course objectives include:`,
                    contentList: [
                        `Understand how agility can help improve your organisation's performance`,
                        `Challenges of an Agile Leader and their teams`,
                        `Discover the management style suited for agile ways of working`,
                        `Learn how to assess and foster the team's agile maturity`,
                        `Explore how to connect values and goals to develop high performing teams`,
                        `Identify how to measure the benefits and impacts of agility in your organisation`
                    ]
                },
                {
                    title: "Who should attend?",
                    content: ``,
                    contentList: [
                    `The Professional Agile Leadership Essentials course is designed for managers and those in leadership roles.`,
                    `Top level managers and Middle level Managers who want to grow their organization’s ability to respond to market opportunities, competitive pressures, or opportunities for innovation.`
                    ]
                },
                {
                    title: "Assessment Certification",
                    content: `All participants will receive a password to attempt the will receive a password to attempt the PAL I assessment.
                    PAL participants who attempt the PAL I assessment within 14 days of receiving their free password and do not score at 
                    least 85% will be granted a 2nd attempt at no additional cost.`
                },
                {
                     title: "More information",
                     content: ``,
                     contentList: [
                     `Mode of delivery is Virtual`,
                     `The price for the class is dependent on location.`
                     ]
                }
            ],
            streams: [
                {
                    startDate: new Date("2022-07-15").toJSON(),
                    endDate: new Date("2022-07-16").toJSON(),
                    time: "9:00 - 17:00 London, UK & Lagos, Africa",
                    price: [
                        {
                        region: "United Kingdom",
                        regionDescription: ["United Kingdom"],
                        amount: 1100,
                        currency: {
                            name: "gbp",
                            symbol: "£",
                            locale: "en_GB",
                            template: "GBP"
                            }
                        },
                        {
                        region: "Primary Market",
                        regionDescription: primaryMarket,
                        amount: 1100
                        },
                        {
                        region: "Tertiary Market",
                        regionDescription: tertiaryMarket,
                        amount: 850
                        },
                        {
                        region: "Secondary Market",
                        regionDescription: "All countries not listed as primary or tertiary",
                        amount: 950
                        }
                    ], 
                    filled: true
                },
                {
                    startDate: new Date("2022-12-09").toJSON(),
                    endDate: new Date("2022-12-10").toJSON(),
                    time: "9:00 - 17:00 London, UK & Lagos, Africa",
                    price: [
                        {
                        region: "United Kingdom",
                        regionDescription: ["United Kingdom"],
                        amount: 1100,
                        currency: {
                            name: "gbp",
                            symbol: "£",
                            locale: "en_GB",
                            template: "GBP"
                            }
                        },
                        {
                        region: "Primary Market",
                        regionDescription: primaryMarket,
                        amount: 1100
                        },
                        {
                        region: "Tertiary Market",
                        regionDescription: tertiaryMarket,
                        amount: 850
                        },
                        {
                        region: "Secondary Market",
                        regionDescription: "All countries not listed as primary or tertiary",
                        amount: 950
                        }
                    ], 
                    filled: false
                }
            ],
            isTraining: true
        },
        {
            id: 4,
            title: "Applying Professional Scrum",
            acronym: "APS",
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
            imageURL: "./morillo.jpg",
            logo: "aps.svg",
            iconBorder: "https://static.scrum.org/web/tokens/token-psm-color.svg",
            articles: [
                {
                    title: "What will I learn?",
                    content: `Through this online interactive mentoring and coaching program of 16 hours of learning, ending with a coaching session for continuous growth, you will be able to advance the HOW TO dimension of ScrumMastering and agile coaching, and grow skills that help improve your Scrum Team, organizations and yourself. You can join from anywhere online. However please note that there is pre-work prior and homework after each online mentoring and coaching session (read more in commitment session).`
                },
                {
                    title: "Assessment Certification",
                    content: `All participants will receive a password to attempt the Professional Scrum Master I (PSM I) assessment. 
                    PSM class participants who attempt the PSM I assessment within 14 days of receiving their free password and 
                    do not score at least 85% will be granted a 2nd attempt at no additional cost.`
                }
            ],
            streams: [],
            isTraining: true
        }
    ]
}
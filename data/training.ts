// Here you can add the new training.
// Use Interface below as a template to add right fields
// when you will create a new training

// Important!
// Each word of title should be in Capitalize Case
import { primaryMarket, tertiaryMarket } from './countries'

export interface PriceTypes {
    region: string
    regionDescription: string | string[]
    amount: number
    currency?: CurrencyTypes
}

export interface CurrencyTypes {
    name: string
    symbol?: string
    locale?: string
    template?: string
}

export interface StreamTypes {
    id: string
    startDate: any
    endDate: any
    time: string
    classType: string
    price: PriceTypes[]
    filled: boolean
}

export interface TrainingArticleTypes {
    title?: string
    content: string
    contentList?: string[]
    imageURL?: string
    textAlign?: string
    imagePosition?: string
    links?: {
        url: string
        label: string
    }[]
}

export interface TrainingTypes {
    id: number
    title: string
    acronym?: string
    description?: string
    logo?: any
    iconBorder?: string
    imageURL: string
    articles?: TrainingArticleTypes[]
    streams?: StreamTypes[]
    isTraining?: boolean
}

interface TrainingObject {
    training: TrainingTypes[]
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
                        `All participants get an invite to the ValueHut Consulting support platform where they can get access to our trainers.`,
                    ],
                },
                {
                    title: 'More information',
                    content: ``,
                    contentList: [
                        `Mode of delivery is either In-Person or Virtual, view course dates for more details.`,
                        `The price for the class is dependent on your home address.`,
                        `Attendees are able to claim 14 PDU credits from the Project Management Institute (PMI) after attending this two-day course.`,
                    ],
                    links: [
                        {
                            label: 'Click here for more reasons to train with ValueHut Consulting',
                            url: 'https://www.valuehut.co/blog/a-case-for-agile-and-scrum-training-with-valuehut',
                        },
                    ],
                },
            ],
            streams: [
                {
                    id: 'ad9e0903-7c84-446b-aff5-976530caa585',
                    startDate: new Date('2024-10-24').toJSON(),
                    classType: 'Virtual class',
                    endDate: new Date('2024-10-25').toJSON(),
                    time: '09:00 - 17:00 BST',
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
                    id: '32e8b022-cdf6-44a1-98c5-44dcf4129d07',
                    startDate: new Date('2025-02-20').toJSON(),
                    classType: 'Virtual class',
                    endDate: new Date('2025-02-21').toJSON(),
                    time: '09:00 - 17:00 GMT',
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
            title: 'Professional Scrum Product Owner',
            acronym: 'PSPO',
            description: `Professional Scrum Product Owner course (PSPO) is an interactive, activity-based course 
            where students gain a thorough understanding of Professional Scrum and the critical role of the 
            Product Owner. Students learn a number of Product Ownership practices that can be applied immediately after
            the class and introduction to a wider set of Agile Product Management practices.`,
            imageURL: '/images/morillo.jpg',
            logo: 'pspo.svg',
            iconBorder: 'https://static.scrum.org/web/tokens/token-psm-color.svg',
            articles: [
                {
                    title: 'Course Learning Objectives',
                    content: `The course objectives include:`,
                    contentList: [
                        `Increase business agility through the proper execution of the Product Owner accountability`,
                        `Recognize the value of a product over project mindset`,
                        `Learn how to bridge business strategy to product execution using Scrum`,
                        `Understand that the Product Owner is an Agile Product Manager`,
                        `Understand the Scrum Principles and Empiricism`,
                        `Understand the Product Owner accountabilities on the Scrum Team`,
                        `Learn how to align the team around the business strategy, product vision, Product Goal, and Sprint Goal`,
                        `Find ways to effectively communicate the business strategy, product vision, and Product Goal`,
                        `Learn techniques for Product Backlog Management, Release Management, and Forecasting`,
                        `Identify metrics that can be used to track value creation, and successful product delivery`,
                        `Discover techniques to interact with stakeholders, customers, and the members of the Scrum Team`,
                    ],
                },
                {
                    title: 'Who should attend?',
                    content: ``,
                    contentList: [
                        `Professionals that are interested in starting a career as a Product Owner`,
                        `Product Owners with some experience in the role that are looking to improve their understanding or fix their misconceptions of Scrum and the Product Owner role`,
                        `Scrum Masters wishing to be an effective coach to Product Owners will also find valuable insights in this course`,
                    ],
                },
                {
                    title: 'Assessment Certification',
                    content: `All participants completing the Professional Scrum Product Owner course will receive 
                    a password to attempt the Professional Scrum Product Owner I (PSPO I) assessment. 
                    The industry-recognized PSPO I certification requires a minimum passing score of 85%. 
                    PSPO class participants who attempt the PSPO I assessment within 14 days of receiving their 
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
                        `Mode of delivery is either In-Person or Virtual, view course dates for more details.`,
                        `The price for the class is dependent on your home address.`,
                        `Attendees are able to claim 14 PDU credits from the Project Management Institute (PMI) after attending this two-day course.`,
                    ],
                    links: [
                        {
                            label: 'Click here for more reasons to train with ValueHut Consulting',
                            url: 'https://www.valuehut.co/blog/a-case-for-agile-and-scrum-training-with-valuehut',
                        },
                    ],
                },
            ],
            streams: [
                {
                    id: 'e7a085e5-9714-4462-a470-5a0e8364b975',
                    startDate: new Date('2024-12-05').toJSON(),
                    classType: 'Virtual',
                    endDate: new Date('2024-12-06').toJSON(),
                    time: '9:00 - 17:00 GMT',
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
                    id: '05f85b4d-e209-41b3-a639-078f22722957',
                    startDate: new Date('2025-02-13').toJSON(),
                    classType: 'Virtual',
                    endDate: new Date('2025-02-14').toJSON(),
                    time: '9:00 - 17:00 GMT',
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
                    id: 'fd3247c6-5150-428b-9192-9c7c1cbb8aa2',
                    startDate: new Date('2025-03-06').toJSON(),
                    classType: 'Virtual',
                    endDate: new Date('2025-03-07').toJSON(),
                    time: '9:00 - 17:00 GMT',
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
            id: 3,
            title: 'Professional Scrum Master - Advanced',
            acronym: 'PSM-A',
            description: `Professional Scrum Master - Advanced is a course that helps students to 
            understand the stances of an effective Scrum Master  while diving deep into how they serve the 
            Developers, Product Owner and the Organization. Students learn about practices and skills that enable 
            them have the right conversations and how to apply them to become better Scrum Masters. 
            It is specifically designed for Scrum Masters who have a thorough understanding of the 
            Scrum Framework, with at least one year of experience and looking to grow their knowledge and abilities 
            as a Scrum Master.`,
            imageURL: '/images/energy.jpg',
            logo: 'PSM-A.svg',
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
                    content: `All participants completing the Professional Scrum Master - Advanced course will receive a password to 
                    attempt the Professional Scrum Master - Advanced (PSM-A) assessment. PSM-A class participants who attempt 
                    the PSM-A assessment within 14 days of receiving their free password and do not score at least 85% 
                    will be granted a 2nd attempt at no additional cost.`,
                },
                {
                    title: 'Additional Benefits',
                    content: ``,
                    contentList: [
                        `Participants are invited to a 90mins free coaching and support group call approximately 5days after the class. Details would be discussed in the class.`,
                        `All participants get an invite to the ValueHut Consulting support platform where they can get access to our trainers.`,
                    ],
                },
                {
                    title: 'More information',
                    content: ``,
                    contentList: [
                        `Mode of delivery is either In-Person or Virtual, view course dates for more details.`,
                        `The price for the class is dependent on your home address.`,
                        `Attendees are able to claim 14 PDU credits from the Project Management Institute (PMI) after attending this two-day course.`,
                    ],
                    links: [
                        {
                            label: 'Click here for more reasons to train with  ValueHut Consulting',
                            url: 'https://www.valuehut.co/blog/a-case-for-agile-and-scrum-training-with-valuehut',
                        },
                    ],
                },
            ],
            streams: [
                {
                    id: '8a0ca903-1d99-4497-a0b9-95d641507d59',
                    startDate: new Date('2024-12-12').toJSON(),
                    endDate: new Date('2024-12-13').toJSON(),
                    time: '9:00 - 17:00 GMT',
                    classType: 'Virtual',
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
                    id: 'b75ddd3d-6e3f-4043-90ec-187474891a0c',
                    startDate: new Date('2025-03-13').toJSON(),
                    endDate: new Date('2025-03-14').toJSON(),
                    time: '9:00 - 17:00 GMT',
                    classType: 'Virtual',
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
            id: 4,
            title: 'Professional Scrum Facilitation Skills',
            acronym: 'PSF Skills',
            description: `Professional Scrum Facilitation Skills™ is an interactive class designed to help 
            Scrum Masters, Scrum Team Members and Leaders working with the Scrum Framework develop a facilitator’s mindset, 
            proficiency in facilitation skills, and learn when and how to select effective techniques for various circumstances. 
            Exceptional facilitation skills enable better problem-solving, more effective Scrum events and greater team alignment, 
            all leading to better outcomes. Often times, new Scrum Practitioners struggle with how to facilitate Scrum Event and this 
            class aims to provide a set of facilitation tools that participants can try out the very next day with their scrum teams.`,
            imageURL: '/images/energy.jpg',
            logo: 'PSF Skills.svg',
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
                        `Leave class with a toolbox of facilitation techniques and understand how to apply them in different circumstances`,
                    ],
                },
                {
                    title: 'Who should attend?',
                    content: ``,
                    contentList: [
                        `Scrum Masters and any Scrum Team member interested in learning how to use facilitation to enhance their team’s success`,
                        `Scrum Coaches, Agile Coaches and Consultants`,
                    ],
                },
                {
                    title: 'Assessment Certification',
                    content: `All participants completing the Professional Scrum Facilitation Skills  class will receive a password to 
                    attempt the Professional Scrum Facilitation Skills assessment. Participants who attempt 
                    the PSF Skills assessment within 14 days of receiving their free password and do not score at least 85% 
                    will be granted a 2nd attempt at no additional cost.`,
                },
                {
                    title: 'Additional Benefits',
                    content: ``,
                    contentList: [
                        `Participants are invited to a 90mins free coaching and support group call approximately 5days after the class. Details would be discussed in the class.`,
                        `All participants get an invite to the ValueHut Consulting support platform where they can get access to our trainers.`,
                    ],
                },
                {
                    title: 'More information',
                    content: ``,
                    contentList: [
                        `Mode of delivery is either In-Person or Virtual, view course dates for more details.`,
                        `The price for the class is dependent on your home address.`,
                        `Attendees are able to claim 7 PDU credits from the Project Management Institute (PMI) after attending this one-day course.`,
                    ],
                    links: [
                        {
                            label: 'Click here for more reasons to train with ValueHut Consulting',
                            url: 'https://www.valuehut.co/blog/a-case-for-agile-and-scrum-training-with-valuehut',
                        },
                    ],
                },
            ],
            streams: [
                {
                    id: 'a569cc12-e1ab-4e89-b553-40ca059d21a0',
                    startDate: new Date('2024-12-06').toJSON(),
                    endDate: new Date('2024-12-06').toJSON(),
                    classType: 'Virtual',
                    time: '9:00 - 17:00 GMT',
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
                            amount: 450,
                        },
                        {
                            region: 'Secondary Market',
                            regionDescription: 'All countries not listed as primary or tertiary',
                            amount: 500,
                        },
                    ],
                    filled: true,
                },
                {
                    id: 'ddf6cf2a-553f-46c5-9891-716f98ed7f1d',
                    startDate: new Date('2025-02-28').toJSON(),
                    endDate: new Date('2025-02-28').toJSON(),
                    classType: 'Virtual',
                    time: '9:00 - 17:00 GMT',
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
                            amount: 450,
                        },
                        {
                            region: 'Secondary Market',
                            regionDescription: 'All countries not listed as primary or tertiary',
                            amount: 500,
                        },
                    ],
                    filled: false,
                },
                {
                    id: '0633ae29-9bce-4ddc-8c37-f0405205932c',
                    startDate: new Date('2025-03-28').toJSON(),
                    endDate: new Date('2025-03-28').toJSON(),
                    classType: 'Virtual',
                    time: '9:00 - 17:00 GMT',
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
                            amount: 450,
                        },
                        {
                            region: 'Secondary Market',
                            regionDescription: 'All countries not listed as primary or tertiary',
                            amount: 500,
                        },
                    ],
                    filled: false,
                },
            ],
            isTraining: true,
        },
        {
            id: 5,
            title: 'Professional Scrum Product Backlog Management Skills',
            acronym: 'PSPBM Skills',
            description: `Professional Scrum Product Backlog Management Skills™ is an interactive course 
            designed to help Scrum practitioners improve their ability to manage all aspects of the Product 
            Backlog and improve communication with stakeholders.

            In this one-day skills-building course, participants will learn techniques and methods for 
            effectively managing a Product Backlog that clearly expresses the product's future vision and 
            brings transparency to what is most valuable for the Scrum Team to work on to delight stakeholders 
            and customers. Students will gain hands-on experience with refinement techniques such as decomposing 
            and slicing Product Backlog items, as well as an understanding of how simplicity may significantly 
            improve complex Product Backlogs.`,
            imageURL: '/images/energy.jpg',
            logo: 'PSPBM Skills.svg',
            iconBorder: 'https://static.scrum.org/web/tokens/token-psm-color.svg',
            articles: [
                {
                    title: 'Course Learning Objectives',
                    content: `The course objectives include:`,
                    contentList: [
                        `Apply practical techniques to create, refine, and order the Product Backlog`,
                        `Identify and effectively communicate with stakeholders`,
                        `Capture stakeholder’s needs on a Product Backlog`,
                        `Find better ways to improve the transparency of  the Product Backlog`,
                        `Use empiricism as a competitive advantage for the organisation`,
                    ],
                },
                {
                    title: 'Who should attend?',
                    content: ``,
                    contentList: [
                        `Scrum Practitioners who are currently working as Product Owners and are looking for practical ways to manage their Stakeholders and Product Backlog.`,
                        `Professionals interested in learning essential Product Owner practices`,
                        `Product Owners looking to improve their understanding of their customers and stakeholders`,
                        `Scrum Masters wishing to be an effective coach to Product Owners`,
                        `Product Managers and Business Analysts looking to improve their Product Backlog management skills`,
                    ],
                },
                {
                    title: 'Assessment Certification',
                    content: `All participants completing the Professional Scrum Product Backlog Management Skills course will 
                    receive a password to attempt the Professional Scrum Product Backlog Management Skills (PSPBMS) assessment. 
                    PSPBMS class participants who attempt the PSPBMS assessment within 14 days of receiving their free password 
                    and do not score at least 85% will be granted a 2nd attempt at no additional cost.`,
                },
                {
                    title: 'Additional Benefits',
                    content: ``,
                    contentList: [
                        `All participants get an invite to the ValueHut Consulting support platform where they can get access to our trainers.`,
                    ],
                },
                {
                    title: 'More information',
                    content: ``,
                    contentList: [
                        `Mode of delivery is either In-Person or Virtual, view course dates for more details.`,
                        `The price for the class is dependent on your home address.`,
                        `Attendees are able to claim 7 PDU credits from the Project Management Institute (PMI) after attending this one-day course.`,
                    ],
                    links: [
                        {
                            label: 'Click here for more reasons to train with ValueHut Consulting',
                            url: 'https://www.valuehut.co/blog/a-case-for-agile-and-scrum-training-with-valuehut',
                        },
                    ],
                },
            ],
            streams: [
                {
                    id: '7a91256e-f821-43ef-afbc-f1419c110eed',
                    startDate: new Date('2024-10-04').toJSON(),
                    endDate: new Date('2024-10-04').toJSON(),
                    classType: 'Virtual',
                    time: '9:00 - 17:00 GMT',
                    price: [
                        {
                            region: 'United Kingdom',
                            regionDescription: ['United Kingdom'],
                            amount: 550,
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
                            amount: 550,
                        },
                        {
                            region: 'Tertiary Market',
                            regionDescription: tertiaryMarket,
                            amount: 450,
                        },
                        {
                            region: 'Secondary Market',
                            regionDescription: 'All countries not listed as primary or tertiary',
                            amount: 500,
                        },
                    ],
                    filled: true,
                },
                {
                    id: 'e73d7d7e-bf60-40c7-9a0d-b753649461e2',
                    startDate: new Date('2024-11-08').toJSON(),
                    endDate: new Date('2024-11-08').toJSON(),
                    classType: 'Virtual',
                    time: '9:00 - 17:00 GMT',
                    price: [
                        {
                            region: 'United Kingdom',
                            regionDescription: ['United Kingdom'],
                            amount: 550,
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
                            amount: 550,
                        },
                        {
                            region: 'Tertiary Market',
                            regionDescription: tertiaryMarket,
                            amount: 450,
                        },
                        {
                            region: 'Secondary Market',
                            regionDescription: 'All countries not listed as primary or tertiary',
                            amount: 500,
                        },
                    ],
                    filled: false,
                },
                {
                    id: '9988bf45-3905-45c4-87aa-d2c61d8f3726',
                    startDate: new Date('2025-01-10').toJSON(),
                    endDate: new Date('2025-01-10').toJSON(),
                    classType: 'Virtual',
                    time: '9:00 - 17:00 GMT',
                    price: [
                        {
                            region: 'United Kingdom',
                            regionDescription: ['United Kingdom'],
                            amount: 550,
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
                            amount: 550,
                        },
                        {
                            region: 'Tertiary Market',
                            regionDescription: tertiaryMarket,
                            amount: 450,
                        },
                        {
                            region: 'Secondary Market',
                            regionDescription: 'All countries not listed as primary or tertiary',
                            amount: 500,
                        },
                    ],
                    filled: false,
                },
                {
                    id: '321fc48d-4456-4c95-93f2-f4332e7ec9f2',
                    startDate: new Date('2025-03-21').toJSON(),
                    endDate: new Date('2025-03-21').toJSON(),
                    classType: 'Virtual',
                    time: '9:00 - 17:00 GMT',
                    price: [
                        {
                            region: 'United Kingdom',
                            regionDescription: ['United Kingdom'],
                            amount: 550,
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
                            amount: 550,
                        },
                        {
                            region: 'Tertiary Market',
                            regionDescription: tertiaryMarket,
                            amount: 450,
                        },
                        {
                            region: 'Secondary Market',
                            regionDescription: 'All countries not listed as primary or tertiary',
                            amount: 500,
                        },
                    ],
                    filled: false,
                },
            ],
            isTraining: true,
        },
        {
            id: 6,
            title: 'Professional Agile Leadership - Essentials',
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
                        `Attendees are able to claim 14 PDU credits from the Project Management Institute (PMI) after attending this two-day course.`,
                    ],
                    links: [
                        {
                            label: 'Click here for more reasons to train with ValueHut Consulting',
                            url: 'https://www.valuehut.co/blog/a-case-for-agile-and-scrum-training-with-valuehut',
                        },
                    ],
                },
            ],
            streams: [
                {
                    id: '8260ce12-4aeb-4447-be0f-6c0ea888acc6',
                    startDate: new Date('2024-10-17').toJSON(),
                    endDate: new Date('2024-10-18').toJSON(),
                    time: '9:00 - 17:00 BST',
                    classType: 'Virtual',
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
            ],
            isTraining: true,
        },
        {
            id: 7,
            title: 'Professional Agile Leadership - Evidence Based Management',
            acronym: 'PAL-EBM',
            description: `Professional Agile Leadership - Evidence-Based Management is a 1-day workshop where participants become 
            familiar with the Evidence-Based Management framework and how to apply it to their work through hands-on, activity-based 
            learning.  The class activities help attendees learn techniques that help set and achieve strategic goals through 
            experimentation and adapting goals. Attendees also learn how to move away from measuring progress solely through team 
            performance metrics towards a focus on customer-centricity, improving customer outcomes.`,
            imageURL: '/images/fauxels.jpg',
            logo: 'pal-ebm.svg',
            iconBorder: 'https://static.scrum.org/web/tokens/token-psm-color.svg',
            articles: [
                {
                    title: 'Course Learning Objectives',
                    content: `The course objectives include:`,
                    contentList: [
                        `Understand goals and measures and an understanding of how they influence behaviours, culture and values`,
                        `Create Evidence-based Leadership as a management approach across the organisation`,
                        `Discover how goals and trust help promote an environment that enables autonomy, transparent and value delivery`,
                        `Correlate Product and Market leadership to experimentation and adaptation`,
                        `Understand how to use EBM and its Key Value Areas to derive a balanced set of metrics to improve the market value and organisation capabilities to deliver value`
                    ],
                },
                {
                    title: 'Who should attend?',
                    content: `The PAL-EBM is strongly recommended for anyone in a leadership role who is willing to explore ways of being an Evidence-based Leader.`,
                    contentList: [
                        `Leaders who are responsible for the success of product delivery and agile transformation programmes`,
                        `Leaders that seek a framework which help identify areas of improvement in their organisational capabilities for the delivery of value effectively`,
                        `Leaders that desire alternative measures to traditional and vanity measures e.g. the Use of Velocity`,
                        `Leaders that want to articulate strategic goals and measures in a manner that promotes self-management and helps connect the work of the team to the value delivered to the users of the product`,
                    ],
                },
                {
                    title: 'Assessment Certification',
                    content: `All participants will receive a password to attempt the will receive a password to attempt the PAL-EBM assessment.
                    PAL-EBM participants who attempt the associated assessment within 14 days of receiving their free password and do not score at 
                    least 85% will be granted a 2nd attempt at no additional cost.`,
                },
                {
                    title: 'More information',
                    content: ``,
                    contentList: [
                        `Mode of delivery is Virtual using Zoom`,
                        `The price for the class is dependent on your home address.`,
                        `Attendees are able to claim 7 PDU credits from the Project Management Institute (PMI) after attending this one-day course.`,
                    ],
                    links: [
                        {
                            label: 'Click here for more reasons to train with ValueHut Consulting',
                            url: 'https://www.valuehut.co/blog/a-case-for-agile-and-scrum-training-with-valuehut',
                        },
                    ],
                },
            ],
            streams: [
                {
                    id: 'f40719df-128e-401d-aa5f-7f239c9b5c01',
                    startDate: new Date('2024-11-15').toJSON(),
                    endDate: new Date('2024-11-15').toJSON(),
                    time: '9:00 - 17:00 East African Time',
                    classType: 'In Person - Nairobi, Kenya',
                    price: [
                        {
                            region: 'United Kingdom',
                            regionDescription: ['United Kingdom'],
                            amount: 800,
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
                            amount: 800,
                        },
                        {
                            region: 'Tertiary Market',
                            regionDescription: tertiaryMarket,
                            amount: 650,
                        },
                        {
                            region: 'Secondary Market',
                            regionDescription: 'All countries not listed as primary or tertiary',
                            amount: 700,
                        },
                    ],
                    filled: true,
                },
                {
                    id: '24950c2f-b9a0-47a5-8905-2113dcae8e53',
                    startDate: new Date('2025-01-31').toJSON(),
                    endDate: new Date('2025-01-31').toJSON(),
                    time: '9:00 - 17:00 GMT',
                    classType: 'Virtual',
                    price: [
                        {
                            region: 'United Kingdom',
                            regionDescription: ['United Kingdom'],
                            amount: 800,
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
                            amount: 800,
                        },
                        {
                            region: 'Tertiary Market',
                            regionDescription: tertiaryMarket,
                            amount: 650,
                        },
                        {
                            region: 'Secondary Market',
                            regionDescription: 'All countries not listed as primary or tertiary',
                            amount: 700,
                        },
                    ],
                    filled: false,
                },
            ],
            isTraining: true,
        },
        {
            id: 8,
            title: 'Applying Professional Scrum',
            acronym: 'APS',
            description: `The APS is a hands-on, activity-based course in which students experience how Professional Scrum and the Scrum framework 
                        improves their capacity to deliver value compared to traditional methods. Scrum enables a better way of working that highlights 
                        the use of experimentation, incremental delivery of customer value, frequent feedback loops and the fostering of strong team 
                        dynamics. The course is highly recommended for teams that already work together in an organisation to improve their ways of working 
                        using Scrum. The class is delivered over a two days (8hrs per day).`,
            imageURL: '/images/morillo.jpg',
            logo: 'aps.svg',
            iconBorder: 'https://static.scrum.org/web/tokens/token-psm-color.svg',
            articles: [
                {
                    title: 'Course Learning Objectives',
                    content: `The course objectives include:`,
                    contentList: [
                        `Learn about Agility and how Scrum differs from traditional plan-driven work models`,
                        `Develop an Agile mindset by focusing on professionalism, experimentation, and outcomes`,
                        `Learn (or relearn) the fundamentals of Scrum and how to apply them correctly`,
                        `Develop an understanding of what it is like to use Scrum and if it is right for your team`,
                        `Learn how to be a great Scrum Team member, or how to support a great Scrum Team`,
                        `Leave the class with ways to identify common pitfalls and how to avoid them`,
                        `Students use a set of proven practices throughout the class that can be used to enhance their application of Scrum`,
                        `Leave with tools that help Identify first steps in applying Professional Scrum with your team`,
                    ],
                },
                {
                    title: 'Who should attend?',
                    content: ``,
                    contentList: [
                        `Professionals that are interested in starting a career as a Scrum Master`,
                        `Professionals that is seeking to improve their use of Scrum`,
                        `Entire Teams that would like to refresh their knowledge of Scrum`,
                        `Anyone that would explore the use of Scrum in product development`,
                    ],
                },
                {
                    title: 'Assessment Certification',
                    content: `All participants will receive a password to attempt the Professional Scrum Master I (PSM I) assessment. 
                    PSM class participants who attempt the PSM I assessment within 14 days of receiving their free password and 
                    do not score at least 85% will be granted a 2nd attempt at no additional cost.`,
                },
                {
                    title: 'More information',
                    content: ``,
                    contentList: [
                        `Mode of delivery is either  Virtual using Zoom or In-Person`,
                        `The price for the class is dependent on your home address.`,
                        `Attendees are able to claim 14 PDU credits from the Project Management Institute (PMI) after attending this two-day course.`,
                        `If you would like a private class for your organisation, send us an email - info@valuehut.co`,
                    ],
                    links: [
                        {
                            label: 'Click here for more reasons to train with ValueHut Consulting',
                            url: 'https://www.valuehut.co/blog/a-case-for-agile-and-scrum-training-with-valuehut',
                        },
                    ],
                },
            ],
            streams: [],
            isTraining: true,
        },
        {
            id: 9,
            title: 'Applying Professional Scrum for Software Development',
            acronym: 'APS-SD',
            description: `The APS is a hands-on course where attendees experience the practices required to deliver quality software products using Scrum with
                        Agile and DevOps practices. Attendees work in Scrum Teams over three (3) to four (4) creating a software product to learn Scrum while 
                        using the Scrum Framework. Packaged with the course is a free attempt at the gloablly recognised Professional Scrum Developer I certification
                        assessment (PSD I).
                        
                        The course is highly recommended for Software Teams that already work together in an organisation to improve their ways of working 
                        using Scrum. The class is delivered over three (3) days (8hrs per day) offering attendees a real-world view of building software with scrum`,
            imageURL: '/images/morillo.jpg',
            logo: 'apssd.svg',
            iconBorder: 'https://static.scrum.org/web/tokens/token-psm-color.svg',
            articles: [
                {
                    title: 'Course Learning Objectives',
                    content: `The course objectives include:`,
                    contentList: [
                        `Experience true collaboration between Development, Product Owner and the Scrum Master in the process of building and delivery a high quality and valuable product`,
                        `Teach developers how to apply modern Agile enginerring practices and Devops tools to the process of building and delivering working software`,
                        `Learn and practice the synergy between the elements of the Scrum Framework and complimentary practices`,
                        `Be introduced to and exprience practices such as Pair Programming, Test Driven Development, Agile Testing, DevOps, Managing Technical Debt and more.`,
                    ],
                },
                {
                    title: 'Who should attend?',
                    content: ``,
                    contentList: [
                        `Members of a Product Team involved in delivering and developing Software including architects, programmers, database developers, testers, managers, Operations 
                        and others including Scrum Masters and Product Owners`,
                        `Managers with a Technical/Programming background that want to experience 3days in the life of a Software Developer working within a Scrum Team`,
                        `Entire Scrum/Product Teams that would like to learn how to improve the quality of their product`,
                    ],
                },
                {
                    title: 'Assessment Certification',
                    content: `All participants will receive a password to attempt the Professional Scrum Developer (PSD) assessment. 
                    APS-SD class attendees who attempt the PSD I assessment within 14 days of receiving their free password and 
                    do not score at least 85% will be granted a 2nd attempt at no additional cost.`,
                },
                {
                    title: 'More information',
                    content: ``,
                    contentList: [
                        `Mode of delivery is either  Virtual using Zoom or In-Person`,
                        `The price for the class is dependent on your home address.`,
                        `If you would like a private class for your organisation, send us an email - info@valuehut.co`,
                    ],
                    links: [
                        {
                            label: 'Click here for more reasons to train with ValueHut Consulting',
                            url: 'https://www.valuehut.co/blog/a-case-for-agile-and-scrum-training-with-valuehut',
                        },
                    ],
                },
            ],
            streams: [
                {
                    id: '9050cf99-9e20-4ca6-ac51-ace2fda8f776',
                    startDate: new Date('2024-09-02').toJSON(),
                    endDate: new Date('2024-09-04').toJSON(),
                    time: '9:00 - 17:00 BST',
                    classType: 'Virtual',
                    price: [
                        {
                            region: 'United Kingdom',
                            regionDescription: ['United Kingdom'],
                            amount: 1450,
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
                            amount: 1450,
                        },
                        {
                            region: 'Tertiary Market',
                            regionDescription: tertiaryMarket,
                            amount: 1200,
                        },
                        {
                            region: 'Secondary Market',
                            regionDescription: 'All countries not listed as primary or tertiary',
                            amount: 1300,
                        },
                    ],
                    filled: true,
                },
                {
                    id: 'e605056c-31cb-43aa-9db9-c8dd74870ef4',
                    startDate: new Date('2024-12-18').toJSON(),
                    endDate: new Date('2024-12-20').toJSON(),
                    time: '9:00 - 17:00 GMT',
                    classType: 'Virtual',
                    price: [
                        {
                            region: 'United Kingdom',
                            regionDescription: ['United Kingdom'],
                            amount: 1450,
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
                            amount: 1450,
                        },
                        {
                            region: 'Tertiary Market',
                            regionDescription: tertiaryMarket,
                            amount: 1200,
                        },
                        {
                            region: 'Secondary Market',
                            regionDescription: 'All countries not listed as primary or tertiary',
                            amount: 1300,
                        },
                    ],
                    filled: false,
                },
            ],
            isTraining: true,
        },
    ],
}

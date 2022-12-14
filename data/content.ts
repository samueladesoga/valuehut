import { IPostType } from '../pages/blog';

export interface ArticleTypes {
    imageURL: string;
    header: string;
    description: string;
}

export interface ContactDataTypes {
    region: string;
    address: string;
    email: string;
    phone: string | number;
}

export interface IntrodutionTypes {
    [key: string]: ArticleTypes;
}

export interface WhatWeDoTypes {
    introdution: ArticleTypes[];
}

export interface PreviousClientsTypes {
    name: string;
    imageURL: string;
}

interface widescreenBannerTypes {
    slogan: string[];
}

export interface HomepageTypes {
    widescreenBanner: widescreenBannerTypes;
    headerArticle: any;
    servicesArticle: any;
    whatCustomersWant: any;
    whatWeDo: any;
    previousClients: PreviousClientsTypes[];
    services: any;
    posts?: IPostType[];
}

export interface SocialNetworksTypes {
    linkedIn?: string;
    twitter?: string;
}

export interface TrainerTypes {
    name: string;
    avatar: string;
    about: string;
    socialNetworks?: SocialNetworksTypes;
}

export interface PagesInterface {
    home: any;
    whatWeDo: WhatWeDoTypes;
    about: any;
    contact: [howto: string, offices: ContactDataTypes[]];
}

export const content = {
    pages: {
        home: {
            widescreenBanner: {
                slogan: [`Exploring better`, `ways of working`],
            },
            headerArticle: {
                imageURL: 'business.jpg',
                header: 'ValueHut Limited',
                description: `ValueHut is an agile coaching and training consultancy that is helping 
                Organisations transform into a network of interdependent teams across different business units.
                We work with Leaders and the teams as everyone has got a part to play in the process
                of transformation. Our coaches work with the teams to improve their cross-functional and self-managing capabilities.
                In addition, we train, coach and support Leaders to build the capabilities required to create the required
                work environment for these teams to succeed.`,
            },
            servicesArticle: {
                header: 'Services',
            },
            whatCustomersWant: {
                imageURL: 'rodolfo.jpg',
                header: 'Our mission',
                descriptionList: [
                    `We are supporting organizations to build a safer workplace, where employees are able to 
                    bring their authentic selves to solve complex problems; a workplace where managers and leaders
                    are true servant-leaders that truly care about the team and the work that they do. Ultimately, the culture
                    that we co-create with you for your organisations places your organisation in the the best position to 
                    delight your customers as you continue to deliver valuable products and services.`,
                ],
            },
            whatWeDo: {
                imageURL: 'mentatdgt.jpg',
                header: 'What we do',
                description: `Embarking on a journey to build agility into the DNA of an 
                organisation could be daunting one. We partner with you, leveraging our 
                experiences with proven Agile Frameworks to co-create alternate ways of working
                with clear outcomes aligned with enabling the organisation to continue to 
                deliver valuable products.`,
            },
            previousClients: [
                {
                    name: 'MTN',
                    imageURL: 'mtn.jpg',
                },
                {
                    name: 'Barclays',
                    imageURL: 'barclays.jpg',
                },
                {
                    name: 'HSBC',
                    imageURL: 'hsbc.jpg',
                },
                {
                    name: 'BP',
                    imageURL: 'bp.jpg',
                },
                {
                    name: 'Government',
                    imageURL: 'ministry-of-justice.jpg',
                },
                {
                    name: 'UBS',
                    imageURL: 'ubs.jpg',
                },
                {
                    name: 'Channel4',
                    imageURL: 'channel4.jpg',
                },
                {
                    name: 'BBC Worldwide',
                    imageURL: 'bbc-worldwide.jpg',
                },
            ],
        },
        whatWeDo: {
            introdution: [
                {
                    imageURL: '/images/mentatdgt.jpg',
                    header: 'Coaching',
                    description: `The desire to build Organisation agility capabilities is by no means an easy journey, rather it is a complex journey of Learning and Unlearning 
                                that involves executives, mid-level manager and the teams across the organisation. Our Agile Coaches help define the 'Why' for Agility and work 
                                with your people to co-create experiments using established Agile Principles, Practices and Frameworks. 

                                Our team - Agile Coaches, Scrum Master and Agile Trainers support the Leadership Team as well as the Execution teams across the organisation.
                                We also help define context specific measures of success across entire Organisation.
                                `,
                },
                {
                    imageURL: '/images/mikael.jpg',
                    header: 'Training',
                    description: `Our <a class="link" href="https://www.valuehut.co/services/training">training courses</a> have been carefully designed to provide individuals and teams with skills
                    that help kickstart the journey to better ways of working. These classes are structured to be engaging, 
                    interactive and laced with loads of real life case studies; including the experiences of our trainers.

                    Our lead trainer is the first Professional Scrum Trainer in Nigeria and we offer a number of bespoke Agile classes
                    that are packaged based on your organisational needs. You can book for any of our live or virtual public classes on our training page;
                    and you can contact us for bespoke or private classes.`,
                },
                {
                    imageURL: '/images/cameron.jpg',
                    header: 'Consulting',
                    description: `Established product delivery teams often face challenges related to adoption of Agile Practices such as Test Automation, Continuous Delivery, 
                    Product Backlog Management, Behaviour Driven Development and many more. Our team of Agile Consultants help your Organisation build internal capabilities with 
                    Agile practices whilst helping you deliver on agreed initiatves, products or project. 
                    `,
                },
            ],
        },
        about: {
            trainers: [
                {
                    name: 'Samuel Adesoga',
                    avatar: 'avatar.jpeg',
                    about: `
                    Sam is our Principal Coach and Lead Trainer at ValueHut; He is a dynamic Agile practitioner and Professional Scrum Trainer with Scrum.org.
                    Sam is interested in helping people, teams and entire organisation develop the Agile mindset required by businesses to remain ahead of competition 
                    despite VUCA market environments.
                    `,
                    socialNetworks: {
                        twitter: 'sadesoga',
                        linkedIn: 'samueladesoga',
                    },
                },
            ],
        },

        contact: {
            howto: `If you will like to talk to one of our agile coaches to discuss your Organisational needs,
            please fill out the form below and one of us will contact you within 24hrs. Alternatively, contact us by email or
            phone number listed below.`,
            offices: [
                {
                    region: 'UK',
                    email: 'info@valuehut.co',
                    phone: '+44(0)7946713054',
                    address: 'North Westgate House,Harlow CM20 1YS',
                },
                {
                    region: 'Nigeria',
                    email: 'info@valuehut.co',
                    phone: '+234(0)8181935501',
                    address: '44, Community Road Off Bamishile Street off Allen Avenue, Ikeja, Lagos, Nigeria',
                },
            ],
        },
    },
};

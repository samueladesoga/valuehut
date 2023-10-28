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

export interface introductionTypes {
    [key: string]: ArticleTypes;
}

export interface WhatWeDoTypes {
    introduction: ArticleTypes[];
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
    blog?: string;
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
                slogan: [`Co-creating better ways of working and leading.`, ``],
            },
            headerArticle: {
                imageURL: 'network.png',
                header: 'ValueHut Limited',
                description: `ValueHut is an agile coaching and training consultancy that is helping 
                Organisations transform into a network of interdependent teams across different business units.
                The desire for transformation is driven by a need to respond to changing customer needs  and capabities 
                to continually deliver product that delight users. We partner with Leaders and support the teams as everyone 
                has a part to play in the transformation process. Our coaches work with the teams to improve their cross-functional 
                and self-managing capabilities. Leaders are supported and coached to develop the capabilities required to create enabling
                work environments for teams to succeed.`,
            },
            servicesArticle: {
                header: 'Services',
            },
            whatCustomersWant: {
                imageURL: 'happy.jpg',
                header: 'Our mission',
                descriptionList: [
                    `We support organizations to build a safer workplace where employees are able to 
                    bring their authentic selves to solve complex problems; a workplace where managers and leaders
                    are true servant-leaders that truly care about the team and the work that they do. The culture and mindset
                    that we co-create with you for your organisation provide your people the capabilities to ensure that they are able
                    to deliver valuable products and services to your customers sustainably.`,
                ],
            },
            whatWeDo: {
                imageURL: 'coaching-1.png',
                header: 'What we do',
                description: `Embarking on a journey to build agility into the DNA of an 
                organisation could be daunting; for this reason we partner with you, leveraging our 
                experiences with proven Agile Frameworks to co-create better ways of working. The outcomes that we 
                deliver enables our clients to deliver better, safer and valuable products and services.`,
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
                {
                    name: 'Fidelity Bank',
                    imageURL: 'fidelity-bank.svg',
                },
            ],
        },
        whatWeDo: {
            introduction: [
                {
                    imageURL: '/images/coaching-1.png',
                    header: 'Coaching',
                    description: `Developing Organisation agility capabilities is a complex journey of Learning and Unlearning that involves executives, mid-level managers, and the teams across 
                                the organisation. Organisation Agility is a necessity due to increasingly pressure to adapt to changing customer's needs and reduce the time to market 
                                at the same time. Our Agile Coaches support the organisation to define the business outcomes for agility and subsequently co-create initiatives to deliver these outcomes 
                                across the entire organisation. 

                                Our team of Agile Coaches, Scrum Masters and Agile Trainers provide support for the Leadership Team and the teams across the organisation. We measure the success 
                                using context specific <a class="link" href="https://www.valuehut.co/blog/unlocking-organisational-agility-key-product-metrics-every-business-leader">agile metrics</a> built on the outcomes created within our coaching engagement.
                                `,
                },
                {
                    imageURL: '/images/training.jpg',
                    header: 'Training',
                    description: `Our <a class="link" href="/services/training/schedule">training courses</a> have been carefully designed to provide individuals and teams with skills
                    that help kickstart the journey to better ways of working. These classes are structured to be engaging, 
                    interactive and laced with loads of real life case studies; including the experiences of our trainers.

                    Our lead trainer is the first Professional Scrum Trainer in Nigeria and we offer a number of bespoke Agile classes
                    that are packaged based on your organisational needs. You can book for any of our live or virtual public classes from our training page;
                    and you can <a class="link" href="https://www.valuehut.co/contact">contact us</a> for bespoke or private classes.`,
                },
                {
                    imageURL: '/images/consulting.jpg',
                    header: 'Consulting',
                    description: `Established product delivery teams often face challenges related to adoption of Agile Practices such as Test Automation, Continuous Delivery, 
                    Product Backlog Management, Behaviour Driven Development and many more. Our team of Agile Consultants help your Organisation build internal capabilities with 
                    Agile practices whilst helping you deliver on agreed initiatives, products or project. 
                    `,
                },
            ],
        },
        about: {
            trainers: [
                {
                    name: 'Samuel Adesoga',
                    avatar: 'sam_avatar.jpeg',
                    about: `
                    Sam is our Principal Coach and Lead Trainer at ValueHut; He is an agnostic Enterprise Agile Coach and Practitioner, a Professional Scrum Trainer with Scrum.org.
                    In the last 20years, Sam has supported individuals, teams and Organisations to deliver value using Agile Frameworks and Practices; ultimately developing the 
                    mindset required to thrive in  Volatile, Uncertain, Complex and Ambiguous (VUCA) business environment.
                    `,
                    socialNetworks: {
                        twitter: 'sadesoga',
                        linkedIn: 'samueladesoga',
                        blog: 'samadesoga.me'
                    },
                },
                {
                    name: 'Temitope Awere',
                    avatar: 'temi_avatar.jpg',
                    about: `
                    Temitope is a Partner Coach and Trainer at ValueHut; Temi is an experienced Lean-Agile Practitioner, Accredited Kanban Trainer, ICAgile Instructor Agile Coach, 
                    Professional Scrum Master, Agile Project Manager,  SAFe Program consultant and Kanban Management Professional with over 10 years’ experience empowering 
                    and coaching development teams and organizations in the adoption agile principles and improving the flow of customer value through scalable, maintainable 
                    software solutions.
                    `,
                    socialNetworks: {
                        twitter: 'agile_matrix',
                        linkedIn: 'temitope-awere-554194118',
                        blog: 'agilematrix.org/blog1/'
                    },
                },
                {
                    name: 'Deborah Okiogbero',
                    avatar: 'debbie_avatar.jpg',
                    about: `
                   Debbie is our Executive Assistant with a knack for problem solving. She is highly organized and demonstrates excellent communication skills. Her resourcefulness 
                   and efficiency while managing course schedules for both our private and public sector clients is impressive. She also takes responsibility acting as Key Account 
                   Manager and her customers relationship management has positively impacted all stakeholders.
                    `,
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

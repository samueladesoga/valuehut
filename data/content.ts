import { IPostType } from "../pages/blog"

export interface ArticleTypes {
    imageURL: string,
    header: string,
    description: string
}

export interface ContactDataTypes {
    region: string,
    address: string,
    email: string,
    phone: string | number
}

export interface IntrodutionTypes {
    [key: string]: ArticleTypes
}

export interface WhatWeDoTypes {
    introdution: ArticleTypes[]
}

export interface PreviousClientsTypes {
    name: string,
    imageURL: string
}

interface widescreenBannerTypes {
    slogan: string[]
}

export interface HomepageTypes {
    widescreenBanner: widescreenBannerTypes,
    headerArticle: any,
    servicesArticle: any,
    whatCustomersWant: any,
    whatWeDo: any,
    previousClients: PreviousClientsTypes[],
    services: any;
    posts: IPostType[]
}

export interface SocialNetworksTypes {
    linkedIn?: string,
    twitter?: string
}

export interface TrainerTypes {
    name: string,
    avatar: string,
    about: string,
    socialNetworks?: SocialNetworksTypes
}

export interface PagesInterface {
    home: any,
    whatWeDo: WhatWeDoTypes,
    about: any,
    contact: [howto: string, offices: ContactDataTypes[]]
}

export const content = {
    pages: {
        home: {
            widescreenBanner: {
                slogan: [`Exploring better`, `ways of working`]
            },
            headerArticle: {
                imageURL: "business.jpg",
                header: "ValueHut Limited",
                description: `ValueHut is an agile coaching and training consultancy that is helping 
                Organisations focus on most valuable work by aligning their strategy to execution across all 
                units of the business; we have supported our clients  to build a mindset that enables them to  
                build the capabilities to continuouslly delight their customers. 
                In addition, these organisation have developed the skills to make work a safe place where 
                employees are motivated to deliver value to their customers.`
            },
            servicesArticle: {
                header: "Services"
            },
            whatCustomersWant: {
                imageURL: "rodolfo.jpg",
                header: "Our mission",
                descriptionList: [
                    `Helping entire organizations to focus on most valuable work.`,
                    `Supporting organizations to make the work a safer place where people are able to bring their authentic selves to solve complex problems.`,
                    `Building a mindset that enables you to continue delight your customers by delivering valuable products.`
                ]
            },
            whatWeDo: {
                imageURL: "mentatdgt.jpg",
                header: "What we do",
                description: `Embarking on a journey to build agility into the DNA of an 
                organisation could be daunting one. We partner with you, leveraging our 
                experiences with proven Agile Frameworks to co-create alternate ways of working
                with clear outcomes aligned with enabling the organisation to continue to 
                deliver valuable products.`
            },
            previousClients: [
                {
                    name: "MTN",
                    imageURL: "mtn.jpg"
                }, 
                {
                    name: "Barclays",
                    imageURL: "barclays.jpg"
                }, {
                    name: "HSBC",
                    imageURL: "hsbc.jpg"
                }, {
                    name: "BP",
                    imageURL: "bp.jpg"
                }, {
                    name: "Government",
                    imageURL: "ministry-of-justice.jpg"
                }, {
                    name: "UBS",
                    imageURL: "ubs.jpg"
                }, {
                    name: "Channel4",
                    imageURL: "channel4.jpg"
                }, {
                    name: "BBC Worldwide",
                    imageURL: "bbc-worldwide.jpg"
                }
            ]
        },
        whatWeDo: {
            introdution: [
                {
                    imageURL: "mentatdgt.jpg",
                    header: "Coaching",
                    description: `Recent Research indicates that a lot of companies have 
                                embarked on some form of Agile Transformation in the 
                                last 10 years, however only a small proportion of these 
                                companies have realised the value promises by Agile 
                                Transformation. This realisation is not an issue with Agile 
                                but to a large extent a lack of understanding of the Agile 
                                Frameworks being adopted and the underlying Agile 
                                Principles.`
                }, 
                {
                    imageURL: "mikael.jpg",
                    header: "Training",
                    description: `Our training courses have been carefully designed to provide individuals and teams with skills
                    that help kickstart the journey to better ways of working. These classes are structured to be engaging, 
                    interactive and laced with loads of real life case studies; including the experiences of our trainers.

                    Our lead trainer is the first Professional Scrum Trainer in Nigeria and we offer a number of bespoke Agile classes
                    that are packaged based on your organisational needs. You can book for any of our live or virtual public classes on our training page;
                    and you can contact us for bespoke or private classes.`
                },
                {
                    imageURL: "cameron.jpg",
                    header: "Consulting",
                    description: `In situations where the Organisation has made a decision 
                    on the Agile Framework that should be adopted by the Product Teams, a 
                    Scrum Master from ValueHut would help improve the understandinging of 
                    Scrum or Kanban. In addtion, the Scrum Master would help improve the use 
                    of the Agile Framework by teaching Supplimentary practices that extend the 
                    benefit of using such Frameworks.`
                }
            ]
        },
        about: {
            trainers: [
                {
                    name: "Samuel Adesoga",
                    avatar: "avatar.jpeg",
                    about: `
                    Sam is our Principal Coach and Lead Trainer at ValueHut; He is a dynamic Agile practitioner and Professional Scrum Trainer with Scrum.org
                    Sam is interested in helping people to develop the Agile mindset that is required by business to remain competitive.
                    `,
                    socialNetworks: {
                        twitter: "sadesoga",
                        linkedIn: "samueladesoga"
                    }
                }
            ]
        },
        contact: {
            howto: 'If you’re considering using the services provided by ValueHut, please phone or email us your query with as much detail as possible. Upon receiving your email, we will either call or email you – within 24 hours of your email being sent – to discuss the services further and initiate the next step.',
            offices: [
                {
                    region: "UK",
                    email: "info@valuehut.co",
                    phone: '+44(0)7946713054',
                    address: 'North Westgate House,Harlow CM20 1YS'
                },
                {
                    region: "Nigeria",
                    email: 'info@valuehut.co',
                    phone: '+234(0)818193501',
                    address: '58, Opebi Road, Lagos, Nigeria'
                }
            ]
        }
    }
}
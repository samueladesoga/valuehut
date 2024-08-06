// Here you can add the new consulting.
// Use Interface below as a template to add right fields
// when you will create a new consulting

export interface ConsultingArticleTypes {
    title?: string;
    content: string;
    contentList?: string[];
    imageURL?: string;
    textAlign?: string;
    imagePosition?: string;
    link?: {
        url: string;
        label: string;
    };
}

export interface ConsultingTypes {
    title: string;
    acronym?: string;
    description?: string;
    imageURL: string;
    articles: ConsultingArticleTypes[];
}

export interface ConsultingObject {
    consulting: ConsultingTypes;
}

export const consulting: ConsultingObject = {
    consulting: {
        title: 'Agile Consulting',
        description: ``,
        imageURL: '/images/consulting.jpg',
        articles: [
            {
                title: 'Product Management',
                content: `Product Management is a set of practices that helps organisations turn ideas into great products; extract revenue from these products and eventually retire these products.
                These practices also ensure that products that do not scale, fail very quickly and efforts are made to pivot or kill these products outrightly. There is inherently a lot of waste in
                organisations by continually investing in products that do not contribute towards the organisation strategy and adopting some of these product management practices help create a connection
                between the organisational strategy and execution within product teams.
                Our consultants will help you with:`,
                contentList: [
                    `Creation of product goals for products in your organisation using OKR Framework`,
                    `Design a product framework for effective collaboration with multiple stakeholders across the organisation`,        
                    `Metrics that help the product teams show progress toward the defined product goals`,
                    `Embracing an empirical process approach towards Product Management`,
                    `Defining practices for ordering product backlog items in the product backlog`, 
                ],
            },
            {
                title: 'Continuous Delivery',
                content: `A central theme to application delivery is enabling teams to build better products faster. 
                Continuous Integration and Continuous Delivery are practices that enables the product teams gather feedback in near real time as the product is being built.
                Continuous Delivery is a set of practices that provide to the capabilities required to build, test, package and deploy application code into an environment. Information such
                as quality of the product and measures of technical debt are collected; and presented in formats that are easy to understand for entire product teams. 
                Our consultants have implemented and supported many organisations with their Continuous Delivery Implementation. Our typical process would involve:`,
                contentList: [
                    `An evaluation of the current state including tools / technology being used`,
                    `Design a strategy for Continuous Delivery including covering any gaps in automated checks`,
                    `Tools selection for Continuous Delivery`,
                    `Coach Product team on Agile Testing Mindset and practices`,
                    `Post Implementation support`,
                ],
                // link: {
                //     label: 'This is a test link',
                //     url: 'https://google.com',
                // },
            },
            {
                title: 'Test Automation',
                content: `Organisation that care about faster delivery, lowering time-to-market and improving the overall quality of their product have to invest into automated
                testing capabilities. Our consultants and coaches have helped many organisation eliminate extended manual tests as part of their product delivery cycles.
                Every form of testing can be automated from Functional Tests, Unit Tests, Performance Tests and additional Non-Functional Tests using matured tools and integrating these
                tests into the continuous delivery pipelines. At ValueHut Consulting, our people are able to: `,
                contentList: [
                    `Train your product teams on approaches to Software Testing`,
                    `Augment your product teams with our people; we work along side your product team improving the quality of the product`,
                    `Implement a thorough automated test suite for existing or new products`,
                    `Design a Test Automation strategy for products across your organisation`,
                ],
                // link: {
                //     label: 'This is a test link',
                //     url: 'https://google.com',
                // },
            },
            {
                title: 'Agile Fundamentals Training',
                content: `Our consultants are able to teach and mentor your teams as you adopt any of the Agile Frameworks such as Scrum.
                We help your teams improve on the use of Frameworks such as Scrum and Kanban by introducing complimentary practices.
                Some of the complimentary practices that we support your teams with are listed below.
                `,
                contentList: [
                    `Agile Principles`,
                    `Roles within an Agile Product Team`,
                    `Estimation Techniques`,
                    `Product Backlog Management Techniques`,
                    `User Stories & Vertical Slicing of Stories`,
                ],
                imageURL: '/images/fundamentalTraining.jpg',
            },
        ],
    },
};

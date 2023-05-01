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
        imageURL: '/images/mikael.jpg',
        articles: [
            {
                title: 'Continuous Integration / Continous Delivery',
                content: `A central theme to application delivery is the enabling teams to build better products faster. 
                Continuous Integration and Continuous Delivery are practices that enabled the product teams collect feedback in near real time.
                CI / CD is underpinned by making information Transparent and automating collection of metrics the product.
                Our consultants have implemented and supported many organisations with their CI/CD Implementation. Our typical process would involve:`,
                contentList: [
                    `An evaluation of the current state including tools / technology being used`,
                    `Design a strategy for CI/CD including covering any gaps in automated checks`,
                    `Tools selection for CI/CD`,
                    `Coach Product team on Agile Testing Mindset and practices`,
                    `Post Implementation support`,
                ],
                // link: {
                //     label: 'This is a test link',
                //     url: 'https://google.com',
                // },
            },
            {
                title: 'Behaviour Driven Development',
                content: `Behaviour Driven Development is an Agile Development practise that fosters collaboration between 
                the Business and the Development teams. It encourages communication based on the expected behaviour of the 
                product to be implmented and subsequently enables the team to capture requirements as specification which 
                can then be automated by the Development Team.`,
            },
            {
                title: 'Agile Fundamentals',
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
                imageURL: '/images/cameron.jpg',
            },
        ],
    },
};

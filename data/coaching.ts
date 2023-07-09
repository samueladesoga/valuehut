// Here you can add the new coaching.
// Use Interface below as a template to add right fields
// when you will create a new coaching

export interface CoachingArticleTypes {
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

export interface CoachingTypes {
    title: string;
    acronym?: string;
    description?: string;
    imageURL: string;
    articles: CoachingArticleTypes[];
}

interface CoachingObject {
    coaching: CoachingTypes;
}

export const coaching: CoachingObject = {
    coaching: {
        title: 'Agile Coaching',
        description: ``,
        imageURL: './cameron.jpg',
        articles: [
            // {
            //     title: 'New Arcticle for test',
            //     content:
            //         'content for test you can click <a class="link" href="https://google.com">here</a> it will take u to google.',
            //     contentList: [
            //         `Resistance at <a class="link" href="https://twitter.com">Click here to go to twitter</a>`,
            //         `Organisational structure & culture that is not optimised for Agility.`,
            //         `Disjointed perceptions of the current and the future state for the Organisation across the Organisation.`,
            //     ],
            // },
            {
                title: 'Enterprise Coaching',
                content: `Efforts to embark on Agility at the team level especially when it doesn’t involve the whole organisation 
                could be an uphill battle; we advise our clients that in other to deliver sustainable and long-lasting change, 
                agility should be introduced using a “whole organisation” approach to agility. This approach however comes with it 
                own sets of challenges which might be familiar to you.`,
                contentList: [
                    `Resistance at different levels within the organisation.`,
                    `Organisational structure & culture that is not optimised for Agility.`,
                    `Disjointed perceptions of the current and the future state for the Organisation across the Organisation.`,
                ],
            },
            {
                title: 'Team Coaching',
                content: `Far too many teams go through the mechanics of "Doing Agile" and very quickly realise that nothing has changed.
                Our Agile Coaches help your teams articulate the outcomes desired from the team's intention to adopt agile ways of working.
                These outcomes guide our engagement with your teams and based on our extensive experience with supporting product delivery teams, 
                our agile coaches co-create experiments for improving the teams agility and using appropriate agility metrics kick off a process of continuous
                improvement within the teams.

                Our mission is to help every individual and team embody the agile mindset that enables these teams to become effective at 
                delivering better products faster. Our preferred ways of working for teams is inspired by the Scrum Framework and the Kanban methodology; these 
                frameworks help teams improve their self-management abilities which set up the teams to be able to deal with deliver frequently and faster
                despite complex business domain.`,
            },
        ],
    },
};

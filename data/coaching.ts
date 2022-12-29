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
                content: `Far too many products delivery teams are “Doing Agile” rather than “Being Agile”, 
                this means that the “Agile Rituals” are being done but Agile doesn’t seem to be delivering 
                on it’s promise. The Principles of Agile are very simple but take a long time to be consistent 
                in its application to every aspect of Delivery. Our Agile coaches apply their extensive knowledge 
                of Agile principles and framework to guide struggling individual and teams.

                Our mission is to unlock the potentials in every individual and team so that they can continue 
                to deliver better products faster. Our Agile coaches engage with your team in a number of roles 
                as Agile Coaches, Scrum Master and sometime as Delivery Managers; the mission remains the same 
                regardless of the role that is being filled with one of our coaches.`,
            },
        ],
    },
};

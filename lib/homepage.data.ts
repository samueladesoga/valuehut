import { content, IntrodutionTypes, HomepageTypes } from '../data/content';

const { widescreenBanner, headerArticle, servicesArticle, whatCustomersWant, whatWeDo, previousClients } = {
    ...content.pages.home,
};

const services = content.pages.whatWeDo.introdution;

export default function homepageProps(): HomepageTypes {
    return {
        widescreenBanner,
        headerArticle,
        servicesArticle,
        whatCustomersWant,
        whatWeDo,
        previousClients,
        services: services,
    };
}

import React from 'react'
import homepageStyles from './homepage.module.scss'
import { HomepageTypes } from '../../data/content'

import WidescreenBanner from '../../components/widescreen-banner/widescreen-banner.component'
import MainArticle from '../../components/main-article/main-article.component'
import HeaderWithButton from '../../components/header-with-button/header-with-button.component'
import TripleBox from '../../components/triple-box/triple-box.component'
import ServiceBox from '../../components/service-box/service-box.component'
import PreviousClients from '../../components/previous-clients/previous-clients.component'
import { IPostType } from '../../pages/blog'
import TheBlog from '../../components/the-blog'

const Homepage: React.FC<HomepageTypes> = ({
    widescreenBanner,
    headerArticle,
    servicesArticle,
    whatCustomersWant,
    whatWeDo,
    previousClients,
    services,
    posts,
}) => {
    const articleTextAlign = {
        textAlign: 'left',
    }

    const valuehut_limited = posts?.filter((post: IPostType) => post.slug === 'valuehut-limited')[0]
    const our_mission = posts?.filter((post: IPostType) => post.slug === 'our-mission')[0]
    const what_we_do = posts?.filter((post: IPostType) => post.slug === 'what-we-do')[0]

    return (
        <>
            <WidescreenBanner slogan={widescreenBanner.slogan} />
            <div className={`page ${homepageStyles.homepage}`}>
                <MainArticle
                    imageURL={valuehut_limited?.cover.url || 'images/' + headerArticle.imageURL}
                    header={valuehut_limited?.title || headerArticle.header}
                    description={valuehut_limited?.description || headerArticle.description}
                    style={articleTextAlign}
                    slug={valuehut_limited?.slug || undefined}
                />

                <MainArticle
                    imageURL={our_mission?.cover.url || 'images/' + whatCustomersWant.imageURL}
                    header={our_mission?.title || whatCustomersWant.header}
                    description={our_mission?.description || whatCustomersWant.descriptionList}
                    style={articleTextAlign}
                    slug={our_mission?.slug || undefined}
                />

                <MainArticle
                    imageURL={what_we_do?.cover.url || 'images/' + whatWeDo.imageURL}
                    header={what_we_do?.title || whatWeDo.header}
                    description={what_we_do?.description || whatWeDo.description}
                    style={articleTextAlign}
                    slug={what_we_do?.slug || undefined}
                />
                <HeaderWithButton header={servicesArticle.header} link="View all" href="services" />
                <TripleBox>
                    {services.map((service: any, i: number) => {
                        return (
                            i < 3 && (
                                <ServiceBox
                                    {...service}
                                    url={`/services/${service.header.toLowerCase()}`}
                                    key={`service-${service.header}`}
                                />
                            )
                        )
                    })}
                </TripleBox>
                <PreviousClients previousClients={previousClients} />
                <TheBlog posts={posts?.filter((post: IPostType) => post.showInHomePage).slice(0, 4) as IPostType[]} />
            </div>
        </>
    )
}

export default Homepage

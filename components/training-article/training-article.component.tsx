import React from 'react'
import taStyles from './training-article.module.scss'
import Link from 'next/link'

interface TrainingArticleProps {
    title?: string
    content?: string
    contentList?: string[]
    links?: {
        url: string
        label: string
    }[]
    children?: any
}

const TrainingArticle: React.FC<TrainingArticleProps> = ({ title, content, contentList, links, children }) => {
    return (
        <section className={`${taStyles.training__article}`}>
            <article>
                {title && <h2 className={`${taStyles.training__article__section__header}`}>{title}</h2>}
                <div>
                    {content}
                    {contentList && (
                        <ul className={`${taStyles.main__article__descriptionList}`}>
                            {contentList.map((d: string, i: number) => (
                                <li key={`${title}-ta-li-${i}`}>{d}</li>
                            ))}
                            {links &&
                                links.map(
                                    (
                                        link: {
                                            url: string
                                            label: string
                                        },
                                        i: number,
                                    ) => (
                                        <li key={i} className="!text-primary-default">
                                            <Link target="_blank" href={link.url}>{link.label}</Link>
                                        </li>
                                    ),
                                )}
                        </ul>
                    )}
                </div>
                {children}
            </article>
        </section>
    )
}

export default TrainingArticle

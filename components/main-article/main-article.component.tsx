import React from 'react'
import Link from 'next/link'

import mainArticleStyles from './main-article.module.scss'

interface MainArticleProps {
    imageURL?: string
    header: string
    description?: string
    descriptionList?: string[]
    streams?: any[]
    isTraining?: boolean
    otherProps?: any[]
    style?: any
    logo?: any
    children?: any
    slug?: string
    isHeader?: boolean
    link?: ILink
}

interface ILink {
    url: string
    label: string
}

const MainArticle: React.FC<MainArticleProps> = ({
    imageURL,
    header,
    description,
    descriptionList,
    streams,
    isTraining,
    style,
    logo,
    children,
    slug,
    isHeader,
    link,
    ...otherProps
}: MainArticleProps) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }
    const articleWidth: object = imageURL ? {} : { width: '100%' }
    return (
        <section className={`${mainArticleStyles.main__article}`} style={style}>
            <article className={`${mainArticleStyles.main__article__section}`} style={articleWidth}>
                {isTraining ? (
                    isHeader ? (
                        <h1 className={`${mainArticleStyles.main__article__header}`}>
                            {logo ? <img src={`/training/${logo}`} /> : ''}
                            <span>{header}</span>
                        </h1>
                    ) : (
                        <h2 className={`${mainArticleStyles.main__article__header}`}>
                            {logo ? <img src={`/training/${logo}`} /> : ''}
                            <span>{header}</span>
                        </h2>
                    )
                ) : isHeader ? (
                    <h1 className={`${mainArticleStyles.main__article__header}`}>{header}</h1>
                ) : (
                    <h2 className={`${mainArticleStyles.main__article__header}`}>{header}</h2>
                )}
                <div
                    className={`${mainArticleStyles.main__article__description} ${
                        slug ? mainArticleStyles.main__article__description__trim : ''
                    }`}
                >
                    {description && (
                        <div
                            className={`${mainArticleStyles.main__article__description}`}
                            dangerouslySetInnerHTML={{ __html: description }}
                        />
                    )}
                    {descriptionList && (
                        <ul
                            className={`${mainArticleStyles.main__article__description}
                                         ${mainArticleStyles.main__article__descriptionList}`}
                        >
                            {descriptionList.map((d: string, i: number) => (
                                <li key={`${header}-ma-li-${i}`}>
                                    <div dangerouslySetInnerHTML={{ __html: d }} />
                                </li>
                            ))}
                        </ul>
                    )}
                    {link && (
                        <div className={mainArticleStyles.optionlLink}>
                            <a href={link.url} target="_blank" rel="noreferrer">
                                {link.label}
                            </a>
                        </div>
                    )}

                    {slug && (
                        <div className={mainArticleStyles.readMore}>
                            <Link href={`/blog/${slug}`}>
                                <a>Read more</a>
                            </Link>
                        </div>
                    )}
                </div>

                <div className={`${mainArticleStyles.main__article__buttons__block}`}>
                    {streams && (
                        <Link href={`/schedule`}>
                            <a className="button button-primary button-primary-default">Book Now</a>
                        </Link>
                    )}
                    {isTraining && (
                        <Link href={`/services/training/${header.toLowerCase().split(' ').join('-')}`}>
                            <a className="button button-secondary button-secondary-default">Read More</a>
                        </Link>
                    )}
                    {children}
                </div>
            </article>
            {imageURL && (
                <aside
                    className={`${mainArticleStyles.main__article__aside} ${mainArticleStyles.main__article__aside__image}`}
                    style={{ backgroundImage: `url("${imageURL}")` }}
                ></aside>
            )}
        </section>
    )
}

export default MainArticle

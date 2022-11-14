import type { NextPage } from 'next';
import Head from 'next/head';
import Homepage from '../pages-components/homepage/homepage.component';
import homepageProps from '../lib/homepage.data';
import { HomepageTypes } from '../data/content';
import { IPostType } from './blog';

export async function getStaticProps() {
    const homeProps = homepageProps();
    let query = `
    {
        blogCollection {
            items{
                title
                slug
                cover{
                    url
                    title
                }
              content {
                json
              }
              showInHomePage
              description
              sys{
                publishedAt
              }
            }
          } 
        }
    `;

    const data = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.BLOG_SPACE_ID}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.BLOG_ACCESS_TOKEN}`,
        },

        body: JSON.stringify({ query }),
    }).then((res) => res.json());

    const posts: IPostType[] = data?.data?.blogCollection?.items || {};
    return {
        props: {
            homeProps: homeProps,
            posts: posts,
        },
    };
}

interface HomeTypes {
    homeProps: HomepageTypes;
    posts: IPostType[];
}

const Home: NextPage<HomeTypes> = ({ homeProps, posts }) => {
    return (
        <>
            <Head>
                <title>Valuehut Limited - Offices in London, UK and Lagos, Nigeria.</title>
                <meta
                    name="description"
                    content="ValueHut is an agile coaching and training consultancy that is helping Organisations to rethink their ways of working in other to help these organisations deliver most value to their customers."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Homepage {...homeProps} posts={posts} />
        </>
    );
};

export default Home;

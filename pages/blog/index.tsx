import React from 'react'
import { InferGetStaticPropsType } from 'next'
import { GetStaticProps } from 'next'
import { Text, Bold } from '../../components/blog-nodes';
import BlogPage from '../../pages-components/blog-page/blog-page.component';
import BlogItem from '../../components/blog-item';
import { Document } from '@contentful/rich-text-types';
import Head from 'next/head';


export interface IPostType{
    title: string;
    slug: string;
    cover: {
        url: string;
        title: string;
    };
    sys: {
        publishedAt: Date;
    };
    description: string;
    content?: {
        json: Document;
    };
    author: {
        sys: {
            id: string;
        }
    }
}

export interface IAuthor {
    fullName: string;
    profilePicture: {
        url: string;
        title: string;
    };
}

export const getStaticProps: GetStaticProps = async () => {

    const query = `
    {
        blogCollection {
            items{
                title
                slug
                cover{
                    url
                    title
                }
                sys{
                    publishedAt
                }
                description
            }
        } 
    }
    `

    const data = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.BLOG_SPACE_ID}`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.BLOG_ACCESS_TOKEN}`
        },

        body: JSON.stringify({ query })
    }).then(res => res.json())

    const posts: IPostType[] = data.data.blogCollection.items

    return {
        props: {
            posts: posts,
        }
    }
}

function Blog({posts} : InferGetStaticPropsType<typeof getStaticProps>) {


  return (
    <>
        <Head>
            <title>Valuehut Limited - Blog</title>
            <meta name="description" content="ValueHut's blog page" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <BlogPage>
            <div>
            { (posts.length) > 0 &&
                posts.map((post :IPostType, id: number) => (
                    <BlogItem key={`blog_item_${id}`} description={post.description} publishedAt={post.sys.publishedAt} cover_img={post.cover ? post.cover.url : undefined } slug={post.slug} title={post.title} />
                ))
            }
            </div>
        </BlogPage>
    </>
    
  )
}

export default Blog
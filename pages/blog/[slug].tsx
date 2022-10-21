import { InferGetStaticPropsType } from 'next'
import React from 'react'
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Text, Bold, List } from '../../components/blog-nodes';
import { IAuthor, IPostType } from '.'
import styles from "./blogPostPage.module.scss"
import BlogPostPage from '../../pages-components/blog-post-page/blog-post-page.component';
import moment from 'moment';

export async function getStaticProps(context: any){
  
  let query = `
  {
      blogCollection(limit: 1, where: {slug: "${String(context.params.slug)}"}) {
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
            sys{
              publishedAt
            }
            author{
              sys{
                id
              }
            }
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


  const post: IPostType = data.data.blogCollection.items[0]

  query = `
    query{
      authorCollection(limit: 1, where: {sys : {id: "${post.author.sys.id}"}}){
        items{
          fullName
          profilePicture{
            url
            title
          }
        }
      }
    }
  ` 

  const authorData = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.BLOG_SPACE_ID}`, {
      method: "POST",
      headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.BLOG_ACCESS_TOKEN}`
      },

      body: JSON.stringify({ query })
  }).then(res => res.json())

  const author:IAuthor = authorData.data.authorCollection.items[0];
  
  return{
    props: { post: post, author: author },
    revalidate: 10
  }
}

function BlogPost({post, author} : InferGetStaticPropsType<typeof getStaticProps>) {

  const options = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node: any, children: any) => <Text>{children}</Text>,
        [BLOCKS.UL_LIST]: (node: any, children: any) => <List>{children}</List>
    },
    renderMark: {
        [MARKS.BOLD]: (text: any) => <Bold>{text}</Bold>
    },
    
    renderText: (text: any) => text.replace('!', '?'),
};

  return (
    <BlogPostPage>
      <div className={styles.blog_page_header}>
        <h1 className={styles.blog_title}>
          {post.title}
        </h1>
        <span className={styles.blog_page_posted}>
          Posted the <span>{moment(post.sys.publishedAt).format('Do MMMM YYYY')}</span> - {author.fullName}
        </span>
        {
          (post.cover && post.cover.url) &&
            <img src={post.cover.url} alt="blog-post-cover"/>
        }
      </div>
      <div>
      { (post && post.content &&
              post.content.json)  &&
              documentToReactComponents(post.content.json, options)
          }
      </div>

      <div className={styles.divider}>

      </div>

      <div className={styles.blog_post_author}>
          <div className={styles.writtenBy}>
            <span>
              Written by
            </span>
          </div>
          <div className={styles.author}>
              <div className={styles.img}>
                <img src={(author.profilePicture && author.profilePicture.url) ? author.profilePicture.url : '/images/profile_picture.webp'} alt='profile-picture'/>
              </div>
            <span>
              {author.fullName}
            </span>
          </div>
      </div>
    </BlogPostPage>
  )
}

export async function getStaticPaths(){
    const query = `
    {
        blogCollection {
            items{
                slug
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

    const paths: {params: {slug: string}}[] = data && data.data?.blogCollection?.items?.map((path: {slug: string}) => {
      return{
        params: {
          slug: path.slug
        }
      }
    });
    
    return{
        paths: paths,
        fallback: 'blocking',
    }
}

export default BlogPost
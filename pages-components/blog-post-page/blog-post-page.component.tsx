import React from 'react'
import blogPostPage from './blog-post-page.module.scss';

interface IProps{
    children: React.ReactNode;
}

function BlogPostPage(props: IProps) {
  return (
    <div className={`page ${blogPostPage.blogPostPage}`}>
        {props.children}
    </div>
  )
}

export default BlogPostPage
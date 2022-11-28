import React from 'react';
import blogPage from './blog-page.module.scss';

interface IProps{
    children: React.ReactNode;
}

function BlogPage(props: IProps) {
  return (
    <div className={`page ${blogPage.blogPage}`}>
      <h1 className={blogPage.title}>
        VH Blogs
      </h1>
      {props.children}
    </div>
  )
}

export default BlogPage
import React from 'react';
import { IPostType } from '../../pages/blog';
import HeaderWithButton from '../header-with-button/header-with-button.component';
import styles from './index.module.scss';

interface IProps {
    posts: IPostType[];
}

function TheBlog(props: IProps) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <HeaderWithButton header="The blog" link="View all" href="blog" />
            </div>
            <div className={styles.blogs}>
                {props.posts &&
                    props.posts.map((post: IPostType) => (
                        <div className={styles.blog}>
                            <img src={post.cover.url} alt="post-cover" />
                            <a href={`/blog/${post.slug}`}>{post.title}</a>
                            <p>{post.description}</p>
                            <a>Read more {`>`}</a>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default TheBlog;

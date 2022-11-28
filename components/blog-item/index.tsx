import Link from 'next/link';
import React from 'react';
import styles from './index.module.scss';
import moment from "moment";

interface IProps {
  title: string;
  cover_img?: string;
  slug: string;
  publishedAt: Date;
  description: string;
}

function BlogItem(props: IProps) {
  return (
    <div className={styles.container}>
      <div className={styles.cover_container}>
        <Link href={`/blog/${props.slug}`}>
          <a>
            <img src={props.cover_img || '/images/blog-placeholder.jpg'} alt={"img-cover"} className={styles.cover_container_image} />
          </a>
        </Link>
      </div>
      <div className={styles.post_content}>
        <div className={styles.post_content_header}>
          <Link href={`/blog/${props.slug}`}>
            <a>
              {props.title}
            </a>
          </Link>
        </div>
        <div className={styles.post_content_description}>
          <p>
            {props.description}
          </p>
        </div>

        <div className={styles.post_additional_information}>
          <div className={styles.post_additional_information_date}>
            <div className={styles.published}>Published: {moment(props.publishedAt).format('Do MMMM YYYY')}</div>
            <div className={styles.readMore}>
              <Link href={`/blog/${props.slug}`}>
                <a>
                  Read more
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogItem
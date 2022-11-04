import React from "react";
import styles from './index.module.scss';

export const Bold = ({ children } : any) => <span className={styles.bold}>{children}</span>;

export const Text = ({ children } : any) => <p className={styles.paragraph}>{children}</p>;

export const List = ({ children } : any) => <ul className={styles.blogList}>{children}</ul>
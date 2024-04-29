import React from 'react';

const BASEURL = 'https://www.valuehut.co';

function generateSiteMap(paths: any) {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <!--We manually set the two URLs we know already-->
    <url>
        <loc>${BASEURL}</loc>
    </url>
    <url>
        <loc>${BASEURL}/blog</loc>
    </url>
    <url>
        <loc>${BASEURL}/about</loc>
    </url>
    <url>
        <loc>${BASEURL}/contact</loc>
    </url>
    <url>
        <loc>${BASEURL}/services</loc>
    </url>
    <url>
        <loc>${BASEURL}/services/coaching</loc>
    </url>
    <url>
        <loc>${BASEURL}/services/consulting</loc>
    </url>
    <url>
        <loc>${BASEURL}/services/training</loc>
    </url>
    <url>
        <loc>${BASEURL}/services/training/schedule</loc>
    </url>
    <url>
        <loc>${BASEURL}/services/training/professional-scrum-facilitation-skills</loc>
    </url>
    <url>
        <loc>${BASEURL}/services/training/professional-scrum-master</loc>
    </url>
    <url>
        <loc>${BASEURL}/services/training/professional-scrum-product-owner</loc>
    </url>
    <url>
        <loc>${BASEURL}/services/training/professional-scrum-master---advanced</loc>
    </url>
    <url>
        <loc>${BASEURL}/services/training/professional-agile-leadership</loc>
    </url>
    <url>
        <loc>${BASEURL}/services/training/applying-professional-scrum</loc>
    </url>
    <url>
        <loc>${BASEURL}/services/training/applying-professional-scrum-for-software-development</loc>
    </url>
    ${paths
        .map((slug: string) => {
            return `
        <url>
            <loc>${`${BASEURL}/blog/${slug}`}</loc>
        </url>
    `;
        })
        .join('')}
    </urlset>
`;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: any) {
    const query = `
    {
        blogCollection {
            items{
                slug
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

    const paths: string[] = data && data.data?.blogCollection?.items?.map((path: { slug: string }) => path.slug);

    const sitemap = generateSiteMap(paths);
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;

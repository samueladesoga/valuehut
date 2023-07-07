import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import SchedulePage from '../../../../pages-components/schedule-page'

const Schedule: NextPage = () => {
    return (
        <>
            <Head>
                <title>Valuehut Limited - Schedule</title>
                <meta name="og:title" property="og:title" content="Valuehut Limited - Schedule" />
                <meta name="title" property="title" content="Valuehut Limited - Schedule" />
                <meta name="description" content="ValueHut's schedule page" />
                <meta name="type" content="page" />
                <meta name="og:site_name" content="ValueHut" />
                <meta name="og:description" content="ValueHut's schedule page" />
                <meta name="og:type" content="page" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="robots" content="max-image-preview:large" />
            </Head>
            <SchedulePage></SchedulePage>
        </>
    )
}

export default Schedule

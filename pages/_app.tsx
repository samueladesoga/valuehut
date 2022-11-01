import '../styles/globals.scss'
import type { AppProps } from 'next/app';
import Layout from '../components/layout/layout.component.jsx';
import { GoogleAnalytics, usePageViews } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }: AppProps) {
  usePageViews();

  return (
    <Layout>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp

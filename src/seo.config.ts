// @SEE https://www.npmjs.com/package/next-seo#default-seo-configuration

import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
    openGraph: {
        type: 'website',
        locale: 'id_ID',
        url: '',
        siteName: 'Catur Utama Sejahtera',
        images: [
            {
                url: '',
                // url: 'https://Catur-Utama-Sejahtera.vercel.app/og/og.png',
                width: 1200,
                height: 630,
                alt: 'Catur Utama Sejahtera',
            },
        ],
    },
    twitter: {
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
    },
    title: 'Catur Utama Sejahtera',
    titleTemplate: '%s | Catur Utama Sejahtera',
    description: 'Catur Utama Sejahtera',
    defaultTitle: 'Catur Utama Sejahtera',
    additionalLinkTags: [
        {
            rel: 'icon',
            href: '/favicon.ico',
        },
    ],
};

export default config;

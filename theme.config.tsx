import React from 'react'
// import { DocsThemeConfig } from 'nextra-theme-docs'
import { BlogMetadata } from 'nextra-theme-blog'

// const config: DocsThemeConfig = {
//   logo: <span>Experimenting To Learn (ETL)</span>,
//   project: {
//     link: 'https://github.com/yourusername/experimenting-to-learn',
//   },
//   docsRepositoryBase: 'https://github.com/yourusername/experimenting-to-learn/tree/main',
//   footer: {
//   },
//   useNextSeoProps() {
//     return {
//       titleTemplate: '%s – ETL'
//     }
//   }
// }

// export default config

const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Experimenting To Learn (ETL).
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
  head: ({ title, meta }: { title: string; meta: any }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  readMore: 'Read More →',
  postFooter: null,
  darkMode: false,
  navs: [
    {
      url: 'https://github.com/yourusername/experimenting-to-learn',
      name: 'GitHub'
    }
  ]
}
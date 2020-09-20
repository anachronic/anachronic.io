import { getAllSources } from '../../lib/sources'
import { Layout } from '../../components/layout'
import { Article } from '../../components/article'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Head from 'next/head'
import { Title, Subtitle } from '../../styled/typography'

dayjs.extend(relativeTime)

export default function WikiArticle({ article }) {
  return (
    <Layout>
      <Head>
        <title>{article.title} :: anachronic.io</title>
      </Head>
      <Title>{article.title}</Title>
      <Subtitle>{dayjs(article.date).fromNow()}</Subtitle>

      <Article article={article} />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const sources = await getAllSources('wiki')

  return {
    props: {
      article: sources.find((source) => source.id === params.id),
    },
  }
}

export async function getStaticPaths() {
  const sources = await getAllSources('wiki')
  return {
    paths: sources.map((source) => `/wiki/${source.id}`),
    fallback: false,
  }
}

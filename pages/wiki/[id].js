import { getAllSources } from '../../lib/sources'
import { Layout } from '../../components/layout'

export default function WikiArticle({ article }) {
  return <Layout>{JSON.stringify(article)}</Layout>
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
  console.log(sources)
  return {
    paths: sources.map((source) => `/wiki/${source.id}`),
    fallback: false,
  }
}

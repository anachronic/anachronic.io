import ArticleList from '../../components/article-list'
import { Layout } from '../../components/layout'
import { getAllSources } from '../../lib/sources'

export default function Wiki({ articles }) {
  return (
    <Layout>
      <h1>Wiki Articles</h1>

      <ArticleList articles={articles} />
    </Layout>
  )
}

export async function getStaticProps() {
  const articles = await getAllSources('wiki')

  return {
    props: {
      articles,
    },
  }
}

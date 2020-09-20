import React from 'react'
import dayjs from 'dayjs'
import styled from '@emotion/styled'
import Head from 'next/head'
import { Link } from './link'

const ArticleRow = styled.div`
  font-size: 1.1rem;
  padding: 0.3rem;

  &:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }
`

const ArticleDate = styled.span`
  color: #777;
`

export default function ArticleList({ articles }) {
  return (
    <>
      <Head>
        <title>Wiki Articles :: anachronic.io</title>
      </Head>
      {articles.map((article) => (
        <ArticleRow key={article.id}>
          <ArticleDate>{dayjs(article.date).format('YYYY-MM-DD')}</ArticleDate>
          <Link
            css={{
              marginLeft: '1rem',
            }}
            href={`/wiki/${article.id}`}
          >
            {article.title}
          </Link>
        </ArticleRow>
      ))}
    </>
  )
}

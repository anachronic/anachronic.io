import styled from '@emotion/styled'

const StyledArticle = styled.div`
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.link};
    &:hover {
      text-decoration: underline;
    }
  }
`

export function Article({ article }) {
  return <StyledArticle dangerouslySetInnerHTML={{ __html: article.content }} />
}

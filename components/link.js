import styled from '@emotion/styled'
import NextLink from 'next/link'

const AppLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.link};

  &:hover {
    text-decoration: underline;
  }
`

export function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      <AppLink {...props}>{children}</AppLink>
    </NextLink>
  )
}

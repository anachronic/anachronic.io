import { Container } from './container'
import { Navbar } from '../components/navbar'
import { css } from '@emotion/core'

const spacedClass = css`
  margin-top: 2rem;
`

export const Layout = ({ children, nospace = false }) => {
  return (
    <>
      <Navbar />
      <Container css={nospace ? null : spacedClass}>{children}</Container>
    </>
  )
}

import { Container } from './container'
import { Navbar } from '../components/navbar'

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  )
}

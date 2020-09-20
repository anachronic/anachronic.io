import styled from '@emotion/styled'
import Link from 'next/link'

const Nav = styled.div`
  background-color: ${(props) => props.theme.colors.purple};
  color: ${(props) => props.theme.colors.purpleInvert};
  box-shadow: 0 5px 5px 0 rgba(150, 150, 150, 0.5);
  display: flex;
  flex-direction: row;

  .item {
    padding: 0.5rem;
    height: 100%;
    display: inline-block;
  }
`

const NavLeft = styled.div`
  flex-grow: 0;
  margin-left: 1rem;
  height: 100%;
`

const NavCenter = styled.div`
  flex-grow: 1;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  height: 100%;
`

const NavRight = styled.div`
  flex-grow: 0;
  margin-right: 1rem;
  height: 100%;
`

const NavLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.purpleInvert};

  &:hover {
    text-decoration: none;
    background-color: ${(props) => props.theme.colors.purpleDark};
  }
`

export const Navbar = () => {
  return (
    <Nav>
      <NavLeft>
        <Link href="/" passHref>
          <NavLink className="item">Home</NavLink>
        </Link>
        <Link href="/articles" passHref>
          <NavLink className="item">Articles</NavLink>
        </Link>
        <Link href="/wiki" passHref>
          <NavLink className="item">Wiki</NavLink>
        </Link>
      </NavLeft>

      <NavCenter></NavCenter>

      <NavRight></NavRight>
    </Nav>
  )
}

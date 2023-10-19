import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { navBarLinks } from '@/constants/navBarLinks';

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledLi = styled.li`
  margin: 4px 0;
`;

const StyledLink = styled(NavLink)`
  padding: 4px 8px;
  display: block;
  text-decoration: none;
  color: inherit;

  font-size: 18px;

  &.active {
    box-shadow: 0 2px 6px -2px gray;
  }
  &:hover {
    box-shadow: 0 2px 6px -2px gray;
  }
`;

function NavBar() {
  return (
    <nav>
      <LinkList>
        {navBarLinks.map((link, ind) => (
          <StyledLi key={`navbar-link-${ind}`}>
            <StyledLink to={link.href}>{`- ${link.label}`}</StyledLink>
          </StyledLi>
        ))}
      </LinkList>
    </nav>
  );
}

export default NavBar;

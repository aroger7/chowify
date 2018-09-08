import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuLink = styled(Link)`
  display: block;
  //width: 100%;
  //height: 100%;
  padding: 1em;
  text-align: center;
  text-decoration: none;

  &:link,
  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
    color: #000000;
  }
`;

export default MenuLink;

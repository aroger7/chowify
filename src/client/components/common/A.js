import styled from 'styled-components';

const A = styled.a`
  display: inline-block;
  font: 1em 'PT Sans Narrow', sans-serif;
  color: #000000;

  &:link,
  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
    color: #000000;
  }
`;

export default A;

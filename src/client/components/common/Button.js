import styled from 'styled-components';

const Button = styled.button`
  padding: 0px;
  border: none;
  font: 16px 'PT Sans Narrow', sans-serif;
  background-color: transparent;

  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }
`;

export default Button;

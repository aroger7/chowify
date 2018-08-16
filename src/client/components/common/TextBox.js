import styled from 'styled-components';

const TextBox = styled.input.attrs({
  type: 'text'
})`
  border: none;
  border-bottom: 2px solid black;
  font: 1em 'PT Sans', sans-serif;
`;

export default TextBox;

import styled from 'styled-components';

const Input = styled.input`
  &[type='text'],
  &[type='password'] {
    background: transparent;
    border: none;
    border-bottom: 2px solid black;
    font: 1em 'PT Sans', sans-serif;
  }
`;

export default Input;

import styled from 'styled-components';

export const SearchbarHeader = styled.header`
  position: fixed;
  top: 0;
  padding: 8px 0 8px 0;
  width: 100%;
  background-color: #0000cd;
  z-index: 1000;

  div {
    display: grid;
  }

  form {
    margin: 0 auto;
  }

  input {
    padding-left: 30px;
    padding-right: 100px;
    font-size: 16px;
    margin: 0 auto;
  }

  button {
    position: absolute;
    padding: 0 0 0 10px;
    top: 55%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1em;
    outline: none;
    color: rgb(16 14 14 / 74%);
  }
`;

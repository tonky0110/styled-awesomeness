import React, { Fragment } from 'react';
import 'reset-css';
import styled, { css, keyframes } from 'styled-components';

const App = () => {
  return (
    <Container>
      <Input
        placeholder="Hello"
      />
    </Container>
  );
}

// mixin
const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdc3c7;
`;

const Input = styled.input
  .attrs({
    required: true
  })`
  border: none;
  ${awesomeCard}
`;

export default App;

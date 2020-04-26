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


const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdc3c7;
`;

const Input = styled.input
  .attrs({
    required: true
  })`
  border-radius: 5px;
`;

export default App;

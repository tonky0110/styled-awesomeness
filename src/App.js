import React, { Fragment } from 'react';
import 'reset-css';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Form />
      </Container>
    </ThemeProvider>
  );
}

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor}
`;

const Card = styled.div`
  background-color: red;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdc3c7;
  ${Card} {
    background-color: blue;
  }
`;

const Form = () => {
  return (
    <Card>
      <Button>Hello</Button>
    </Card>
  );
}
export default App;

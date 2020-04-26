import React, { Fragment } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdc3c7;
`;
const Button = styled.button`
	border-radius: 50px;
	padding: 5px;
	min-width: 120px;
	color: white;
	font-weight: 600;
	-webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => props.danger ? '#e74c3c' : '#2ecc71'};
`;


const App = () => {
  return (
    <Container>
      <Button>Success</Button>
      <Button danger>Hello</Button>
    </Container>
  );
}


export default App;

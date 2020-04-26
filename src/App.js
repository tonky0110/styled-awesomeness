import React, { Fragment } from 'react';
import 'reset-css';
import styled, { css, keyframes } from 'styled-components';

const App = () => {
  return (
    <Container>
      <Button>Success</Button>
      <Button danger rotationTime={2}>Hello</Button>
      <Anchor href="http://www.google.com">Go to Google</Anchor>
    </Container>
  );
}


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
  ${props => {
    if (props.danger) {
      return css`animation:  ${props.rotationTime}s ${rotation} linear infinite`;
    }
  }}
`;

const Anchor = styled(Button.withComponent('a'))`
  text-decoration:none;
`;

const rotation = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;

export default App;

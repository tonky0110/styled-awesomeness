import React, { Fragment } from 'react';
import './App.css';

const App = () => {
  return (
    <Fragment>
      <Button>Success</Button>
      <Button danger>Hello</Button>
    </Fragment>
  );
}

const Button = ({ danger, children }) => (
  <button className={danger ? 'button button--denger' : 'button button--success'}>{children}</button>
);

export default App;

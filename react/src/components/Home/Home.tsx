import React, { useEffect } from 'react';
import '../../App.css';
import GoogleMap from '../common/GoogleMap';
import { getTest, test } from '../../api/apollo/modules/test.module';
import { useReactiveVar } from '@apollo/client';

const Home = (): JSX.Element => {
  getTest();
  const testItems = useReactiveVar(test);

  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
      <GoogleMap />
    </div>
  );
};

export default Home;

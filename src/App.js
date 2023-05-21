// import logo from './logo.svg';

import './App.css';
import LeftPanel from './components/LeftPanel';
import MiddlePanel from './components/MiddlePanel';
import RightPanel from './components/RightPanel';
import Header from './components/Header';
import { useState, useEffect, useContext, Suspense } from 'react';
import { ThemeContext } from './components/context/themeContext';
import Contact from './components/contact';
import LazyLoadDemo from './components/lazyLoad';
import CompoundComponent from './components/designPattern/compoundComponent';
import FlexibleCompoundComponent from './components/designPattern/flexibleCompoundComponent';
import ReducerComponent from './components/designPattern/reducerComponent';
import Feeds from './components/hooks';

function App() {
  const { isDarkMode } = useContext(ThemeContext);
  const [twitterData, setTwitterData] = useState([]);
  useEffect(() => {
    // fetch("http://demo9548547.mockable.io/tweets")
    fetch("https://sandbox.nextleap.app/page/fetch")
      .then(res => res.json())
      .then(data => setTwitterData(data));
  }, []);

  //
    return (
      <div className={`dashboard ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className={`App`}>
          {/* <Feeds></Feeds> */}
          {/* <ReducerComponent></ReducerComponent>
          <LazyLoadDemo></LazyLoadDemo> */}
          <LeftPanel data={twitterData}/>
          <MiddlePanel data={twitterData}/>
          <RightPanel data={twitterData}/>
        </div>
      </div>
    );
  }

export default App;


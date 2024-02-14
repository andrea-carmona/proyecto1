import React from 'react';

import {HomePageLayout} from './templates';
import Header from './organisms/header';
import './App.css';
import logo from './assets/img/logo.png';

function App() {
  return (
    <HomePageLayout>
     <Header logo={logo}/>
     <div className='hero'>
     </div>
     <div>menu</div>
    </HomePageLayout>
  );
}

export default App;


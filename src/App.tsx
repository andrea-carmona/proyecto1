import React from 'react';

import {HomePageLayout} from './templates';
import Header from './organisms/header';

import logo from './assets/img/logo.png';

function App() {
  return (
    <HomePageLayout>
     <Header logo={logo}/>
     <div>menu</div>
    </HomePageLayout>
  );
}

export default App;

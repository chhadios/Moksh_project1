import React from 'react';
import './App.css';
import Page1 from './Pages/page1';
import Page2 from './Pages/page2';
import Page3 from './Pages/page3';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <>

        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />}/>
          <Route path="/page2" element={<Page2 />}/>
          <Route path="/page3" element={<Page3 />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import NewsBox from './components/NewsBox';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize=5;
  const [progress, setProgress] = useState(0);
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar height={3} color='#f11946' progress={progress} />
        <Routes>
          <Route exact path='/' element={<NewsBox setProgress = {setProgress} key="general" pageSize={pageSize} country='in' category='general'/>}></Route>
          <Route exact path='/business' element={<NewsBox setProgress = {setProgress} key="business" pageSize={pageSize} country='in' category='business'/>}></Route>
          <Route exact path='/entertainment' element={<NewsBox setProgress = {setProgress} key="entertainment" pageSize={pageSize} country='in' category='entertainment'/>}></Route>
          <Route exact path='/general' element={<NewsBox setProgress = {setProgress} key="general" pageSize={pageSize} country='in' category='general'/>}></Route>
          <Route exact path='/health' element={<NewsBox setProgress = {setProgress} key="health" pageSize={pageSize} country='in' category='health'/>}></Route>
          <Route exact path='/science' element={<NewsBox setProgress = {setProgress} key="science" pageSize={pageSize} country='in' category='science'/>}></Route>
          <Route exact path='/sports' element={<NewsBox setProgress = {setProgress} key="sports" pageSize={pageSize} country='in' category='sports'/>}></Route>
          <Route exact path='/technology'element={<NewsBox setProgress = {setProgress} key="technology" pageSize={pageSize} country='in' category='technology'/>}></Route>
        </Routes>
        </Router>
        
      </div>
    
    )
}

export default App



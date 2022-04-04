import React, { useEffect } from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen';
import Login from './components/Login/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { app, auth } from './firebase';

function App() {

  const user = null;

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
      } else {
        //LOggedout
      }
    })
  },[])

  return (
    <div className="app">
      
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (    
          <Routes>
            <Route path="login" element={<HomeScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;

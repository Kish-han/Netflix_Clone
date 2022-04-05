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
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './firebase';
import { login, logout, selectuser } from './features/counter/userSlice';
import ProfileScreen from './components/ProfileScreen/ProfileScreen';

function App() {

  const user = useSelector(selectuser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        //LOggedout
        dispatch(logout())
      }
    })
    return unsubscribe;
  },[dispatch])

  return (
    <div className="app">
      
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (    
          <Routes>
            <Route path="/profile" element={<ProfileScreen/>} />
            <Route path="login" element={<HomeScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;

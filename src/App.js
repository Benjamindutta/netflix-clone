import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import Profile from './screens/Profile';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout())
      }
    })
    return unsubscribe;
  }, [dispatch])
  return (

    <div className='app'>
      {!user ?
        (<LoginScreen />)
        : (<BrowserRouter>
          <Routes>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path="/" element={<HomeScreen />}></Route>
          </Routes>
        </BrowserRouter >)
      }
    </div >
  );
}

export default App;

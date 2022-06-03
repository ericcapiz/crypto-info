import React, {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import {ThemeProvider} from './context/ThemeContext'
import Nav from './components/Nav';
import Home from './routes/Home';
import Register from './routes/Register'
import Login from './routes/Login';
import Account from './routes/Account';
import CoinPage from './routes/CoinPage';
import axios from 'axios';
import Footer from './components/Footer';

function App() {
  const [getCoins, setGetCoins] = useState([]);

  const url ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true'

  useEffect(()=>{
    axios.get(url).then((res)=>{
      setGetCoins(res.data)
    })
  },[url]);

  return (
    <ThemeProvider>
     <Nav />
     <Routes>
       <Route path="/" element={<Home coins={getCoins}/>} />
       <Route path="/register" element={<Register />} />
       <Route path="/login" element={<Login />} />
       <Route path="/account" element={<Account />} />
       <Route path="/coin/:coinId" element={<CoinPage />}>
         <Route path=":coinId" />
       </Route>
     </Routes>
     <Footer />
    </ThemeProvider>
  );
}

export default App;

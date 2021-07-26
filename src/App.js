

import AccountBalance from './components/AccountBalance/AccountBalance.jsx'
import React, {useEffect, useState} from 'react';
import CoinList from './components/CoinList/CoinList';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import styled from 'styled-components'
import axios from 'axios';



const Div = styled.div
`

text-align: center;
background-color: rgb(4, 101, 228);
color: #cccccc;

`;
const formatPrice = price => parseFloat(Number(price).toFixed(4))

const COIN_COUNT = 10;

function App () {
  


  const componentDidMount = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins')
    const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
    const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/'
    //this will be an array of promises 
    const promises = coinIds.map(id => axios.get(tickerUrl + id ))
    const coinData =  await Promise.all(promises)
    const coinPriceData = coinData.map(function(response){
    const coin = response.data;
      return{
      key: coin.id,
      name: coin.name,
      ticker: coin.symbol,
      balance: coinBalance,
      price: formatPrice(coin.quotes.USD.price),

    };
  });
    
    setCoinData(coinPriceData)
    
}


  useEffect(() =>{
     if (coinData.length === 0){

     componentDidMount();
      
     }
  })
 
  const [balance, setBalance] = useState(10000)
  const [showBalance, setShowBalance] = useState(true)
  const [coinBalance, setCoinBalance] = useState(0)
  const [coinData, setCoinData] = useState([])

 
  
  const handleBalanceVisibilityChange = () =>{

    setShowBalance(oldValue => !oldValue)
    
  }
 

  const handleRefresh = async (valueChangeId) => {
    const tickerURL = `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`
    const response = await axios.get(tickerURL)
    const newPrice = formatPrice(response.data.quotes.USD.price)
    const newCoinData = coinData.map( function (values){
    let newValues = {...values}; 
    if (valueChangeId === values.key){
      newValues.price = newPrice;
    };
        
        return newValues;
    });


    setCoinData(newCoinData)
  }
    

  const increaseBalance = () =>{
    let helecopter = balance + 1200
    setBalance ( helecopter)
}




    return (
    <Div >
        <ExchangeHeader />
        <AccountBalance 
        brrr = {increaseBalance}
        amount={balance} 
        showBalance = {showBalance} 
        handleBalanceVisibilityChange = {handleBalanceVisibilityChange} />
        <CoinList 
        coinBalance = {coinBalance}
        setCoinBalance = {setCoinBalance}
        coinData = {coinData} 
        showBalance={showBalance}
        handleRefresh ={handleRefresh} /> 
         
    </Div>
  );
 
}

export default App;


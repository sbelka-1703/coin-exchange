

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
  

  const [coinBalance, setCoinBalance] = useState(0)

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

  useEffect(() =>{
    componentDidMount();   

 }, [coinBalance])  
 
  const [balance, setBalance] = useState(10000)
  const [showBalance, setShowBalance] = useState(true)
  
  const [coinData, setCoinData] = useState([])

 
  
  const handleBalanceVisibilityChange = () =>{

    setShowBalance(oldValue => !oldValue)
    
  }
 


  
  const handleRefresh = async (valueChangeId) => {
    //run this in debugger to see how valueChangeId is selected *******************************************************<------
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

  /*

  -Build the buy function, so it works with a hard coded price of a token 

  1. Chose the amount of the token you want to buy 
  
  
  2. Get the actual price of the specific token from coinparika (**later**)

  3. Balance - (price * amount)
    -If insufficent balance, throw an error 
  
  4. Add it to the balance of the token 

  5. Try to put it in a separate component 


  =======

  We also need the modal to display which token was selected, work on this first 
  
  */
  




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


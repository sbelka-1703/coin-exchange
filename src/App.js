

import AccountBalance from './components/AccountBalance/AccountBalance.jsx'
import React from 'react';
import CoinList from './components/CoinList/CoinList';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import styled from 'styled-components'


const Div = styled.div`

text-align: center;
background-color: rgb(4, 101, 228);
color: #cccccc;

`;



class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: true,
    coinData: [
    {
      name: 'Bitcoin',
      ticker: 'BTC',
      balance : 0.5,
      price: 9999.99
    },
    {
      name: 'Ethereum',
      ticker: 'ETH',
      balance: 32,
      price: 299.33

    },

    {
      name: 'Tether',
      ticker: 'USDT',
      balance: 0,
      price: 1.0

    },
    {
      name: 'Ripple',
      ticker: 'XRP',
      balance: 1000,
      price: 0.2
    },
    {
      name: 'Bitcoin Cash',
      ticker: 'BCH',
      balance: 0,
      price: 200
    }
    ]

   
      
    
  }
  
  handleBalanceVisibilityChange = () =>{
    this.setState(function (oldState){
    return{
      ...oldState,
      showBalance: !oldState.showBalance
    }
    }
      
      )
  }
  handleRefresh = (valueChangeTicker) => {
    const newCoinsData = this.state.coinData.map( function (values){
    let newValues = {...values};
    if (valueChangeTicker === values.ticker){
      const randomPercetnage = 0.995 + Math.random() * 0.01;
      newValues.price *= randomPercetnage;
    };

        return newValues;
    });


    this.setState({coinData: newCoinsData})

  }
  render(){ 
    
    return (
    <Div >
        <ExchangeHeader />
        <AccountBalance amount={this.state.balance} 
        showBalance = {this.state.showBalance} 
        handleBalanceVisibilityChange = {this.handleBalanceVisibilityChange} />
        <CoinList 
        coinData = {this.state.coinData} 
        showBalance={this.state.showBalance}
        handleRefresh ={this.handleRefresh} /> 
         
    </Div>
  );}
 
}

export default App;


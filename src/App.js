

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

  constructor(props){

    super(props);
    this.state = {
      balance: 10000,
      coinData: [
      {
        name: 'Bitcoin',
        ticker: 'BTC',
        price: 9999.99
      },
      {
        name: 'Ethereum',
        ticker: 'ETH',
        price: 299.33

      },

      {
        name: 'Tether',
        ticker: 'USDT',
        price: 1.0

      },
      {
        name: 'Ripple',
        ticker: 'XRP',
        price: 0.2
      },
      {
        name: 'Bitcoin Cash',
        ticker: 'BCH',
        price: 200
      }
      ]

     
        
      
    }

    this.handleRefresh = this.handleRefresh.bind(this);
  }
  handleRefresh(valueChangeTicker){
    const newCoinsData = this.state.coinData.map( function ({name,ticker, price} ){
    
    let newPrice = price;
    if (valueChangeTicker === ticker){
      const randomPercetnage = 0.995 + Math.random() * 0.01;
      newPrice = newPrice * randomPercetnage;
  
            


        };

        return{
          ticker,
          name,
          price: newPrice
        }
    });


    this.setState({coinData: newCoinsData})

  }
  render(){ 
    
    return (
    <Div >
        <ExchangeHeader />
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData = {this.state.coinData} handleRefresh ={this.handleRefresh} /> 
         
    </Div>
  );}
 
}

export default App;


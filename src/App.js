

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

        /*<Coin name ='Bitcoin' ticker ='BTC' price={9999.55}/>
        <Coin name ='Ethereum' ticker ='ETH' price={299.55}/>
        <Coin name ='Tether' ticker ='USDT' price={1.0}/>
        <Coin name ='Ripple' ticker ='XRP' price={0.2}/>
        */
        
      
    }
  }

  render(){ 
    
    return (
    <Div >
        <ExchangeHeader />
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData = {this.state.coinData} /> 
         
    </Div>
  );}
 
}

export default App;


import React from 'react'
import Coin from '../Coin/Coin'
import styled from 'styled-components'


const Table = styled.table`
  margin:50px auto 50px auto;
  display: inline-block;
  font-size: 1.4rem;
}

`;

const Tr = styled.tr`
width: 1000px ;
`;

 const CoinList = (props) =>  {
  
        return (
            <Table>
            <thead>
              <Tr >
                <th>Name</th>
                <th>Ticker</th>
                <th>Price</th>
                {props.showBalance ? <th>Balance</th> : null}
                <th>Actions</th>
                
    
              </Tr>
            </thead>
            <tbody>
              {
                props.coinData.map(({key,name, ticker,price, balance}) => 
                
                <Coin 
                key={key} 
                handleRefresh = {props.handleRefresh} 
                handleBuy = {props.handleBuy}
                handleSell ={props.handleSell}
                buyInputValue = {props.buyInputValue}
                setbuyInputValue ={props.setbuyInputValue}
                setCoinBalance = {props.setCoinBalance}
                coinBalance = {props.coinBalance}
                name={name} 
                ticker={ticker}
                showBalance = {props.showBalance}
                balance = {balance} 
                price={price}
                tickerId = {key}
                insufficientUsdBalanceMessage ={props.insufficientUsdBalanceMessage}
                setInsufficientUsdBalanceMessage = {props.setInsufficientUsdBalanceMessage}
                insufficientCoinBalanceMessage = {props.insufficientCoinBalanceMessage}
                setInsufficientCoinBalanceMessage = {props.setInsufficientCoinBalanceMessage}
                 />)
              }
    

           
            </tbody>
    
            </Table>
        )
    }

    export default CoinList;










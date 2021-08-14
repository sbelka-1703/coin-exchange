
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Modal from 'react-modal';
import React, { useState } from 'react';


const Td = styled.td`
    border: 1px solid #cccc;
    width: 25vh; `


const H1 = styled.h1`

display: flex;
color: white;

`

const Label = styled.label`
display: flex;
color: white;

`

const Error = styled.div`
display: flex;
color: red;
font-size: 0.82rem;
`



const Coin = (props) =>  {

const[modalIsOpen,setModalIsOpen] = useState(false)


    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          backgroundColor       : 'rgb(38, 45, 52)'  
        }
    };
     

    
    const handleClick = (event) => {
        
        event.preventDefault();

        props.handleRefresh(props.tickerId);
        
    } 




    const handleBuyClick = (event) => {
        
        event.preventDefault();
        
        
        
        props.handleBuy(props.tickerId, props.buyInputValue);
        
    } 

    const handleSellClick = (event) => {
        
        event.preventDefault();
        
        
        
        props.handleSell(props.tickerId, props.buyInputValue);}


    
        return (
            <>
            <tr >
                <Td>{props.name}</Td>
                <Td>{props.ticker}</Td>
                <Td>${props.price}</Td>
                {props.showBalance ? <Td> {props.balance}</Td> : null}

            <Td>
                <button onClick = {() => setModalIsOpen(true)}>Trade</button>
                <form action="#" method="POST">
                <button onClick = {handleClick}>Refresh</button>
                </form>
            </Td>
          </tr>

          <Modal 
          
           isOpen = {modalIsOpen} 
           style = {customStyles} 
           ariaHideApp={false}
           onRequestClose = {() => setModalIsOpen(false) + props.setInsufficientUsdBalanceMessage(false) + props.setInsufficientCoinBalanceMessage(false) }>
           <H1> Trade {props.tickerId.toUpperCase()} </H1> 
           
           <Label htmlFor = "buyInput"> Amount of Coins to Buy/Sell </Label>
           {props.insufficientUsdBalanceMessage && <Error>Insufficient Balance (USD)</Error>}
           {props.insufficientCoinBalanceMessage && <Error>Insufficient Balance of Coins to sell</Error> }
           <input id = "buyInput" 
           type ="number" 
           required
           onChange={event => props.setbuyInputValue(event.target.value)}>
        
            </input>


           <button onClick = {handleBuyClick} >Buy</button>
           <button onClick = {handleSellClick} >Sell</button>
          </Modal>

          </>
        )
    }

 

    
Coin.propTypes = {
    name: PropTypes.string.isRequired, 
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

export default Coin;
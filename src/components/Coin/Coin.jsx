
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Modal from './Modal';
import React, { useState } from 'react';


const Td = styled.td`
    border: 1px solid #cccc;
    width: 25vh; `



const Coin = (props) =>  {

const[IsOpen,setIsOpen] = useState(false)

    
     

    
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
        props.handleSell(props.tickerId, props.buyInputValue);

    

    }

    const toggleModal = () => {
        setIsOpen(!IsOpen);
      }

    
        return (
            <>
            <tr >
                <Td>{props.name}</Td>
                <Td>{props.ticker}</Td>
                <Td>${props.price}</Td>
                {props.showBalance ? <Td> {props.balance}</Td> : null}

            <Td>
                <button onClick = {toggleModal}>Trade</button>
                <form action="#" method="POST">
                <button onClick = {handleClick}>Refresh</button>
                </form>
            </Td>
          </tr>

          <Modal 
          
          
            
           ariaHideApp={false}
           onRequestClose = {() => setIsOpen(false)}
           setbuyInputValue ={props.setbuyInputValue}
           handleBuyClick = {handleBuyClick}
           handleSellClick = {handleSellClick}


           IsOpen ={IsOpen}
           setIsOpen = {setIsOpen}
           toggleModal = {toggleModal}
           />
           
           
           
           
           

          </>
        )
    }

 

    
Coin.propTypes = {
    name: PropTypes.string.isRequired, 
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

export default Coin;
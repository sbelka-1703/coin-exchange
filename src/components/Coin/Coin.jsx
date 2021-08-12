
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Modal from './Modal';
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




const Coin = (props) =>  {

const[modalIsOpen,setModalIsOpen] = useState(false)

    
     

    
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
        setModalIsOpen(!modalIsOpen);
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
           onRequestClose = {() => setModalIsOpen(false)}
           setbuyInputValue ={props.setbuyInputValue}
           handleBuyClick = {handleBuyClick}
           handleSellClick = {handleSellClick}


           modalIsOpen ={modalIsOpen}
           setModalIsOpen = {setModalIsOpen}
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
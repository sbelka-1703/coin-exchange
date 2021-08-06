
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Modal from 'react-modal';
import React, { useState } from 'react';


const Td = styled.td`
    border: 1px solid #cccc;
    width: 25vh; `




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
          backgroundColor       : '#F0AA89'      
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


    const clicked = () => { 
    
        console.log('test')
    }

        return (
            <>
            <tr >
                <Td>{props.name}</Td>
                <Td>{props.ticker}</Td>
                <Td>${props.price}</Td>
                {props.showBalance ? <Td> {props.balance}</Td> : null}

            <Td>
                <button onClick = {() => setModalIsOpen(true)}>Buy</button>
                <button onClick = {clicked}>Sell</button>
                <form action="#" method="POST">
                <button onClick = {handleClick}>Refresh</button>
                </form>
            </Td>
          </tr>

          <Modal 
          
           isOpen = {modalIsOpen} 
           style = {customStyles} 
           ariaHideApp={false}
           onRequestClose = {() => setModalIsOpen(false)}>
           <h1>Buy</h1>
           <h1>${props.tickerId}</h1>
           <input onChange={event => props.setbuyInputValue(event.target.value)}  ></input>
           <button onClick = {handleBuyClick} >Buy</button>

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
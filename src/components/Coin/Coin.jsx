
import PropTypes from 'prop-types';
import styled from 'styled-components'
import React, { useState } from 'react';
import Modal from 'react-modal';
import Buy from '../Modals/Buy'


const Td = styled.td`
    border: 1px solid #cccc;
    width: 25vh; `




const Coin = (props) =>  {

const[modalIsOpen,setModalIsOpen] = useState(false)


    
     

    
    const handleClick = (event) => {
        
        event.preventDefault();

        props.handleRefresh(props.tickerId);
        
    } 
    
    const handleBuyClick = (event) => {
        
        event.preventDefault();
        
       console.log(props.buyInputValue)
       props.handleBuy(props.tickerId, props.buyInputValue);
    

    }

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
            

            <Modal>
            {modalIsOpen && <Buy 
            ariaHideApp={false}
            style = {customStyles}
            tickerId = {props.tickerId}
            setbuyInputValue ={props.setbuyInputValue}
            handleBuy = {props.handleBuy}
            handleBuyClick = {handleBuyClick}
            
            
            />}
            </Modal>
        

            

          </>
        )
    }
//   modalIsOpen={modalIsOpen}
//   handleBuy = {props.handleBuy}
 

    
Coin.propTypes = {
    name: PropTypes.string.isRequired, 
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

export default Coin;
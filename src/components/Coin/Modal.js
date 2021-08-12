import React, { useEffect } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components'


const H1 = styled.h1`

display: flex;
color: white;

`

const Label = styled.label`
display: flex;
color: white;

`



export default (props) => {


Modal.setAppElement()

useEffect((props) => {
  props.setIsOpen(props.IsOpen)
}, [props.IsOpen])

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







    return (
        <>
        
          <Modal
          style = {customStyles}
          IsOpen = {props.IsOpen} 
          setIsOpen = {props.setIsOpen}
          toggleModal = {props.toggleModal}
          >
          
          
          
          <H1> Trade {props.tickerId} </H1> 
        
           <Label for = "buyInput"> Amount of Coins to Buy/Sell </Label>

           <input id = "buyInput" 
           type ="number" 
           required
           onChange={event => props.setbuyInputValue(event.target.value)}>
        
            </input>


           <button onClick = {props.handleBuyClick} >Buy</button>
           <button onClick = {props.handleSellClick} >Sell</button>

          </Modal>
         
          </>
    );
}

 
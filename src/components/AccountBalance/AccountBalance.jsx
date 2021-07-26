import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Section = styled.section`
      
      font-size: 2rem;
      text-align: left;
      padding: 1.5rem 0 1.5rem 5rem;
    `;

const HelicopterButton = styled.button`
    margin: 0.3rem;
    padding: 3px;
    border-radius: 10px;
    cursor: pointer;
    
    `;

const ShowBalanceButton = styled.button`
    margin: 0.3rem;
    padding: 5px;
    font-size: 0.4em;
    background-color: #fff;
    border: 2px solid rgba(112, 111, 211, 0);
    border-radius: 5px;
    outline: none;
    cursor: pointer;

`

 


 const AccountBalance = (props) =>  {
    
        const buttonText = props.showBalance ? 'Hide balance' : 'Show balance'
        let content = null;
        if (props.showBalance){
              content =
              
              <>
              <HelicopterButton onClick = {props.brrr}> 
                  <img src="https://repository-images.githubusercontent.com/248313335/ce39a680-697b-11ea-90da-a31bb68a0024" width="50" alt = 'Print more money' />  
              </HelicopterButton>
              Balance: ${props.amount}
              
              </>
        }
        return (
            <>
            
            <Section >
             {content}
             <ShowBalanceButton onClick = {props.handleBalanceVisibilityChange}>{buttonText}</ShowBalanceButton>
             
            </Section>
              
            </>
        );
    }








AccountBalance.propTypes = {
    amount : PropTypes.number.isRequired
}


export default AccountBalance;
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'



const Td = styled.td`
    border: 1px solid #cccc;
    width: 25vh; `




export default class Coin extends Component {
        constructor(props){
            super(props);
            //The state is only declared within the constructor, with this.state
            this.state = {
                price: this.props.price
            }
            this.handleClick = this.handleClick.bind(this);
        }

    handleClick(event){
        event.preventDefault();

        const randomPercetnage = 0.995 + Math.random() * 0.01;
        // We can only use this.setState to manipulate the state. We 
        this.setState( function(oldState){
            return{
                //
                price: oldState.price * randomPercetnage
            }
            


        });


    }
    render() {
        return (
            <tr className = "coin-row">
                <Td>{this.props.name}</Td>
                <Td>{this.props.ticker}</Td>
                <Td>${this.state.price}</Td>

            <Td>
                <form action="#" method="POST">
                <button onClick = {this.handleClick}>Refresh</button>
                </form>
            </Td>
          </tr>
        )
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired, 
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

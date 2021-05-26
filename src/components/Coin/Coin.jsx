import React, { Component } from 'react'
import './Coin.css';
import PropTypes from 'prop-types';

export default class Coin extends Component {
        constructor(props){
            super(props);
            this.state = {
                price: this.props.price
            }
            this.handleClick = this.handleClick.bind(this);
        }

        /*
        componentDidMount(){
            const callback = () => {

                const randomPercetnage = 0.995 + Math.random() * 0.01;
                
                this.setState( function(oldState){
                    return{
                        price: oldState.price * randomPercetnage
                    }


                })

            }

            setInterval(callback, 1000);
        }

        */

    handleClick(event){
        event.preventDefault();

        const randomPercetnage = 0.995 + Math.random() * 0.01;
        this.setState( function(oldState){
            return{
                price: oldState.price * randomPercetnage
            }
            


        });


    }
    render() {
        return (
            <tr className = "coin-row">
            <td>{this.props.name}</td>
            <td>{this.props.ticker}</td>
            <td>${this.state.price}</td>
            <td>
                <form action="#" method="POST">
                <button onClick = {this.handleClick}>Refresh</button>
                </form>
               
                
            </td>
          </tr>
        )
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired, 
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

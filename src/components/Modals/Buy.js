
import Modal from 'react-modal';


import React from 'react'

function Buy(props) {

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


    
    const handleBuyClick = (event) => {
        
        event.preventDefault();
        
        
        debugger;
        props.handleBuy(props.tickerId, props.buyInputValue);
        
    } 
    return (

        <>
        <div style = {customStyles} />  
          <div>
          <h1>Buy</h1>
          <h1>${props.tickerId}</h1>
          <input onChange={event => props.setbuyInputValue(event.target.value)}  ></input>
          <button onClick = {handleBuyClick} >Buy</button>
        </div>
        </>
    )
}

export default Buy





























// function Buy(props) {



    

//     if (!props.modalIsOpen) return null



//     return (
//         <>
          
          
//           {/* isOpen = {props.modalIsOpen} 
//           
//           ariaHideApp={false}
//           onRequestClose = {() => props.setModalIsOpen(false)} */}
//           <h1>Buy</h1>
//           <h1>${props.tickerId}</h1>
//           
//           

         
//         </>
//     );
// }

// export default Buy;
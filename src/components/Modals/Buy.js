



import React from 'react'

function Buy(props) {

   


    
  
    return (

        <>
          
         
         
          
          <h1>Buy</h1>
          <h1>${props.tickerId}</h1>
          
          <button onClick = {props.handleBuyClick} >Buy</button>
          <input onChange={event => props.setbuyInputValue(event.target.value)}  ></input>
<<<<<<< Updated upstream
          <button onClick = {handleBuyClick} >Buy</button>
          ariaHideApp={false}
          onRequestClose = {() => props.setModalIsOpen(false)}
        </div>
=======
       
          
>>>>>>> Stashed changes
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
          
//           <h1>Buy</h1>
//           <h1>${props.tickerId}</h1>
//           
//           

         
//         </>
//     );
// }

// export default Buy;
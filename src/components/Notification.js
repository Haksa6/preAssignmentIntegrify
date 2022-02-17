import React from 'react'
import '../App.css';



const Notification = ({errorMessage}) => {
  return(
    <div className='errorMsg'>
      {errorMessage}
    </div>
  );
}

export default Notification ;
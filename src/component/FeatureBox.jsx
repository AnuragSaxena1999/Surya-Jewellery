import React from 'react'

 function FeatureBox(props) {
  return (
    <div className='a-box'>
        <div className="a-b-img">
            <img src={props.image}  />
        </div>
        <div className="s-b-text">
            <h4>{props.title}</h4>
            <p >{props.price}</p>
        </div>
        
      
    </div>
  )
};
export default FeatureBox;

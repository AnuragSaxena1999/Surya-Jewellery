import React from 'react'
import FeatureBox from './FeatureBox'
import featureimage from '../images/1000.jpg';
import featureimage1 from '../images/1002.jpg';
import featureimage2 from '../images/payment.jpg';
import featureimage3 from '../images/affordable.jpg';

 function Feature() {
  return (
    <div id='features'>
        <div className="a-container">
            <FeatureBox image={featureimage} title='Free Shipping to All Over India'   />
            <FeatureBox image={featureimage1} title='24 x 7 Customer Support'   />
            <FeatureBox image={featureimage3} title='Minimum Prices in Our Domain'   />
            <FeatureBox image={featureimage2} title='100% Safe & Secure Payments'   />
                    
        </div>
        
        
      
    </div>
  )
};
export default Feature;

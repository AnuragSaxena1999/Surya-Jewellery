
import './App.css';
import Home1 from './component/Home1';

import { Switch, Route } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Footer from './component/Footer';
import AboutUs from './component/Aboutus';




import BacktoTopButton from './component/BacktoTopButton';

import Navbar1 from './component/Navbar1'
import { FloatButton } from 'antd';
import { PlusOutlined, WhatsAppOutlined, InstagramOutlined, PhoneOutlined } from '@ant-design/icons';

//import Gototop from './component/Gototop';



 function App() {
  
  
  return (
    <>
    
      <Navbar1 />
      <Switch>
        <Route exact path="/" component={Home1} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/aboutus" component={AboutUs} />
        
      </Switch>
      <BacktoTopButton />
      <FloatButton.Group
        icon={<PlusOutlined />}  style={{ right: 80   }} shape='circle' type="primary" trigger='click'>
        <FloatButton icon={<InstagramOutlined />} className='plus' shape='square' href="https://www.instagram.com/surya__jeweller" target="_blank" tooltip="Instagram" />
        <FloatButton icon={<WhatsAppOutlined />} className='plus' shape='square' href="https://wa.me/+918595666108?text=Hello%20Surya%20Jewellers%2C%20I%20want%20to%20purchase%20an%20Item." target="_blank" tooltip="Whatsapp " />
        <FloatButton icon={<PhoneOutlined />} className='plus' shape='square' href="tel:859-566-6108" target="_blank" tooltip="Call Us" />
      </FloatButton.Group >
      <Footer />
     
    </>
  );
};
 
export default App;

import React from 'react'
import { useEffect , useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { FloatButton } from 'antd';
import {ArrowUpOutlined} from '@ant-design/icons';
 function BacktoTopButton() {
    const [backtoTopButton , setBackToTopButton] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll" , ()=>{
            if(window.scrollY > 500){
                setBackToTopButton(true)
            }else{
                setBackToTopButton(false)
            }
        })
    },[])
    const scrollUp = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
  return (
    <>
    <div className='App '>
        {backtoTopButton && (
            <FloatButton icon={<ArrowUpOutlined/>} className='plus'  style={{
                position : "fixed",
                bottom:"50px",
                right:"20px",
                height:"40px",
                width:"40px",
                
            
            }} shape='circle' type='primary' tooltip='Back to top'
            onClick={scrollUp}
            ></FloatButton>
        )}
    </div>
     </>
  );
};
export default BacktoTopButton;

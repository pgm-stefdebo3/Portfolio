import React, {useState} from 'react';
import { FiArrowUpCircle } from 'react-icons/fi';
import { Button } from 'reactstrap';
  
const TopButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'auto'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <div className='to-top-button' style={{display: visible ? 'inline' : 'none'}}>
      <Button>
        <FiArrowUpCircle onClick={scrollToTop} />
      </Button>
    </div>
  );
}
  
export default TopButton;
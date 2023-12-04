import React, { useEffect } from 'react';
import "./Landing.css"
import {useNavigate  } from 'react-router-dom'; 
export default function Start() {
  const navigate = useNavigate(); 
  
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate('/cours');
    }, 3000);
    return () => clearTimeout(redirectTimeout);
  }, [navigate]);

  return (
    <div className="start">
      
        <h1 className='hh1'>SQL<br/>AND<br/>PL/SQL</h1>
      
     
    </div>
  );
}

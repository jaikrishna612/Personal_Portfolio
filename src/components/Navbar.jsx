import React, { useState } from 'react'
import jk from '../assets/jk.jpg'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';

const Navbar = () => {
  const[email,setemailvisible] = useState(false);
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className="flex flex-shrink-0 items-center">
            <img className='mx-2 w-10' src={jk} alt="" />
        </div>
        <div className='m-8 flex items-center  gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/jai-krishna-88ba28201/" target='blank'><FaLinkedin/></a>
            <a href="https://github.com/jaikrishna612" target='blank'><FaGithub/></a>
            <div onMouseEnter={() => setemailvisible(true)} onMouseLeave={() => setemailvisible(false)}>
              <BiLogoGmail/>
              {email && <div style={{position: "absolute",top: "100px",transform: "translateX(-50%)",backgroundColor: "#333",color: "white",padding: "10px",borderRadius: "5px",boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",whiteSpace: "nowrap",zIndex: 10,fontSize: "14px",pointerEvents: "none",}}>jaikrishnareddy2002@gmail.com</div>}
            </div>
            
            
        </div>
    </nav>
  )
}

export default Navbar
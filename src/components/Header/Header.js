import React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'

import {Link} from 'react-router-dom'
import "./Header.css"

function Header() {
    return ( 
        <div >
           
            <div className="nav">
                <div className="navMenu">
                <Link to='/'>
                    <a>
                     <span><h1>Oushad</h1></span>
                    </a>
                    </Link>
                
                    <Link to='/'>
                    <a>
                     <span>Home</span>
                    </a>
                    </Link>
                    <Link to='/appointments'>
                      <a>  
                        <span>Appointments for Hospital</span>
                     </a>
                    </Link>
                    <Link to='/medicines'>
                    <a>
                        <span>Medicines for delivery</span>
                    </a>
                    </Link>
                    <Link to='/onlineconsultancy'>
                    <a>
                        <span>Online Consultancy</span>
                    </a>
                    </Link>
                    <Link to='/appointments'>
                    <a>
                        <span>Appointments for Test</span>
                    </a>
                    </Link>
                    <Link to='/Login'>
                      <a>  
                        <span>Login</span>
                     </a>
                     </Link>
                     <Link to='/signup'>
                      <a>  
                        <span>Signup</span>
                     </a>
                     </Link>
                    </div>
            </div>
        </div>
    )
}

export default Header
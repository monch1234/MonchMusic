import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logos.png';
import './index.css';
import NavBar from '../nav-bar/index.js'


const Header = props => {
    return (
        <div className = 'Size'>
            <div className='Header'>
                <div className='logo'>
                    <Link to='/'><img src={Logo} /></Link>
                </div>
                    <NavBar onSearchChange={props.onSearchChange} trackList1={props.trackList1} term={props.term} />
                
            </div>
        </div>
    )
}

export default Header

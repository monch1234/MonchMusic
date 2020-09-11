import React from 'react';
import { FaSearch } from 'react-icons/fa';
import {MdNavigateNext} from 'react-icons/md';
import {Link} from 'react-router-dom';
import './index.css';
import ROUTES from '../../platform/constans/index';



const SeachHidh = props => {
    return (
        <div className='SeachHidh'>
            <div className='SeachHidhText'>
                <div className = 'SechHeaderLeft'>
                    <p>{props.p}</p>
                    <h1>{props.h1}</h1>
                </div>
                 <div className = 'SechHeaderRight'><span><Link to={ROUTES.ALL_SONGS}>{props.link}</Link> <MdNavigateNext /></span></div>
            </div>
        </div>
    )
}

export default SeachHidh

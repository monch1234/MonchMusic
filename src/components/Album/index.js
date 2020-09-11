import React from 'react';
import Logo from '../../assets/images/logos.png';
import {Link} from 'react-router-dom';
import './index.css';

import ROUTES from '../../platform/constans/index'



const Album = props => {
    return (
        <div className='Album' onClick={props.onClick}>
            <div className='SectAlbum'>
                <div className='SectAlbumLogo'>
                    <a to="#" title={props.p}><img src={Logo}  className = 'logo-album'/></a>
                    
                </div>
                <div className='SectAlbumTrackName'>
                    <p><Link to={ROUTES.TRACK_DETAILS.replace(':id', props.fullNameTrack)} className='LinkToAlbum'><span><b>{props.span}</b> <br /></span>
                        <span className = 'SpanTextMusic'>{props.p}</span></Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Album;

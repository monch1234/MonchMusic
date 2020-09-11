import React from 'react';
import {SectCol} from '../index'
import './index.css';

const MusicCont = props => {
    return (
        <div className='MusicCont'>
            <SectCol
                trackList1 = {props.trackList1}
                trackList2={props.trackList2}
                Track={props.Track}
                Display={props.Display}
                TrackName = {props.TrackName}
            />
        </div>
    )
}

export default MusicCont;

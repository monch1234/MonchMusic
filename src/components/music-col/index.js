import React from 'react';
import { FaPlay } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ROUTES from '../../platform/constans/index'
import './index.css'
import { SectCol } from '../index'

const MusicCol = props => {
    const durationTrack = props.durationTrack;
    const NameTrack = props.NameTrack
    const NameAfter = props.NameAfter
    const fullNameTrack = props.fullNameTrack
    return (
        <>
            <div className='MusicCol' >
                <div className='InfoContMusic' key={props.id} >
                    <div className='PlayPause'><button onClick={props.onClick}><FaPlay /></button></div>
                    <div
                        className='InfoTrack'
                        onClick={props.onClick} >
                        <p>
                            <Link
                                className='TrackLink'
                                to={ROUTES.TRACK_DETAILS.replace(':id', fullNameTrack)}>
                                {NameAfter} <br />
                                {NameTrack}
                            </Link>
                        </p>
                    </div>
                </div>
                <div><p>{durationTrack}</p></div>
            </div>
        </>
    )
}

export default MusicCol

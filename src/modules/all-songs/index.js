import React from 'react';
import TrackVisibiliti from '../track-visibiliti';
import {Header, Footer} from '../../components/index';
import '../../assets/styles/global/index.css'


const AllSongs = props => {
    return (
        <div className = 'AllSongs'>
            <Header />
            <TrackVisibiliti  trackList1 = {props.trackList1}/>
            <Footer />
        </div>
    )
}

export default AllSongs
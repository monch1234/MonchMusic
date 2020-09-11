import React from 'react';
import { MusicCol } from '../../components/index'
import H5Player from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import './index.css'

const Track = props => {

    const li = props.trackList1

    const list1 = props.trackList1.map(item => {
        return (
            <div className = 'Track '>
                <MusicCol
                    onClick={() => {
                        this.setState({
                            selectedName: item.title,
                            selectedTrack: item.src,
                            display: 'flex',
                        })
                        localStorage.setItem('src', item.src)
                    }
                    }
                    id={item.id}
                    NameTrack={item.title}
                    durationTrack={item.durationTrack}
                    id={item.id}
                />
            </div>
        )
    })
    return (
        <>
            <div className='sectColTrackVisi'>
                {list1}
            </div>
            {/* <div className="PlayersTrack" style={{ display: this.state.display }}>
                <H5Player
                    header={this.state.selectedName}
                    src={this.state.selectedTrack}
                    autoPlay
                    volume={0.5}
                />
            </div> */}
        </>
    )
}

export default Track
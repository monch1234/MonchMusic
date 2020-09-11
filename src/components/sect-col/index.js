import React, { Fragment } from 'react';
import H5Player from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import { MusicCol } from '../index.js';
import './index.css';

class SectCol extends React.Component {
    state = {
        selectedTrack: null,
        player: "stopped",
        selectedName: null,
        selectedTrack: null,
        display: 'none',
        NameTrack: this.props.NameTrack
    };
    render() {
        const trackList1 = this.props.trackList1
        const li = trackList1.slice(0, 10)
        const li2 = trackList1.slice(10, 20)

        const list1 = li.map(item => {
            return (
                <Fragment key={item.key}>
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
                        style={{
                            fontWeight: item.title === this.state.selectedTrack && "bold"
                        }}
                        key = {item.id}
                        NameAfter={item.title}
                        NameTrack = {item.track}
                        fullNameTrack = {item.fullNameTrack}
                        durationTrack={item.durationTrack}
                    />
                </Fragment>
            )
        })

        const list2 = li2.map(item => {
            return (
                <Fragment key={item.key}>
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
                        style={{
                            fontWeight: item.title === this.state.selectedTrack && "bold"
                        }}
                        id={item.id}
                        NameAfter={item.title}
                        NameTrack = {item.track}
                        fullNameTrack = {item.fullNameTrack}
                        durationTrack={item.durationTrack}
                    />
                </Fragment>
            )
        })

        return (
            <>
                <div className='sectCol col1'>
                    {list1}
                </div>
                <div className='sectCol col2'>
                    {list2}
                </div>
                <div className="PlayersTrack" style={{ display: this.state.display }}>
                    <H5Player
                        header={this.state.selectedName}
                        src={this.state.selectedTrack}
                        autoPlay
                        volume={0.5}
                    />
                </div>
            </>
        );
    }
}

export default SectCol
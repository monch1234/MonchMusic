import React from 'react';
import Logo from '../../assets/images/logo.svg'
import { Album } from '../index'
import './index.css';



export default class SectContent extends React.Component {

    state = {
        selectedTrack: null
    }

    render() {
        const trackList1 = this.props.trackList1
        const li = trackList1.slice(0, 4)

        const Albums = li.map(item => {
            return (
                <div key={item.key}>
                    <Album
                        onClick={() => {
                            this.setState({
                                selectedTrack: item.src
                            })
                            localStorage.setItem('src', item.src)
                        }}
                        span={item.track}
                        p={item.title}
                        key={item.key}
                        fullNameTrack={item.fullNameTrack}
                    />
                </div >
            )
        })

        return (
            <div className='SectContent'>
                {Albums}
            </div>
        )
    }
}

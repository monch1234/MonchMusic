import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logos.png'
import { FaPlay } from 'react-icons/fa'
import './index.css';
import { Header } from '../../components/index'
import Player from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../../assets/styles/global/index.css'

class TrackPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none',
            Track: null,
            TrackDownload:null,
            name: null,
            autoplay: null,
            tr: null
        }
    }

local = localStorage.getItem('src')

    componentDidMount() {
        const { id } = this.props.match.params;
        this.setState({ name: id })
    }

    TrackPage = () => {
        this.setState({
        display: 'block',
        Track:this.local
    })
}

render() {

    return (
        <div className='TrackPage Size'>
            <Header />
            <div className='HomeContainerTrack'>
                <div className='TrackDownloadInfo'>
                    <h1>Скачать Песню {this.id} Бесплатно</h1>
                </div>
                <div className='ContainerTrackPage'>
                    <div className='ContainerTrackPageHome'>
                        <div className='ContainerLogoTrack'>
                            <img src={Logo} alt="Logo" style = {{width:"100%"}}/>
                        </div>
                        <div className='Container'>
                            <div className='ContainerTrack'>
                                <h2>{this.state.name}</h2>
                                <ul>
                                    <li><span>Прослушиваний:</span> 0 раз(а)</li>
                                    <li><span>Жанр:</span> Русские песни</li>
                                    <li><span>Размер:</span> 9 MB</li>
                                    <li><span>Длительность:</span> 3:48</li>
                                    <li><span>Качество:</span> 320 kbps</li>
                                    <li><span>Дата релиза:</span> 19 июнь 2020</li>
                                </ul>
                            </div>
                            <div className='DownloadTrack'>
                                <a href={this.local} download><button>Скачать mp3</button></a>
                                <div className='TrackPageTextInfo'>
                                    <h2 className='InfoTrackPage'>
                                        Скачать песню {this.state.name} в mp3 <br />
                                             с качеством 320 кбит/с, размером файла 7 мб <br />
                                               и длительностью 3:14 бесплатно
                                        </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Track'>
                        <div className='PlayTrack' onClick={this.TrackPage}><FaPlay /></div>
                        <h2 className='InfoTrackPage'>Слушать песню {this.state.name} в онлайн</h2>
                    </div>
                </div>
                <div className="PlayersTrack" style={{ display: this.state.display }}>
                    <Player
                        header={this.props.TrackName}
                        src={this.state.Track}
                        volume={0.4} autoPlay={this.state.autoplay}
                        autoPlay
                        />
                </div>
            </div>
        </div>
    )
}
}
export default TrackPage;
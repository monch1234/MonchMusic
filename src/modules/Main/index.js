import React from 'react';
import './index.css';
import { SeachHidh, MusicCont, SectContent } from '../../components/index';


const Main = props => {
    return (
        <div className='Main Size'>

            <div className='main'>
                <SeachHidh p="Самые яркие новинки!" h1='Новые релизы' link="Показать все" />
                <SectContent
                    trackList1={props.trackList1}
                    trackList2={props.trackList2}

                />
                <SeachHidh p="Рекомендуем послушать!" h1='Популярные' link="Показать все" />
                <MusicCont
                    trackList1={props.trackList1}
                    trackList2={props.trackList2}
                    Track={props.Track}
                    Display={props.Display}
                    TrackName={props.TrackName} />

            </div>
        </div>
    )
}

export default Main

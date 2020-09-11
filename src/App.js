import React, { Component } from 'react';
// import Home from './modules/Home/index.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import TrackPage from './Components/common/TrackPage/index';
import {
  Track1, Track2, Track3, Track4, Track5, Track6, Track7, Track8, Track9, Track10,
  Track11, Track12, Track13, Track14, Track15, Track16, Track17, Track18, Track19, Track20,
} from './assets/track/index.js';

import { Home, TrackPage, AllSongs, TrackVisibiliti } from './modules'

import ROUTES from './platform/constans/index'

import MusicCol from './components/music-col/index.js'

import './assets/styles/global/index.css';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      TrackList1: [
        { key: 'grn', id: 1, title: 'ARTIK & ASTI ', track: 'Девочка танцуй', durationTrack: '2:23', src: Track1, fullNameTrack: ' ARTIK & ASTI - Девочка танцуй' },
        { key: 'grd',  id: 2, title: 'DIOR, Samo & ID', track: 'Положение ¦ Поцелуи на шее', durationTrack: '3:10', src: Track2, fullNameTrack: ' DIOR, Samo & ID - Положение ¦ Поцелуи на шее' },
        { key: 'gre',  id: 3, title: 'JANAGA & TENCA(Fatum)', track: ' Не из вашего круга', durationTrack: '2:48', src: Track3, fullNameTrack:'JANAGA & TENCA(Fatum) - Не из вашего круга' },
        { key: 'gen',  id: 4, title: 'Kambulat', track: ' Томас Шелби', durationTrack: '3:23', src: Track4, fullNameTrack: 'Kambulat - Томас Шелби' },
        { key: 'grwn',  id: 5, title: 'Karna.val', track: 'Психушка', durationTrack: '3:10', src: Track5, fullNameTrack: 'Karna.val - Психушка' },
        { key: 'grq',  id: 6, title: 'KONTRABANDA', track: 'Под техно', durationTrack: '2:21', src: Track6, fullNameTrack: 'KONTRABANDA - Под техно' },
        { key: 'gwn',  id: 7, title: 'Miyagi & Andy Panda', track: 'Kosandra', durationTrack: '2:24', src: Track7, fullNameTrack: 'Miyagi & Andy Panda - Kosandra' },
        { key: 'gsn',  id: 8, title: 'MORGENSHTERN', track: 'Пеннивайз (ОНА - ОНО)', durationTrack: '3:12', src: Track8, fullNameTrack: 'MORGENSHTERN - Пеннивайз (ОНА - ОНО)' },
        { key: 'gqn',  id: 9, title: 'Navai', track: 'Эгоист', durationTrack: '3:09', src: Track9, fullNameTrack: 'Navai - Эгоист' },
        { key: 'grv',  id: 10, title: 'Rauf Faik', track: 'детство', durationTrack: '2:23', src: Track10, fullNameTrack: 'Rauf Faik - детство' },
        { key: 'trn',  id: 11, title: 'SLEEPY', track: ' Дочка прокурора', durationTrack: '2:23', src: Track11, fullNameTrack: 'SLEEPY - Дочка прокурора' },
        { key: 'gzn',  id: 12, title: 'Spiryakoff', track: ' Coca', durationTrack: '3:10', src: Track12, fullNameTrack: 'Spiryakoff - Coca' },
        { key: 'gsrn',  id: 13, title: 'Tenca', track: ' У костра', durationTrack: '2:48', src: Track13, fullNameTrack: 'Tenca - У костра' },
        { key: 'gqrn',  id: 14, title: 'VERBEE', track: ' Бокал Вина', durationTrack: '3:23', src: Track14, fullNameTrack: 'VERBEE - Бокал Вина' },
        { key: 'gbrn',  id: 15, title: 'Xcho', track: ' Гангстер', durationTrack: '3:10', src: Track15, fullNameTrack: 'Xcho - Гангстер' },
        { key: 'gxrn',  id: 16, title: 'Xcho', track: ' Листок', durationTrack: '2:21', src: Track16, fullNameTrack: 'Xcho - Листок' },
        { key: 'grjn',  id: 17, title: 'Артур Саркисян', track: ' Коронавирус уходи', durationTrack: '2:24', src: Track17, fullNameTrack: 'Артур Саркисян - Коронавирус уходи' },
        { key: 'grfn',  id: 18, title: 'Егор Крид & MORGENSHTERN', track: ' Весёлая песня', durationTrack: '3:12', src: Track18, fullNameTrack: 'Егор Крид & MORGENSHTERN - Весёлая песня' },
        { key: 'grnx',  id: 19, title: 'Миша Марвин ', track: 'Не надо быть сильной', durationTrack: '3:09', src: Track19, fullNameTrack: 'Миша Марвин - Не надо быть сильной' },
        { key: 'grln',  id: 20, title: 'Тима Белорусских ', track: 'Тянет к тебе', durationTrack: '2:23', src: Track20, fullNameTrack: 'Тима Белорусских - Тянет к тебе' },
      ],
      term: ''
    }
  }

  search = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.title.
        toLowerCase()
        .indexOf(term.toLowerCase()) > -1;
    })
  }

  onSearchChange = (term) => {
    this.setState(state => {
      term = !state.term
    });
    console.log(term);
    
  }

  render() {
    const { TrackList1, term } = this.state
    const visibleItems = this.search(TrackList1, term)

    return (
      <div>
        <Router>
          <Switch>
            <Route exact path={ROUTES.HOME}
              render={() => <Home
                trackList1={TrackList1}
                term = {this.props.term}
                onSearchChange={this.onSearchChange}
              />
              }
            />
            <Route exact path = {ROUTES.ALL_SONGS} 
            render = {() => <AllSongs trackList1={TrackList1} />}
            
            />
            <Route exact path={ROUTES.TRACK_DETAILS} component={TrackPage} />
          </Switch>

        </Router>
      </div>
    )
  }
}

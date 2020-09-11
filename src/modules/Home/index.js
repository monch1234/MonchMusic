import React from 'react'
import { Header, Footer } from '../../components/index';
import Main from '../Main/index';

const Home = props => {
  return (
    <div>
      <Header
        onSearchChange={props.onSearchChange}
        trackList1={props.trackList1}
        term = {props.term}
      />
      <Main trackList1={props.trackList1}
        trackList2={props.trackList2}
        po={props.po}
      />
      <Footer />
    </div>
  )
}

export default Home

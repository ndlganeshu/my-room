import React from 'react';
import Footer from './components/room/Footer';
import LeftNav from './components/room/LeftNav';
import Main from './components/room/Main';
import TopHeader from './components/room/TopHeader';
import './Room.css';

export default class Room extends React.Component {
  render() {
    return (
      <div className={'flexContainer'}>
        <TopHeader />
        <div className='bodyContainer'>
          <LeftNav />
          <Main />
        </div>
        <Footer />
      </div>
    );
  }
}

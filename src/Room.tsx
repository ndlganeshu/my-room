import React from 'react';
// import TextField from './components/common/TextField';
import Footer from './components/room/Footer';
import LeftNav from './components/room/LeftNav';

import TopHeader from './components/room/TopHeader';
import './Room.css';
export default class Room extends React.Component {
  render() {
    return (
      <div className={'flexContainer'}>
        <TopHeader />
        <div className='bodyContainer'>
          <LeftNav />
        </div>
        <Footer />
      </div>
    );
  }
}

import React from 'react';

import { TopMenu } from './TopMenu';
export default class TopHeader extends React.Component {
  render() {
    return (
      <header>
        <div className={'topHeaderDiv'}>Room</div>
        <TopMenu />
      </header>
    );
  }
}

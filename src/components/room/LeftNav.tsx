import React from 'react';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import Main from './Main';

interface INav {
  id: string;
  display: string;
}

const navs: INav[] = [
  { id: 'home', display: 'Home' },
  { id: 'users', display: 'Users' }
];

export default class LeftNav extends React.Component {
  renderListItems = () => {
    return navs.map((nav: INav) => (
      <li key={nav.id}>
        <Link to={'/' + nav.id}> {nav.display}</Link>
      </li>
    ));
  };

  render(): React.ReactNode {
    return (
      <HashRouter>
        <div className={'mainBody'}>
          <nav>
            <ul>{this.renderListItems()}</ul>
          </nav>
          <Main />
        </div>
      </HashRouter>
    );
  }
}

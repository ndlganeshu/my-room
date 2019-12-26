import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
const UsersPage = (): JSX.Element => <div>Users Page....</div>;
const Register = (): JSX.Element => <div>Register Page....</div>;
const Login = (): JSX.Element => <div>Login Page....</div>;
export default class Main extends React.Component {
  render() {
    return (
      <div className={'bodyRight'}>
        <Switch>
          <Route path='/home' component={Dashboard} />
          <Route path='/users' component={UsersPage} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    );
  }
}

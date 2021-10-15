import React from 'react'
import { Component } from 'react';

import { Redirect } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import { AccountsReactComponent } from 'meteor/meteoreact:accounts'
import { Meteor } from 'meteor/meteor'

class Authentication extends Component {

  render () {
    const arState = this.arState

    return (
      <Switch>
        <Route exact path='/sign-in'          component={arState} />
        <Route exact path='/sign-up'          component={arState} />
        <Route exact path='/forgot-password'  component={arState} />
        <Route exact path='/change-password'  component={arState} />
        <Route exact path='/reset-password/:token' component={arState} />
        <Route exact path='/resend-verification'   component={arState} />
      </Switch>
    )
  }

  arState = ({ match, history }) => {
    const { path, params } = match

    // Cant change password if not logged in.

    if (Meteor.userId() && path !== '/change-password') {
      return (<Redirect to='/' />)
    }

    return (
      <AccountsReactComponent
        history={history}
        route={path}
        token={params.token} // for the reset-password route
      />
    )
  }
}

export default Authentication
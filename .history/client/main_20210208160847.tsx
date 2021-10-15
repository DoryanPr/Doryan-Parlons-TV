import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';

import App from '../imports/ui/components/layout/App';

import { AccountsReact } from 'meteor/meteoreact:accounts'
import '../imports/both/startup';

Meteor.startup(() => {

  Tracker.autorun(() => {
    const userReady: boolean = Meteor.subscribe('users.all').ready();
    if (userReady) {
      ReactDOM.render(<App />, document.getElementById('root'));
    } else {
      //console.log('user not ready');
    }
  })
});

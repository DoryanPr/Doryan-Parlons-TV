import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Login';
import Main from './Main';
import theme from '../theme/NormalTheme';

const App = (props: any): JSX.Element => {

  return (

    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/chats" component={Main} exact />
        </Switch>
      </Router>
    </ThemeProvider>
  ) 
}
export default App;

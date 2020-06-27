import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChannelsList from './Components/ChannelsList/ChannelsList';
import ChannelsSingle from './Components/ChannelsSingle/ChannelsSingle';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import 'dotenv/config';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/channels/:id' component={ChannelsSingle} />
          <Route path='/channels' component={ChannelsList} />
          <Route path='/'>
            <Redirect to='/channels' />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionModal from './session_form/session_modal';
import { AuthRoute } from '../util/route_util';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <h1>WhereBnb?</h1>
      <GreetingContainer />
    </header>


    <AuthRoute path="/login" component={SessionModal} />
    <AuthRoute path="/signup" component={SessionModal} />
  </div>
);



export default App;

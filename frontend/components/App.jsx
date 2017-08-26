import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionModal from './session_form/session_modal';
import SearchContainer from './search/search_container';
import { AuthRoute } from '../util/route_util';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <header id="app-header">
      <h1>WhereBnb?</h1>
      <GreetingContainer />
    </header>


    <Route path="/" component={SearchContainer}/>
    <AuthRoute path="/login" component={SessionModal} />
    <AuthRoute path="/signup" component={SessionModal} />
  </div>
);



export default App;

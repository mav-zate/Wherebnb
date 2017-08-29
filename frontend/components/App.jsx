import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionModal from './session_form/session_modal';
import SearchContainer from './search/search_container';
import { AuthRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import BnbShowContainer from './bnbs/show/bnb_show_container';

const LOGO = "https://s3.amazonaws.com/wherebnb-devo/wherebnb-logo36.png";


const App = () => (
  <div>
    <header id="app-header">
      <img id="wherebnb-logo" src={LOGO}/>
      <GreetingContainer />
    </header>


    <Route exact path="/" component={SearchContainer} />
    <AuthRoute path="/login" component={SessionModal} />
    <AuthRoute path="/signup" component={SessionModal} />
    <Route path="/bnbs/:bnbId" component={BnbShowContainer} />
  </div>
);



export default App;

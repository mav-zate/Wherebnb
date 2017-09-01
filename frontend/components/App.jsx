import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionModal from './session_form/session_modal';
import SearchContainer from './search/search_container';
import { AuthRoute } from '../util/route_util';
import { Route, Link } from 'react-router-dom';
import BnbShowContainer from './bnbs/show/bnb_show_container';
import SearchBar from './search/search_bar';
import SplashPage from '';

const LOGO = "https://s3.amazonaws.com/wherebnb-devo/wherebnb-logo36.png";


const App = () => (
  <div>
    <header id="app-header">
      <div id="app-header-left-half">
        <div>
          <Link to="/">
            <img id="wherebnb-logo" src={LOGO}/>
          </Link>
        </div>
        <Route exact path="/bnbs"component={SearchBar}/>
      </div>
      <GreetingContainer />
    </header>

    <Route path="/" component={SplashPage}/>
    <Route path="/bnbs" component={SearchContainer} />
    <AuthRoute path="/login" component={SessionModal} />
    <AuthRoute path="/signup" component={SessionModal} />
    <Route path="/bnbs/:bnbId" component={BnbShowContainer} />
  </div>
);



export default App;

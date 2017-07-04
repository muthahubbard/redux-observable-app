import React from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { setName } from './actions/userActions';
import { ping, pong } from './actions/pingPongActions';
import { fetchRestaurants, fetchRestaurantsAbort } from './actions/restaurantActions';

const App = ({user, pingPong, setName, ping, pong, fetchRestaurants, fetchRestaurantsAbort}) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </div>

    <h3>{user.name}</h3>

    <button onClick={() => setName('Andy')}>DISPATCH</button>

    <div>
      <h2>Pinging = {pingPong.isPinging.toString()}</h2>
      <p>
        <button onClick={ping}>PING</button>
      </p>
    </div>

    <div>
      <button onClick={ () => fetchRestaurants(1)}>LOAD DATA 1</button>
      <button onClick={ () => fetchRestaurantsAbort()}>Cancel</button>
    </div>

  </div>
);

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    pingPong: state.pingPongReducer
  };
}

export default connect(
  mapStateToProps,
  { setName, ping, pong, fetchRestaurants, fetchRestaurantsAbort }
)(App);


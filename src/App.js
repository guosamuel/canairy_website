import React from 'react';
import Header from './components/Header'
import LogIn from './containers/LogIn'
import UserPage from './containers/UserPage'

import { connect } from 'react-redux'

function App(props) {
  return (
    <div>
      <Header />
      {props.status === 200 ? <UserPage /> : <LogIn />}
    </div>
  );
}

const mapStateToProps = state => {
  return {status: state.status}
}

export default connect(mapStateToProps)(App);

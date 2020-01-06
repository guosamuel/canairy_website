import React from 'react';
import Header from './components/Header'
import LogIn from './containers/LogIn'
import UserPage from './containers/UserPage'

import { connect } from 'react-redux'

function App(props) {
  return (
    <div>
      <Header />
      {!!props.user ? <UserPage /> : <LogIn />}
    </div>
  );
}

const mapStateToProps = state => {
  return {user: state.user}
}

export default connect(mapStateToProps)(App);

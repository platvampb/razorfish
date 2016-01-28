import React from 'react';  
import { render } from 'react-dom';
import { Link, Route, Router } from 'react-router';

import LoginHandler from './components/Login.js';

let App = React.createClass({  
  render: function() {
    return (
      <div className="nav">
        <Link to="app">Home</Link>
        <Link to="login">Login</Link>

        {this.props.children}
      </div>
    );
  }
});

let routes = (  
	<Router>
	  <Route name="app" path="/" component={App}>
	    <Route name="login" path="/login" component={LoginHandler}/>
	  </Route>
	</Router>
);

render(routes, document.body);

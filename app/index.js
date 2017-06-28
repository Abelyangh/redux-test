import React from 'react';
import {render} from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import  App from './components/app';
import  Home from './components/home';

render(<HashRouter>
	      <Switch>
			<Route exact path='/' component={App}></Route>
			<Route path='/home' component={Home}></Route>
		  </Switch>
		</HashRouter>, document.getElementById('app'));
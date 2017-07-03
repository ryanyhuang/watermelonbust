import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import {BrowserRouter, Route} from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory'
const newHistory = createBrowserHistory();

let IndexPage = React.createClass({
	render: function(){
		return(
			/* router shit
			<BrowserRouter>
				<div>
					<Route path={"/:roomid"} component={App}/>
					<Route exact path={"/"} component={Passcode}/>
				</div>
			</BrowserRouter>*/
			<App/>
		);
	}
});

ReactDOM.render(
	<IndexPage />,
	document.getElementById('root')
);

import React from 'react';
import './Heart.css';

let Heart = React.createClass({

	render: function(){
		return (
			<div className="heart" style={{animation: 'flowOne 2s linear'}}>
				<p>+1</p>
				<i className="fa fa-heart"></i>
			</div>

			);
		
	}


});

export default Heart;
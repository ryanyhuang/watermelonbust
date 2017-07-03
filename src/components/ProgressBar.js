import React from 'react';

let ProgressBar = React.createClass({
	render: function(){
		return(
			<canvas ref={(c) => this.context = c.getContext('2d')}
				width="600px" height="70px"/>
		);
	},

	componentDidMount: function(){
		this.context.fillStyle = "lightgray";
		this.context.fillRect(0,0,600,70);
		this.context.fillStyle = "black";
		this.context.fillRect(10,10,580,50);


		//draw letters mark
		this.context.fillStyle = "gray";
		this.context.fillRect(235, 0, 3, 70);

		//draw in current sales
		this.context.fillStyle = "green";
		var count = this.props.sales;
		for(var i = 0; i < count; i++){
			var x = 10+i*10;
			var y = 10;
			var width = 8;
			var height = 50;
			this.context.fillRect(x, y, width, height);

		}

	},



});

export default ProgressBar;
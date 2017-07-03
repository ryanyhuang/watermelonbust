import React from 'react';

let TestComp = React.createClass({
	render: function(){
		var extramessage = (<p> I can't drink </p>);
		if(this.state.age >= 21 ){
			extramessage = (<p> You can drink!</p>);
		}
		if(this.state.age >= 35){
			extramessage = (<p> You can run for president! </p>);
		}
		
		return (
			<div>
				<p> Hi my name is {this.props.name} {this.props.lastname}</p>
				<p> I am {this.state.age} years old </p>
				{extramessage}
				<button onClick={this.clicked}> clickme! </button>
			</div>
		);

	},

	getInitialState: function(){
		return({
			age: 19,
			gender: "male"
		});
	},

	clicked: function(){
		this.setState({
			age: this.state.age + 1
		});
	},

});


export default TestComp;
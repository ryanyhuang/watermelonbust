import React from 'react';
import ReactDOM from 'react-dom';

var sizes = ["xsmall", "small", "medium", "large", "xlarge"];

let SizeSelector = React.createClass({

	getInitialState: function(){
		return {
			size: "none",
			leftOffset: 0
		};
	},

	render: function(){
		
		var tri;
		if(this.state.size === "none"){
			//let tri stay null
		} else {
			var styleStr = this.state.leftOffset + 'px';
			tri = (<div className="triangle" style={{left: styleStr}}></div>);
		}

		var tabs = [];
		for(var i in sizes){
			tabs.push(<div key={i} className="menu" onClick={this.optionClicked}>{sizes[i]}</div>);
		}


		return (
			<div className="wrapper">
				<div className="selector">
					{tri}
				</div>
				<div className="nav">
					{tabs}
				</div>
			</div>
		);
	},

	optionClicked: function(evt){

		var newSize = evt.target.innerHTML;
		//get width of whole thing
		const element = ReactDOM.findDOMNode(this);
		var specs = element.getBoundingClientRect();
		//get width of each tab
		var width = evt.target.getBoundingClientRect().width;

		//find halfway point
		var half = specs.width/2;
		//find out how far over item is 
		var count = sizes.indexOf(newSize);
		//calculate new offset
		var newOffset = half + width*(count-2) - 10;
		this.props.cb(newSize);
		this.setState({
			size: newSize,
			leftOffset: newOffset
		});
	}

});

export default SizeSelector;
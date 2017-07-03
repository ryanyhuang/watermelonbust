import React from 'react';
import ReactDOM from 'react-dom';
import Heart from './Heart';

var heartArray = [];
var heartCount = 0;

let Shirt = React.createClass({

	getInitialState: function(){
		return {
			count: 0,
			reaction: "none"
		};
	},
	render: function(){
		var image;

		var reaction;

		if(this.state.reaction === "heart"){
			reaction = <Heart/>;
		}

		if(this.props.item === "Black Shirt"){
			image = "http://i.imgur.com/Y0khruJ.png"
		}
		if(this.props.item === "Black Tank"){
			image = "http://i.imgur.com/45837oP.png";
		}
		return(
			<div className="shirt">
				<div ref={(ref) => this.hearts = ref}
					className="heartsBox">
					{reaction}
				</div>
				<div >
					<p style={{marginBottom: '0px'}}>{this.props.item}: {this.props.count}</p>
					<img src={image} alt="pic of item" 
						height="300px"
						width="300px"
						onClick={this.clicked}
						ref={(ref) => this.shirtImage = ref}
						style = {{border: '2px solid red', borderRadius: '15px'}}/>

				</div>
				
				{/*<div>
					<input type="number" min="0" 
							defaultValue="0" onChange={this.callback}/>
				</div>*/}
			</div>

		);
	},

	/*reports to parent a new count, clicking left side of image
	  causes count to decrement, clicking right side causes increase
	  count must be between 0 and 10 inclusive*/
	clicked: function(evt){
		/*
		console.log("x: " + evt.clientX);
		console.log("y: " + evt.clientY);*/
		var newCount = this.props.count + 1;

		const element = ReactDOM.findDOMNode(this);
  		var specs = element.getBoundingClientRect();

  		var relativeX = evt.clientX - specs.left;
  		if(relativeX < 150){
  			newCount -= 2;
  		}

  		if(newCount < 0) newCount = 0;
  		if(newCount > 10) newCount = 10;

		this.props.cb(this.props.item, newCount);

		heartArray.push(<Heart key={heartCount}/>);
		heartCount++;
		ReactDOM.render(
			<div>{heartArray} </div>,
			this.hearts
		);
/*
  		if(this.state.reaction === "heart"){
			this.setState({reaction: "none"});
  		}
		this.setState({reaction: "heart"});

		/*reset state after heart is rendered
		setTimeout(function(){
			console.log('ran');
			this.setState({
				reaction: "none"
			});
			this.render();
		}.bind(this), 2000); */

	}

});

export default Shirt;
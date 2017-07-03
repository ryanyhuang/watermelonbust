import React from 'react';
import Shirt from './Shirt';
import SizeSelector from './SizeSelector';

let ShirtSaleComp = React.createClass({

	getInitialState: function(){
		return {
			size: "",
			blackShirtCount: 0,
			blackTankCount: 0,
			name: ""

		};
	},

	render: function(){
		return (
                
               	<div>
               		<div>
               			<SizeSelector cb={this.changeSize}/>
               		</div>
                	<div className="shirtsSection">
	                    <Shirt item="Black Shirt" cb={this.changeCount}
	                    	count={this.state.blackShirtCount}/>
	                    <Shirt item="Black Tank" cb={this.changeCount}
	                    	count={this.state.blackTankCount}/>
                    </div>

                    <div>
                    	<input type="text" placeholder="Enter name here"
                    			onChange={this.updateName}/>
                    	<button onClick={this.makeOrder}>Order shirts!</button>
                    </div>
                </div>
			);
	},

	changeCount: function(type, newCount){
		//console.log("updating %s to new count of %d", type, newCount);
		if(type === "Black Shirt"){
			this.setState(
				{blackShirtCount: newCount}
			);
		}

		if(type === "Black Tank"){
			this.setState(
				{blackTankCount: newCount}
			);			
		}
	},

	changeSize: function(newSize){
		this.setState({
			size: newSize
		});

	},

	updateName: function(evt){
		//console.log("newname: %s", evt.target.value);
		this.setState(
			{name: evt.target.value}
		);
	},

	makeOrder: function(){
		var bTC = this.state.blackTankCount;
		var bSC = this.state.blackShirtCount;
		var name = this.state.name;
		var size = this.state.size;
		if(size === ""){
			alert("No size chosen");
			return;
		}
		if(bTC > 0 || bSC > 0){
			if(name.length > 0){

				var order = name + ": " + bTC + " black tank(s), " +
								bSC + " black shirt(s) in " + size + ".";
				alert("Succes!\n" + order);
			} else {

				alert("No name entered");
			}
			
		} else {
			alert("No shirts selected");
		}

	}


});

export default ShirtSaleComp;
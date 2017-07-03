import React from 'react';
import ShirtSaleComp from './ShirtSaleComp';
import ProgressBar from './ProgressBar';


let ShirtSales = React.createClass({
	render: function(){
		return(
            <div className="shirtcontainer" style={{width: '100%'}}>
            	{/*<ProgressBar sales="30"/>*/}
				<ShirtSaleComp/>
            </div>
		);
	}



});

export default ShirtSales;
import React from 'react';
import './App.css';

import ShirtSales from './ShirtSales';

/*
let headerStyle = {
  fontSize: 25,
  color: "red"
}*/

let App = React.createClass({

    getInitialState: function() {
        return ({ 
            screen: "search"
        });
    },

    render: function() {
        
        return (
            <div className="App">
                <ShirtSales/>
            </div>
        );
    },

    switchScreens: function(newScreen) {
        this.setState({
            screen: newScreen
        });

    }

});

export default App;








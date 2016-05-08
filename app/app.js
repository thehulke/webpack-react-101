import React from 'react';
import ReactDOM from 'react-dom';
import ExampleComp from './js/components/example.comp.js';
import Chart from './js/components/chart.jsx';
import styles from './css/style.scss';

let App = React.createClass({
    render: function() {
        return (
            <div>
            	<Chart/>
            </div>

        );
    }
});

ReactDOM.render(<App/>, document.getElementById('app'));

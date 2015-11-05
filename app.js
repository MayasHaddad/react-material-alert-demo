var React = require('react');
var ReactDOM = require('react-dom');

var Alert = require('react-material-alert').Alert;
var Alerts = require('./AlertsSample');
var App = React.createClass({
    
    render: function() {
        return <div>
                <Alert alert={Alerts[0]} id={"alert1"} />
                
                <Alert alert={Alerts[1]} id={"alert2"} />
                
                <Alert alert={Alerts[2]} id={"alert3"} />
                
                <Alert alert={Alerts[3]} id={"alert4"} />
            </div>;
    }
});
ReactDOM.render(<App />,
             document.getElementById('app'));
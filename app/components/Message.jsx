const React = require('react');

const Message = React.createClass({
    render: function() {
        return (
            <div>
                <h3>The temperature in {this.props.location} is {this.props.temp}</h3>
            </div>
        )
    }
});

module.exports = Message;
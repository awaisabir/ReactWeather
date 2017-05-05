const React = require('react');

const Form = React.createClass({
    onFormSubmit: function(event) {
        event.preventDefault();

        let location = document.getElementById('location').value;

        if(location.length > 0) {
            document.getElementById('location').value = '';
            this.props.onSearch(location);
        }

    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" id="location"/>
                    <button className="button hollow expanded">Get Weather</button>
                </form>
            </div>
        )
    }
});

module.exports = Form;
const React = require('react');
const Form = require('Form');
const Message = require('Message');
const openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        }
    },
    handleSearch: function(location) {
        let that = this;

        this.setState({isLoading: true});

        openWeatherMap.getTemp(location)
        .then(function(temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function(errorMessage) {
            that.setState({isLoading: false});
            alert('This city does not exist!');
            that.setState({
                location: '',
                message: ''
            })
        })
    },
    render: function() {
        let { isLoading, location, temp } = this.state;

        function renderMessage() {
            if(isLoading) {
                return <h3 className="text-center">Fetching Weather...</h3>;
            } else if (temp && location) {
                return <Message location={location} temp={temp}/>;
            }
        }

        return (
            <div>
                <h2 className="text-center">Get Weather</h2>
                <Form onSearch={this.handleSearch}></Form>
                {renderMessage()}
            </div>
        )
    }
})

module.exports = Weather;
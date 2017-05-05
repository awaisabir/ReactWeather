const React = require('react');
const Form = require('Form');
const Message = require('Message');
const openWeatherMap = require('openWeatherMap');
const ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        }
    },
    handleSearch: function(location) {
        let that = this;

        this.setState({
            isLoading: true,
            errorMessage: undefined
        });

        openWeatherMap.getTemp(location)
        .then(function(temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function(e) {
            that.setState({
                isLoading: false, 
                errorMessage: e.message
            });
        })
    },
    render: function() {
        let { isLoading, location, temp, errorMessage } = this.state;

        function renderMessage() {
            if(isLoading) {
                return <h3 className="text-center">Fetching Weather...</h3>;
            } else if (temp && location) {
                return <Message location={location} temp={temp}/>;
            }
        }

        function renderError() {
            if(typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage}/>
                )
            }
        }

        return (
            <div>
                <h2 className="text-center page-title">Get Weather</h2>
                <Form onSearch={this.handleSearch}></Form>
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
})

module.exports = Weather;
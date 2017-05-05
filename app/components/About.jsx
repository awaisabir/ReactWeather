const React = require('react');

var About = React.createClass({
    render: function() {

        return (
            <div>
                <h2 className="text-center page-title">About</h2>
                <p>This app is made to explore and try out what I have learned with ReactJS</p>
                <div className="container">
                    <div className="columns medium-4">
                        <p><a href="https://www.github.com/awaisabir/ReactWeather" target="_blank">Github Repo</a></p>   
                    </div>
                    <div className="columns medium-4">
                        <p><a href="https://www.github.com/awaisabir/" target="_blank">My Github</a></p>                           
                    </div>
                     <div className="columns medium-4">
                        <p><a href="https://www.linkedin.com/in/awaisabir" target="_blank">Linkedin</a></p>                           
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = About;
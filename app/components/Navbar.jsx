const React = require('react');
const { Link } = require('react-router');

let Navbar = React.createClass({
    render: function() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="examples">Examples</Link></li>
                </ul>
            </div>
        );
    }
});

module.exports = Navbar;
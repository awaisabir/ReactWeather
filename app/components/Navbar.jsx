const React = require('react');
const { Link, IndexLink } = require('react-router');

let Navbar = React.createClass({
    render: function() {
        return (
            <div>
                <ul>
                    {/* Link allows to use custom styles to active links */}
                    <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
                    <li><Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
                    <li><Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
                </ul>
            </div>
        );
    }
});

module.exports = Navbar;
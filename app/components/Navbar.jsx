const React = require('react');
const { Link, IndexLink } = require('react-router');

let Navbar = React.createClass({
    onSearch : function(e) {
        e.preventDefault();
        
        let city = document.getElementById('city').value;
        let encodedURL = encodeURI(city);

        if(city.length > 0) {
            document.getElementById('city').value = '';
            window.location.hash = `#/?location=${city}`
        }
    },
    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
                        <li><Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
                        <li><Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li><input type="search" placeholder="Search Weather here" id="city"/></li>
                            <li><input type="submit" className="button" value="Get weather"/></li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Navbar;
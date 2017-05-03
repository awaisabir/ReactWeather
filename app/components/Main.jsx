const React = require('react');
const NavbarComponent = require('Navbar');

let Main = React.createClass({
    render: function() {
      return (
        <div>
          <NavbarComponent></NavbarComponent>
          <h2>Main Component</h2>
          {this.props.children}
        </div> 
      )
    }
});

module.exports = Main;
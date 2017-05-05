const React = require('react');
const NavbarComponent = require('Navbar');

let Main = React.createClass({
    render: function() {
      return (
        <div>
          <NavbarComponent></NavbarComponent>
          <div className="row">
            <div className="columns medium-6 large-4 small-centered">
              {this.props.children}
            </div>
          </div>
        </div> 
      )
    }
});

module.exports = Main;
var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
var MainComponent = require('Main');
var WeatherComponent = require('Weather');
var AboutComponent = require('About');
var ExamplesComponent = require('Examples');

// load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!sass!appStyle');
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={MainComponent}>
      <Route path="about" component={AboutComponent}/>
      <Route path="examples" component={ExamplesComponent}/>
      <IndexRoute component={WeatherComponent}/>
    </Route>
  </Router>,
  document.getElementById('app')
);

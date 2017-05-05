const React = require('react');
import {Link} from 'react-router';

var Examples = React.createClass({
    render: function() {

        return (
            <div>
                <h1 className="text-center">Examples</h1>
                <p>Here are a few example locations to try out</p>
                <ol>
                    <li>
                        <Link to='/?location=Ottawa'>Ottawa, ON</Link>
                    </li>
                    <li>
                        <Link to='/?location=Toronto'>Toronto, ON</Link>
                    </li>
                </ol>
            </div>
        )
    }
})

module.exports = Examples;
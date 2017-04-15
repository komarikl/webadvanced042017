var test = require('./test.js');
console.log(test());

const HelloWorld = React.createClass({
    render: function() {
        return (
            <h1>Hello World</h1>
        )
    }
});

ReactDOM.render(<HelloWorld />, document.getElementById('area'));
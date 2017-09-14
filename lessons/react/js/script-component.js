'use strict';

let Component = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        age: React.PropTypes.number,
        adress: React.PropTypes.string.isRequired
    },
    getDefaultProps: function () {
        return {
            name: 'Anon.',
            adress: 'planet Earth',
        }
    },
    render: function () {
        return React.createElement("div", {
            className: "world",
            style: {
                color: 'red'
            }
        }, "Hello, " + this.props.name + "! " + this.props.age + " age and live in " + this.props.adress)
    }
});

ReactDOM.render(
    React.createElement(Component, {
        age: 25,
        name: "Vasya"
    }),
    document.getElementById('root')
);
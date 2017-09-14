'use strict';

let Component = React.createClass({
    propTypes: {
        text: React.PropTypes.string.isRequired
    },
    getDefaultProps: function () {
        return {
            text: ''
        }
    },
    getInitialState: function () {
        return {
            text: this.props.text
        }
    },
    changeInputText: function (e) {
        this.setState({
            text: e.target.value
        });
    },
    render: function () {
        return React.createElement("div", null,
            React.createElement("input", {
                value: this.state.text,
                onChange: this.changeInputText,
            }),
            React.createElement("div", null, "Hello " + this.state.text)
        )
    }
});

ReactDOM.render(
    React.createElement(Component, {
        text: 'World'
    }),
    document.getElementById('root')
);
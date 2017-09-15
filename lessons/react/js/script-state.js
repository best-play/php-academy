'use strict';

let mixins = {
    log_data: function (method, args) {
        console.log(this.name + ': ' + method, args);
    },
    componentWillUpdate: function () {
        this.log_data('componentWillUpdate', arguments);
    },
    componentDidUpdate: function (oldProps, oldState) {
        this.log_data('componentDidUpdate', arguments);
        if (this.state.text.length > 10) {
            this.replaceState(oldState);
        }
    },
    componentWillMount: function () {
        this.log_data('componentWillMount', arguments);
    },
    componentDidMount: function () {
        this.log_data('componentDidMount', arguments);
    },
    componentWillUnmount: function () {
        this.log_data('componentWillUnmount', arguments);
    }
};

let Component = React.createClass({
    name: 'Component',
    mixins: [mixins],
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
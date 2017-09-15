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
        let a_params = {
            href: "#",
            title: "Text"
        };
        return (
            <div>
                <div data-test="123" className="world" style={{color: "red"}}>
                    Hello, {this.props.name}{this.props.age} age and live in {this.props.adress}
                </div>
                <div><a href={a_params.href}>123</a></div>
            </div>
        )
    }
});

ReactDOM.render(
    <Component age={25} name="Vasya" />,
    document.getElementById('root')
);
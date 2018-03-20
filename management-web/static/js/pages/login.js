require('../../css/pages/login.scss');

const React = require('react');
const render = require('react-dom').render;

class component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="index">
            </div>
        )
    }
}

function select(state) {
    return {
        login: state.login
    }
}

let Login = connect(select)(component);

render(
    <Provider store={store}>
        <Login />
    </Provider>,
    document.getElementById("login")
);
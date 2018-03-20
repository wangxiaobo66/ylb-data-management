require('../../css/pages/index.scss');

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
        index: state.index
    }
}

let Index = connect(select)(component);

render(
    <Provider store={store}>
        <Index />
    </Provider>,
    document.getElementById("index")
);
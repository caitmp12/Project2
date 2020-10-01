const React = require("react");
const Layout = require("../layout.jsx");

class Show extends React.Component {
    render() {
        const { prompts } = this.props
        // console.log(prompts)
        return (<Layout title="Index">
            <h1>Hi</h1>
        </Layout>)
    }
}

module.exports = Show;
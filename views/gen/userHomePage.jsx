const React = require("react");
const Layout = require("../layout.jsx");

class UserHomePage extends React.Component {
    render() {
        const { prompts } = this.props
        console.log(prompts)
        return (<Layout title="Index">
            <h2>Today's writing prompt is...</h2>
            <h3>{prompts[Math.floor(Math.random()*prompts.length)]}</h3>
            <a href="/gen/write"><button>Write Today's Prompt</button></a>
            </Layout>)
        }
    }

module.exports = UserHomePage;
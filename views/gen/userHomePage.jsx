const React = require("react");
const Layout = require("../layout.jsx");

class UserHomePage extends React.Component {
    render() {
        const { prompts } = this.props
        console.log(prompts)
        return (<Layout title="Index">
           <h1>hi</h1>
            <a href="/gen/write"><button>Write Today's Prompt?</button></a>
            <ul>
                {prompts.map((prompt, index) => {
                return <a href={`/prompts/${index}`}><li>{prompt}</li></a>
                })}
            </ul>
            </Layout>)
        }
    }

module.exports = UserHomePage;
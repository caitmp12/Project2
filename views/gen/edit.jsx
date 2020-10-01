const React = require("react");
const Layout = require("../layout.jsx");

class Write extends React.Component {
    render() {
        const { prompts } = this.props
        // console.log(prompts)
        return (<Layout title="Index">
            <form action="/show/" method="post">
                <label for="writingPrompt">Prompt Rewrite</label><br />
                <textarea id="writePrompt" name="writePrompt" rows="7" cols="60"></textarea> <br />
                <input type="submit" value="Post" />
            </form>
        </Layout>)
    }
}

module.exports = Write;
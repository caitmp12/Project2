const React = require("react");
const Layout = require("../layout.jsx");

class Write extends React.Component {
    render() {
        const { prompts } = this.props
        // console.log(prompts)
        return (<Layout title="Index">
            <form action="/gen/user" method="post">
                <label for="writingPrompt">Prompt Rewrite</label><br />
                Title: <input type="text" name="title" /><br />
                Post: <textarea id="post" name="post" rows="7" cols="60"></textarea> <br />
                <input type="submit" value="Update" />
                </form>
        </Layout>)
    }
}

module.exports = Write;
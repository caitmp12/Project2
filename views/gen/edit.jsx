const React = require("react");
const Layout = require("../layout.jsx");

class Write extends React.Component {
    render() {
        const { posts } = this.props
        // console.log(prompts)
        return (<Layout title="Index">
            <form action={`/gen/edit/${posts._id}?_method=PUT`} method="post">
                <label for="writingPrompt">Prompt Rewrite</label><br />
                Title: <input type="text" value={`${posts.title}`} name="title" /><br />
                Post: <textarea id="post" name="post" rows="7" cols="60">{`${posts.post}`}</textarea> <br />
                <input type="submit" value="Update" />
                </form>
            {/* <a href={`/gen/edit`}><button>Edit Post</button></a> */} 
        </Layout>)
    }
}

module.exports = Write;
const React = require("react");
const Layout = require("../layout.jsx");

class Show extends React.Component {
    render() {

        const { posts } = this.props
        console.log(posts)
        return (<Layout title="Index">
            <h3>Notebook</h3>
            <ul>
                <li>
                    <a href="/gen/post">{posts.title}</a><br />
                    {posts.post}
                </li>
            </ul>  
            <a href={`/gen/edit/${posts._id}`}><button>Edit Post</button></a>           
        </Layout>)
    }
}

module.exports = Show;
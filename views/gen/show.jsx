const React = require("react");
const Layout = require("../layout.jsx");

class Show extends React.Component {
    render() {

        const { posts } = this.props
        console.log(posts)
        return (<Layout title="Index">
            {/* <ul>
                <li>Saved Resources</li>
                <li>Community</li>
            </ul>
            <h2>Today's writing prompt is...</h2>
            <h3>{today}</h3> */}
            {/* <a href="/gen/write"><button>Write Today's Prompt</button></a> */}
            <h3>Notebook</h3>
            <h3>
                <ul>
                    <li>
                        <a href="/gen/post">{posts[1].title}</a><br />
                        {posts[1].post}
                    </li>
                </ul>                
            </h3>
            <a href="/gen/edit"><button>Edit Post</button></a>
        </Layout>)
    }
}

module.exports = Show;
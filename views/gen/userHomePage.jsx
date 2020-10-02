const React = require("react");
const Layout = require("../layout.jsx");

class UserHomePage extends React.Component {
    render() {
        const { prompts } = this.props
        console.log(prompts)

        const today = prompts[Math.floor(Math.random() * prompts.length)]

        const { posts } = this.props 
        console.log(posts)
        return (<Layout title="Index">
           <ul>
                <li>Saved Resources</li>
                <li>Community</li>
            </ul>
             <h2>Today's writing prompt is...</h2>
            <h3>{today}</h3>
            <a href="/gen/write"><button>Write Today's Prompt</button></a>
            <h3>Notebook</h3>
            <h3>
                {
                    posts.map((posts, i) => {
                        return (
                            <ul>
                                <li>
                                    <a href="/gen/post">{posts.title}</a><br/>
                                    {posts.post}
                                </li>
                            </ul>
                        )
                    })
                }
            </h3>
        </Layout>)
        }
    }

module.exports = UserHomePage;
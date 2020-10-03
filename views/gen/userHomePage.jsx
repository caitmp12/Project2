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
           <ul class="nav">
                <li>Account</li>               
                <li>Saved Resources</li> 
                <li>Community</li>
            </ul>
            <br/>
            <br/>
            <div class="prompt">
             <h2>Today's writing prompt is...</h2>
            <h3 class ="today">{today}</h3>
            </div>
            <a href="/gen/write"><button>Write Today's Prompt</button></a>
            <br/>
            <br/>
            <br/>
            <h3 class="notebook">Notebook</h3>
            <h3>
                {
                    posts.map((posts, i) => {
                        return (
                            <ul id="post">
                                <li>
                                    <a href={`/gen/post/${posts._id}`}>{posts.title}</a><br/>
                                    {posts.post}<br/>
                                    <form action={`/gen/post/${posts._id}?_method=DELETE`} method="POST">              
                                    <input type="submit" value="DELETE"></input>
                                    </form>
                                </li>
                            </ul>
                        )
                    })
                }
            </h3>
            <footer>
                <a href="/auth/logout" id="logout">Logout of Account</a>
            </footer>
        </Layout>)
        }
    }

module.exports = UserHomePage;
const React = require("react");
const Layout = require("./layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="The Title!">
        <ul>
          <li>Community</li>
          <li>CP Match</li>
          <li>Resources</li>
        </ul>
        <h1> Welcome to Writing Prompts Daily! For today's prompt please <a href="/auth/login">Log In</a> or <a href="/auth/signup">Sign Up</a><br/>
        Happy Writing!
        </h1>
      </Layout>
    );
  }
}

module.exports = Index;



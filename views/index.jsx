const React = require("react");
const Layout = require("./layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="The Title!">
        <div>
        <br/>
        <br/> 
        <br/>  
        <br/> 
        <h1 class="welcome-page"> Welcome to Writing Prompts Daily! For today's prompt please <a href="/auth/login">(Log In)</a> or <a href="/auth/signup">(Sign Up)</a><br/>
        <br/>
        Happy Writing!
        </h1>
        </div>
      </Layout>
    );
  }
}

module.exports = Index;



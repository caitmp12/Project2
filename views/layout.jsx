const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/style.css"/>
          <script src="/js/app.js"></script>
          <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap" rel="stylesheet"></link>
        </head>
        <body>
          <header>
            <h1 class="site-name">Writing Prompts Daily</h1>
          </header>
          <main>{this.props.children}</main>
          <footer>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = Layout;
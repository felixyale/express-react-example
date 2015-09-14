var React = require('react');

var DefaultLayout = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>{this.props.title || 'hello world'}</title>
          <link rel="stylesheet" type="text/css" href="/css/base.css"/>
        </head>
        <body>
          <div className="container">
            {this.props.children}
          </div>
        </body>
      </html>
    );
  }
});

module.exports = DefaultLayout;

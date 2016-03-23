var React = require('react');
var $ = require('jquery');

var App = React.createClass({

  getInitialState: function(){
    return {
      username:'',
      password:'',
      url: ''
    };
  },
  //
  // componentDidMount: function() {
  //   this.serverRequest = ajax.get(this.props.source, function (result) {
  //     var lastGist = result[0];
  //     this.setState({
  //       username: lastGist.owner.login,onte
  //       url: lastGist.html_url
  //     });
  //   }.bind(this));
  //   console.log(this.state.url)
  // },

  componentDidMount: function() {
    console.log('asdf')
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "http://162.144.199.112/frenchbakerws/Service1.asmx/GetCustomerName",
        dataType: "json",
        success: function(msg) {
          console.log(msg)
          }
      });

  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },


  onChangeUserName:function(e){
     this.setState({username: e.target.value});
  },
  onChangePassword:function(e){
     this.setState({password: e.target.value});
  },

  login: function(){
    var state = this.state;

    this.setState({
        username: state.username,
        password : state.password,

    });
    console.log(state.username+state.password);

    this.componentDidMount ();

  },

  render: function () {

    var btnLogin = <button onClick={this.login}> LOG IN </button>;

    return (
      <div>
        <h1>Log In</h1>
        <label for="username"> Username </label>
        <input name="username" value={this.state.username} onChange={this.onChangeUserName} type="text"/>
        <p>
        <label for="password"> Password </label>
        <input name="password" value={this.state.password} onChange={this.onChangePassword} type="password"/>
        </p>
        {btnLogin}
      </div>
    );
  }
});

React.render(<App source="http://162.144.199.112/frenchbakerws/service1.asmx/GetCustomerName" />, document.body);

var React = require('react');
var $ = require('jquery');
var RecordTable = require('./RecordTable');

var App = React.createClass({

  getInitialState: function(){
    return {
      email:'',
      password:'',
      url: '',
      list:'',
      records: []
    };
  },

  // componentDidMount: function() {
  //   this.serverRequest = $.get(this.props.source, function (result) {
  //     var customer = result[0];
  //     this.setState({
  //       email: customer.Fullname,
  //     });
  //   }.bind(this));
  // },

  componentDidMount: function() {


  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },


  onChangeEmail:function(e){
     this.setState({email: e.target.value});
  },
  onChangePassword:function(e){
     this.setState({password: e.target.value});
  },

  login: function(){
    var state = this.state;
    var email = state.email;
    var password = state.password;
    var records = state.records;
      $.ajax({
          type: "POST",
          contentType: "application/json; charset=utf-8",
          url: "http://162.144.199.112/frenchbakerws/Service1.asmx/ValidateBorrowerLogin",
          data: '{ email: "' + email + '", password: "' + password +'"  }',
          dataType: "json",
          success: function(msg) {
            console.log(msg)
            console.log('done')
            this.setState({
                list: msg,
                records: this.state.records.concat(
                  {      list: this.state.list
                  }
                ),
            });
          }.bind(this)
        });
      console.log("this state list: "+ this.state.list);
    },

  render: function () {

    var btnLogin = <button onClick={this.login}> LOG IN </button>;

    return (
      <div>
        <h1>Log In</h1>
        <label for="email"> Username </label>
        <input name="email" value={this.state.email} onChange={this.onChangeEmail} type="text"/>
        <p>
        <label for="password"> Password </label>
        <input name="password" value={this.state.password} onChange={this.onChangePassword} type="password"/>
        </p>
        {btnLogin}
        <RecordTable content={this.state.records}/>
      </div>

          <div className="modal-table" id="loginModal">
    <div className="modal-cell">
      <div className="modal-content signup " id="login-modal-content">
        <div className="modal-header panel-header show-sm">
          Log In
          <a href="#" className="modal-close" data-behavior="modal-close"></a>
        </div>

        <div className="alert alert-with-icon alert-error alert-header panel-header hidden-element notice" id="notice">
          <i className="icon alert-icon icon-alert-alt"></i>
        </div>

        <div className="panel-padding panel-body ">
          <a href="/oauth_connect?from=facebook_login&amp;service=facebook" className="btn icon-btn btn-block btn-large row-space-1 btn-facebook">
            <span className="icon-container">
              <i className="icon icon-facebook"></i>
            </span>
            <span className="text-container">
              Log in with Facebook
            </span>
          </a>

          <a href="/oauth_connect?from=google_login&amp;service=google" className="btn icon-btn btn-block btn-large row-space-1 btn-google">
          <image className="google-logo-svg-fallback icon icon-google-image" src="https://a1.muscache.com/airbnb/static/signinup/google_icon_2x-745c2280e5004d4c90e3ca4e60e3f677.png" xlink:href=""></image>
              <span className="text-container">
                Log in with Google
              </span>
          </a>


          <div className="signup-or-separator">
            <span className="h6 signup-or-separator--text">or</span>
            <hr>
          </div>


          <form accept-charset="UTF-8" action="/authenticate" className="login-form " data-action="Signin" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="V4$.airbnb.com$gv2AVIdKSXA$9dq_otgGFCipjXdsRp5ASF__ga2XgkBeMDhzwxoVtcY="></div>
            <input id="from" name="from" type="hidden" value="email_login">
            <input id="airlock_id" name="airlock_id" type="hidden" value="">

            <div className="control-group row-space-1">
              <input className="decorative-input inspectletIgnore" id="signin_email" name="email" placeholder="Email Address" type="email">
            </div>
            <div className="control-group row-space-2">
              <input className="decorative-input inspectletIgnore" id="signin_password" name="password" placeholder="Password" type="password">
            </div>

            <div className="clearfix row-space-1">
              <label for="remember_me2" className="checkbox remember-me space-1">
                <input type="checkbox" name="remember_me" id="remember_me2" value="true" className="remember_me">
                Remember me
              </label>
                <a href="/forgot_password" className="forgot-password pull-right" data-from="email">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-block btn-primary btn-large" id="user-login-btn">
              Log In
            </button>
          </form>
          <hr>
            <div className="text-left">
                Don’t have an account?
                <a data-toggle="modal" role="button" href="#signupModal" className="modal-link link-to-signup-in-login" data-dismiss="modal" data-modal-href="/signup_modal" data-modal-type="signup">
                  Sign up</a>
            </div>
        </div><!-- panel-body -->
        <form accept-charset="UTF-8" action="/authenticate" className="hidden-element hide in_modal" id="facebook_form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="V4$.airbnb.com$gv2AVIdKSXA$9dq_otgGFCipjXdsRp5ASF__ga2XgkBeMDhzwxoVtcY="></div>
        </form>

      </div>
    </div>
  </div>

    );
  }
});

React.render(<App source="http://162.144.199.112/frenchbakerws/Service1.asmx/GetCustomerName" />, document.body);

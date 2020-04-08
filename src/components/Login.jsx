import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rememberMe: false,
    };
  }

  _handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      rememberMe: e.target.checked,
    });
  };

  _handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.rememberMe === true &&
      this.state.email !== '' &&
      this.state.password !== ''
    ) {
      localStorage.setItem('myUser', this.state.email);
      localStorage.setItem('myRemember', this.state.rememberMe);
      this.props.history.push('/home');
    }else{
        alert('Ingrese toda la información');
    }
  };

  render() {
    return (
      <section className="hero is-primary is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                <form action="" className="box">
                  <div className="field">
                    <label htmlFor="" className="label">
                      Email
                    </label>
                    <div className="control has-icons-left">
                      <input
                        type="email"
                        placeholder="e.g. bobsmith@gmail.com"
                        className="input"
                        name="email"
                        value={this.state.email}
                        onChange={this._handleChange}
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-envelope"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="" className="label">
                      Password
                    </label>
                    <div className="control has-icons-left">
                      <input
                        type="password"
                        placeholder="*******"
                        className="input"
                        name="password"
                        value={this.state.password}
                        onChange={this._handleChange}
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-lock"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="" className="checkbox">
                      <input
                        type="checkbox"
                        checked={this.state.rememberMe}
                        onChange={this._handleChange}
                      />{' '}
                      Remember me
                    </label>
                  </div>
                  <div className="field">
                    <Link to="/home">
                      <button
                        onClick={this._handleSubmit}
                        className="button is-success"
                      >
                        Login
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;

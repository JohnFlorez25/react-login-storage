import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rememberMe: false,
    };
  }

  _handleLogout = () => {
      localStorage.clear()
      this.props.history.push('/login')
  }
  render() {
    return (
      <section className="hero is-primary is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-centered">Bienvenido</h1>
            <p className="subtitle has-text-centered">
              {localStorage.getItem('myUser')} <strong>Super User</strong>!
            </p>
            <div className="columns is-centered">
              <div className="column is-1-tablet is-1-desktop is-1-widescreen">
                <div className="field is-centered">
                  <Link to="/login">
                    <button className="button is-info">Logout</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;

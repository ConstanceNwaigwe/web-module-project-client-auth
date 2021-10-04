import React from 'react';
import { axiosWithAuth } from '../auth/auth';

class Login extends React.Component {
    state = {
      credentials: {
        username: '',
        password: ''
      }
    };
  
    handleChange = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
        }
      });
    };
  
    login = e => {
      e.preventDefault();
      axiosWithAuth().post('/Login', this.state.credentials)
        .then(res => {
          localStorage.setItem('token', res.data.token)
          this.props.history.push('/protected')
        })
        .catch(err => console.log(err.response.data.error))
    };
  
    render() {
      return (
        <div>
            <p>Login to see friends</p>
          <form onSubmit={this.login}>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button>Log in</button>
          </form>
        </div>
      );
    }
}
  export default Login;
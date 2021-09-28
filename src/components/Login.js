import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      password: '',
      errors: ''
     };
  }

componentWillMount() {
    return this.props.loggedInStatus ? this.redirect() : null
  }


handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };
  
handleSubmit = (event) => {
    event.preventDefault()
    const {username, password} = this.state
  let user = {
      username: username,
      password: password
    }
    
axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
    .then(response => {
     // console.log(response)
     //debugger
      if (response.data.logged_in) {
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };

redirect = () => {
    this.props.history.push('/')
  }

handleErrors = () => {
    return (
      <div>
        <ul>
        {this.state.errors.map(error => {
        return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  }
render() {
    const {username, email, password} = this.state
return (
      <div className="container col d-flex justify-content-center">
         <div class="login-box card border-warning mb-3">
           <div className="card-body">
            <h5 class="card-title">Login</h5>
              <div class="form-group">
                          <form onSubmit={this.handleSubmit}>
                            <div class="form-floating mb-3">
                              <input
                               className="form-control"
                               id="floating-name"
                                placeholder="username"
                                type="text"
                                name="username"
                                value={username}
                                onChange={this.handleChange}
                              />
                            <label for="floating-name">Username</label>
                            </div>
                          
                            <input
                             className="form-control"
                              placeholder="password"
                              type="password"
                              name="password"
                              value={password}
                              onChange={this.handleChange}
                            />
                            <button className="homebtn btn btn-success" placeholder="submit" type="submit">
                              Log In
                            </button>
                        
                            
                          </form>
                          <div>
                            {
                              this.state.errors ? this.handleErrors() : null
                            }
                          </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
export default Login;
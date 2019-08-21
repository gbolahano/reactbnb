import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar/Navbar';
import { login } from '../../actions/actions';
import loading from '../../assets/loading.gif';

class Signup extends Component {
  state = {
    user: {
      username: '',
      password: '',
      grant_type: 'password',
      client_id: '2',
      client_secret: 'TWPCYMCn4nFpzB5LiRzGesOMKN6t4O4XWgNyq1b0'
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { user } = this.state;
    this.props.signin(user);
  }

  handleInput = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  }
  render() {
    const style = {
      backgroundColor: '#fd5c63',
      fontWeight: 'bold',
      border: 'none'
    };
    return (
      <Fragment>
      <Navbar></Navbar>
      <div className="container">
        <div className="row">
            <div className="col-lg-5 m-auto">
            <div className="card shadow border-0 mt-5">
                <div className="card-header">Log in</div>
                {this.props.login.error ? <div className="alert alert-danger m-3">Invalid login parameters </div> : '' }
              <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input type="text" name="username" onChange={this.handleInput} placeholder="Email address" className="form-control py-4"/>
                </div>
                <div className="form-group">
                  <input type="password" onChange={this.handleInput} name="password" placeholder="Password" className="form-control py-4"/>
                </div>
                <button style={style} className="btn btn-primary btn-block py-3" type="submit">Log in {this.props.login.loading ? <img className="ml-3" src={loading} style={{
                      width: 20, height: 20
                    }} alt="loading..." />: '' }</button>
              </form>
            </div>
          </div>
          </div>
        </div>
      </div>
      </Fragment>
     );
    }
  }

const mapStateToProps = (state) => {
  return {
    login: state.signup
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signin: (data) => dispatch(login(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
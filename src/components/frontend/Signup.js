import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar/Navbar';
import { signup, register, error } from '../../actions/actions';
import loading from '../../assets/loading.gif';

class Signup extends Component {
  state = {
    user: {
      name: '',
      email: '',
      password: ''
    }
  }

  handleSubmit =  (e) => {
    e.preventDefault();
    const { user } = this.state;
    this.props.register(user);
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
              <div className="card-header">Sign Up!</div>
              {this.props.sign.success ? <div className="alert alert-success m-3">Registered Successfully, Please Login</div> : ''}
              {this.props.sign.error ? <div className="alert alert-danger m-3">An Error ocurred please check form parameters</div> : ''}

            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input name="name" onChange={this.handleInput} value={this.state.user.name} type="text" placeholder="Fullname" className="form-control py-4"/>
                </div>
                <div className="form-group">
                  <input name="email" onChange={this.handleInput} value={this.state.user.email} type="email" placeholder="Email address" className="form-control py-4"/>
                </div>
                <div className="form-group">
                  <input name="password" onChange={this.handleInput} value={this.state.user.password} type="password" placeholder="Password" className="form-control py-4"/>
                </div>
                    <button style={style} className="btn btn-primary btn-block py-3" type="submit">Sign up {this.props.sign.loading ? <img className="ml-3" src={loading} style={{
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

const mapDispatchToProps = (dispatch) => {
  return {
    signup: () => dispatch(signup()),
    register: (user) => dispatch(register(user)),
    error: () => dispatch(error())
  }
}

const mapStateToProps = (state) => {
  return {
    sign: state.signup
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
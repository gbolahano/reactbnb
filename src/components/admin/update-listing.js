import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar/Navbar';
import loading from '../../assets/loading.gif';
import { createListing } from '../../actions/actions';

class UpdateListing extends Component {

  state = {
    listing: {
      user_id: 1,
      name: '',
      price: '',
      description: '',
      status: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const { listing } = this.state;
    this.props.saveListing(listing);
  }
  handleInput = e => {
    this.setState({
      listing: {
        ...this.state.listing,
        [e.target.name]: e.target.value
      }
    });
  }
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>

        <div className="jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="media">
                  <img className="align-self-start mr-3" src="http://lorempixel.com/50/50?87293" width="50px" height="50px" alt="Generic placeholde" />
                  <div className="media-body">
                    <h5 className="mt-0"> Welcome back, Mofi</h5>
                    <p>Get excited to welcome guests to your neighbourhood</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">

            <div className="col-lg-9 mb-5">
              <h2>Update Listing</h2>
              {this.props.listing.saved ? <div className="alert alert-success m-3">Listing Created</div> : ''}
              {this.props.listing.error ? <div className="alert alert-danger m-3">An Error ocurred please check form parameters</div> : ''}
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input onChange={this.handleInput} value={this.state.listing.name} name="name" type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="form-group">
                  <input onChange={this.handleInput} value={this.state.listing.price} name="price" type="number" className="form-control" placeholder="price" />
                </div>
                <div className="form-group">
                  <textarea onChange={this.handleInput} defaultValue={this.state.listing.name} name="description" id="" cols="30" rows="10" className="form-control" placeholder="Description"></textarea>
                </div>
                <div className="form-group">
                  <select onChange={this.handleInput} value={this.state.listing.status} name="status" id="" className="form-control">
                    <option value="">Choose Availablity</option>
                    <option value="1">True</option>
                    <option value="0">False</option>
                  </select>
                </div>
                <div className="form-group">
                <button className="btn btn-success" type="submit">Update Listing {this.props.listing.saving ? <img className="ml-3" src={loading} style={{
                      width: 20, height: 20
                    }} alt="loading..." />: '' }</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    listing: state.listings
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveListing: (data) => dispatch(createListing(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateListing);
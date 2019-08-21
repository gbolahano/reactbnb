import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Skeleton from 'react-loading-skeleton';

import Navbar from './Navbar/Navbar';
import { singleListing } from '../../actions/actions';
// import loading from '../../assets/loading.gif';

class ListingDetails extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getSingleListing(id);
    console.log(this.props.listing)
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>

        <div className="container mt-5">
    <div className="row">
      <div className="col-lg-8 px-0">
              <h2>{this.props.listing.name}</h2>
        <div className="col-lg-12 px-0">
          <div className="row">
            <div className="col-lg-5">
              <div className="card">
                <div className="row">
                  <div className="col-lg-4">
                    <img src="http://lorempixel.com/50/50?72748" height="60px" width="100%" alt="" />
                  </div>
                  <div className="col-lg-8">
                    <p className="mt-3 pl-1">
                      <b>Ermelo Swasad kas</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4 className="mt-3">Space description</h4>
        <div>
                <p>{this.props.listing.description}</p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <div><b>$66</b> per night</div>
            <form action="">
              <div className="form-group">
                <label htmlFor="">Check In</label>
                <input type="date" placeholder="Date" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="">Check Out</label>
                <input type="date" placeholder="Date" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="">Guests</label>
                <input className="form-control" type="number" placeholder="Guests" />
              </div>
              <button className="btn btn-danger">Request to Book</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

          </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    listing: state.listings.listingSingle,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSingleListing: (id) => dispatch(singleListing(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingDetails);
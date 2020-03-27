import React, { Component } from 'react';
import { connect } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import { getUserListings } from '../../actions/actions';
import CardList from '../frontend/CardList';
// import loading from '../../assets/loading.gif';

class Index extends Component {

  componentDidMount() {
    this.props.fetchUserListings();
  }

  componentDidUpdate(prevProps, prevState) {

  }

  handleDelete = id => {
    const { userListings } = this.props.listings;
    const oldListing = [...userListings];
    const index = oldListing.findIndex(n => n.id === id);
    const Listing = [
      ...oldListing.splice(0, index),
      ...oldListing.splice(index + 1)
    ];
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

        <div className="container mb-5">

          <div className="row mt-5">
          <div className="col-lg-12">
              <div className="card-header">My Listings</div>
          </div>
          <div className="col-lg-12 mt-2">
            <div className="row">
                {this.props.listings.loadUserListings ?
                  [1, 2, 3, 4].map(
                    index => <div key={index} className="col-lg-3 mb-3">
                    <div className="card border-0">
                      <div><Skeleton height={150} /></div>
                      <div className="card-body px-0">
                        <p className="card-title py-0 m-0"><b>{<Skeleton />}</b></p>
                        <span className="card-text py-0 m-0">{<Skeleton width={200} />}</span>
                      </div>
                    </div>
                  </div>)
                  :
                  this.props.listings.userListings.map(listing =>
                    <CardList
                      key={listing.id}
                      id={listing.id}
                      name={listing.name}
                      price={listing.price}
                      image={listing.photos} >
                      <Link to={{
                        pathname: '/user/listing/update/' + listing.id
                      }}>
                        <button className="btn btn-primary btn-sm">Edit</button>
                      </Link>&nbsp;
                      <Link>
                        <button onClick={() => this.handleDelete(listing.id)} className="btn btn-danger btn-sm">Delete</button>
                      </Link>
                    </CardList>)}
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
    listings: state.listings,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUserListings: () => dispatch(getUserListings())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
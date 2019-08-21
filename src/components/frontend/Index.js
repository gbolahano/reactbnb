import React, { Component } from 'react';
import { connect } from 'react-redux';
import Skeleton from 'react-loading-skeleton';

import Navbar from './Navbar/Navbar';
import CardList from './CardList';
import { incrementCount, getListings } from '../../actions/actions';
// import loading from '../../assets/loading.gif';

class Index extends Component {

  componentDidMount() {
    // console.log(this.props.listings)
    this.props.getListings();
  }

  render() {
    const style = {
      color: '#fd5c63',
      fontWeight: 'bold'
    };
    const listings = Array.from(this.props.listings.listings);
    return (
      <div>
        <Navbar></Navbar>
        <div className="container col-lg-10">
          <div className="row">
            <div className="col-lg-7 px-0">
              <h2 style={style} className="display-4">Airbnb</h2>
              <button className="btn btn-primary btn-sm" onClick={this.props.getListings}>Click me {this.props.listings.count}</button>
              <p>
                <b style={{ fontSize: "1.6em" }}>Book unique homes and experence a city like a local.</b>
              </p>
              <form action="">
                <div className="form-group">
                  <input type="text" className="form-control shadow border-0" placeholder='Try "Osaka"' />
                </div>
              </form>
            </div>
          </div>

          {this.props.listings.loading ?
            <div className="row mt-5">
              <div className="col-lg-12 px-0">
                <h4 className="px-0">Homes</h4>
              </div>
              <div className="col-lg-12 pl-0">
                <div className="row">
                  { [1, 2, 3, 4].map(
                    index => <div key={index} className="col-lg-3 mb-3">
                    <div className="card border-0">
                      <div><Skeleton height={150} /></div>
                      <div className="card-body px-0">
                        <p className="card-title py-0 m-0"><b>{<Skeleton />}</b></p>
                        <span className="card-text py-0 m-0">{<Skeleton width={200} />}</span>
                      </div>
                    </div>
                  </div>
                  )}
                </div>
              </div>
            </div>
            :
          <div className="row mt-5">
          <div className="col-lg-12 px-0">
            <h4 className="px-0">Homes</h4>
          </div>
          <div className="col-lg-12 pl-0">
            <div className="row">
              {listings.map(listing => <CardList key={listing.id} id={listing.id} name={listing.name} image={listing.photos} price={listing.price} />)}

            </div>
          </div>
        </div>
        }

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
    // increment: () => dispatch({type: 'INCREMENT'})
    increment: () => dispatch(incrementCount()),
    getListings: () => dispatch(getListings())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
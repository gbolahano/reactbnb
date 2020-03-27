import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Skeleton from 'react-loading-skeleton';

import Navbar from './Navbar/Navbar';
import { fetchUserHomeData, getListings } from '../../actions/actions';
import loading from '../../assets/loading.gif';
import CardList from '../frontend/CardList';

class Index extends Component {

  componentDidMount() {
    this.props.fetchData();
    this.props.allListings();
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
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">Pending Requests</div>
                <div className="card-body">
                  <table className="table">
                    <tbody>
                      {this.props.listings.bookings ?
                        this.props.listings.bookings.map(booking =>
                          <tr>
                            <td>{booking.user_name}</td>
                            <td>Reservation Request</td>
                            <td>{booking.date_from} - {booking.date_to}</td>
                            <td>{ booking.no_of_guests } guests ${booking.price}</td>
                          </tr>
                        ) : <tr><td>No bookings</td></tr>}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>


          <div className="row mt-5">
          <div className="col-lg-12">
              <div className="card-header">Your Reservations</div>
          </div>
          <div className="col-lg-12 mt-2">
            <div className="row">
                {this.props.listings.homeLoading ? <img src={loading} width="100" height={100} alt="loading..." /> : this.props.listings.homeData.reservations.map((listing, index) =>
                  <CardList
                    key={index}
                    id={listing.listing_id}
                    name={listing.listing_name}
                    price={listing.price}
                    image={listing.photos}
                  />)}
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
    fetchData: () => dispatch(fetchUserHomeData()),
    allListings: () => dispatch(getListings())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
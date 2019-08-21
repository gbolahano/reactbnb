import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Skeleton from 'react-loading-skeleton';

import Navbar from './Navbar/Navbar';
import { incrementCount, getListings } from '../../actions/actions';
// import loading from '../../assets/loading.gif';

class Index extends Component {

  componentDidMount() {
    // console.log(this.props.listings)
    this.props.getListings();
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
                      <tr>
                        <td>Lewis Hamilton</td>
                        <td>Reservation Request</td>
                        <td>dec 6 - 10</td>
                        <td>4 guests $500</td>
                      </tr>
                      <tr>
                        <td>Lewis Hamilton</td>
                        <td>Reservation Request</td>
                        <td>dec 6 - 10</td>
                        <td>4 guests $500</td>
                      </tr>
                      <tr>
                        <td>Lewis Hamilton</td>
                        <td>Reservation Request</td>
                        <td>dec 6 - 10</td>
                        <td>4 guests $500</td>
                      </tr>
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
              <div className="col-lg-3">
                <div className="card border-0 shadow">
                  <img src="http://lorempixel.com/300/200?35791" width="100%" height="200px" alt="card" class="card-img-top" />
                  <div className="card-body">
                    <p className="card-title m-0">Dec 5 - 9</p>
                      <p className="card-title m-0">Mathew 2 nights</p>
                      <button className="btn btn-sm btn-danger mt-2">cancel</button>
                  </div>
                </div>
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
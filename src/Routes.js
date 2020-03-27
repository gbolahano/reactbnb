import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from "./components/frontend/Index";
import Signup from "./components/frontend/Signup";
import Login from "./components/frontend/Login";
import Admin from "./components/admin/index";
import Listings from "./components/admin/Listings";
import Profile from "./components/admin/Profile";
import ListingDetails from "./components/admin/listing-details";
import createListing from './components/admin/create-listing';
import updateListing from './components/admin/update-listing';
// import AuthRequired from './components/auth/Authentication';
const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Index}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/login" component={Login}></Route>
        <Route exact path="/user" component={Admin}></Route>


        <Route path="/user/profile" component={Profile}></Route>
        <Route path="/user/listing/create" component={createListing}></Route>
        <Route path="/user/listing/update/:id" component={updateListing}></Route>
        <Route path="/user/listing/details/:id" component={ListingDetails}></Route>
        <Route path="/user/listings/all" component={Listings}></Route>

      </Switch>
    </div>
  )
}

export default Routes;
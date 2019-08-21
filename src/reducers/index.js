import { combineReducers } from 'redux';
import listings from './listingReducer';
import signup from './signupReducer';

const rootReducer = combineReducers({
  listings,
  signup
});

export default rootReducer;
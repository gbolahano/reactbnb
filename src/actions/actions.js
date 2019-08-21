import axios from 'axios';
import { setToken, getToken, config } from '../utils/utils';

export const getListings = () => {
  return dispatch => {
    dispatch(addListingStarted())
    axios.get('http://larabnb.test/api/listings')
      .then(response => {
        dispatch(setListings(response.data));
      })
  }
};

export const getSingleList = () => ({
  type: 'GET_SINGLE_LISTING'
});

export const setSingleListing = (data) => ({
  type: 'SET_SINGLE_LISTING',
  payload: data
});

export const singleListing = (id) => {
  return dispatch => {
    dispatch(getSingleList());
    const { access_token } = getToken() || '';
    const token = config(access_token);
    axios.get(`http://larabnb.test/api/user/listings/${id}/show`, token)
      .then(response => {
        // console.log(response.data.listing);
        dispatch(setSingleListing(response.data.listing));
      })
      .catch(err => {
        console.log(err.message);
      })
  }
}

export const getUserListings = () => {
  return dispatch => {
    dispatch(addUserListingStarted());
    const { access_token } = getToken() || '';
    const token = config(access_token);
    axios.get('http://larabnb.test/api/user/listings/1', token)
      .then(response => {
        dispatch(setUserListings(response.data.listings));
      })
  }
}

export const fetchingUserHomeData = () => ({
  type: 'FETCHING_USER_HOME_DATA'
})

export const setUserHomeData = (data) => ({
  type: 'SET_USER_HOME_DATA',
  payload: data
})

export const fetchUserHomeData = () => {
  return dispatch => {
    dispatch(fetchingUserHomeData());
    const { access_token } = getToken() || '';
    const token = config(access_token);
    axios.get('http://larabnb.test/api/user/1/home', token)
      .then(response => {
        // console.log(response.data);
        dispatch(setUserHomeData(response.data));
      })

  }
}

export const addListingStarted = () => ({
  type: 'ADD_LISTING_STARTED'
})

export const setListings = (data) => ({
  type: 'SET_LISTINGS',
  payload: [
    ...data
  ]
});

export const addUserListingStarted = () => ({
  type: 'ADD_USER_LISTING_STARTED'
})

export const setUserListings = (data) => ({
  type: 'SET_USER_LISTINGS',
  payload: [
    ...data
  ]
});

export const incrementCount = () => ({
  type: 'INCREMENT'
});

export const signup = () => ({
  type: 'SIGNUP'
});

export const add_user = () => ({
    type: 'ADD_USER'
});

export const signed_up = () => ({
  type: 'SIGNED_UP'
});

export const error = () => ({
  type: 'ERROR'
});

export const register = (data) => {
  return dispatch => {
    dispatch(signup());
    axios.post('http://larabnb.test/api/register', data)
       .then(response => {
         dispatch(add_user());
         console.log(response.data);
       })
      .catch(err => dispatch(error()));
  }
}

export const signing_in = () => ({
  type: 'SIGNING_IN'
});

export const signed_in = () => ({
  type: 'SIGNED_IN'
});

export const login = (data) => {
  return dispatch => {
    dispatch(signing_in());
    axios.post('http://larabnb.test/oauth/token', data)
      .then(response => {
        dispatch(signed_in());
        const { access_token, expires_in } = response.data;
        setToken(access_token, expires_in);
      })
      .catch(err => dispatch(error()));
  }
}

export const saving = () => {
  return {
    type: 'SAVING'
  }
}

export const saved = () => {
  return {
    type: 'SAVED'
  }
}

export const save_error = () => ({ type: 'SAVE_ERROR' })

export const createListing = (data) => {
  return dispatch => {
    dispatch(saving())
    const { access_token } = getToken() || '';
    const token = config(access_token);
    axios.post('http://larabnb.test/api/user/listings/store', data, token)
      .then(reponse => {
        dispatch(saved());
      })
      .catch(err => dispatch(save_error()));
  }
}
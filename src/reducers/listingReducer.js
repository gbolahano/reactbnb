const initialState = {
  count: 42,
  loading: false,
  listings: [
  ],
  userListings: [
  ],
  loadUserListings: false,
  saving: false,
  saved: false,
  error: false,
  homeData: { reservations:[], bookings:[] },
  homeLoading: false,
  getListing: false,
  listingSingle: {}
}

function listing(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    case 'ADD_LISTING_STARTED':
      return { ...state, loading: true }
    case 'SET_LISTINGS':
      return { ...state, listings: action.payload, loading: false }
    case 'ADD_USER_LISTING_STARTED':
      return { ...state, loadUserListings: true }
    case 'SET_USER_LISTINGS':
      return { ...state, userListings: action.payload, loadUserListings: false }
    case 'SAVING':
      return { ...state, saving: true }
    case 'SAVED':
      return { ...state, saving: false, saved: true }
    case 'SAVE_ERROR':
      return { ...state, error: true }
    case 'FETCHING_USER_HOME_DATA':
      return { ...state, homeLoading: true }
    case 'SET_USER_HOME_DATA':
      return {
        ...state, homeData: {
          reservations: [...action.payload.reservations],
          bookings: [...action.payload.bookings]
        }, homeLoading: false
      }
    case 'GET_SINGLE_LISTING':
      return { ...state, getListing: true };
    case 'SET_SINGLE_LISTING':
      return { ...state, listingSingle: { ...action.payload }, getListing: false };
    default:
      return state;
  }
}

export default listing;
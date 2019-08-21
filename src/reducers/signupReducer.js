const instialState = {
  loading: false,
  success: false,
  error: false,
  user: {}
};

function signup(state = instialState, action) {
  switch (action.type) {
    case 'SIGNUP':
      return { ...state, loading: true }
    case 'ADD_USER':
      return { ...state, success: true, loading: false }
    case 'SIGNED_UP':
      return { ...state, success: false }
    case 'ERROR':
      return { ...state, error: true, loading: false }
    case 'SIGNING_IN':
      return { ...state, loading: true }
    case 'SIGNED_IN':
      return { ...state, loading: false, }
    default:
      return state;
  }
}

export default signup;
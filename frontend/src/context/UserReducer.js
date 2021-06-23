const UserReducer = (state, action) => {
  switch(action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        isRetrieving: true,
        error: false
      }
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        isRetrieving: false,
        error: false
      }
    case 'LOGIN_FAILURE':
      return {
        user: null,
        isRetrieving: false,
        error: action.payload
      }
    case 'FOLLOW':
      return {
        ...state,
        user: {
          ...state.user,
          following: [...state.user.following, action.payload]
        }
      };
      case 'UNFOLLOW':
        return {
          ...state,
          user: {
            ...state.user,
            following: state.user.following.filter(currUser => currUser !== action.payload)
          }
        };
    default:
      return state;
  }
};

export default UserReducer;
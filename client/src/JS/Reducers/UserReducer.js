import {
  USERS_LOAD,
  USERS_SUCCES,
  USERS_FAIL,
  USER_DELETE_FAIL,
  A_USER_GET_SUCCES,
  A_USER_GET_FAIL,
  USER_EDIT_FAIL,
  USER_ADD_FAIL,
} from "../ActionTypes/Const";

const initialState = {
  loading: false,
  userList: [],
  errors: null,
  oneUser: {},
};

export const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USERS_LOAD:
      return { ...state, loading: true };
    case USERS_SUCCES:
      return { ...state, loading: false, userList: payload };
    case USERS_FAIL:
      return { ...state, loading: false, errors: payload };
    case USER_DELETE_FAIL:
      return { ...state, loading: false, errors: payload };
    case A_USER_GET_SUCCES:
      return { ...state, loading: false, oneUser: payload };
    case A_USER_GET_FAIL:
      return { ...state, loading: false, errors: payload };
    case USER_EDIT_FAIL:
      return { ...state, loading: false, errors: payload };
    case USER_ADD_FAIL:
      return { ...state, loading: false, errors: payload };
    default:
      return state;
  }
};

import { FETCH_COURSES } from "../actions/actions";

const initialState = {
  courses: [],
  loading: false,
  error: null,
};

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES.REQUEST:
      return { ...state, loading: true };
    case FETCH_COURSES.SUCCESS:
      return { ...state, loading: false, courses: action.payload };
    case FETCH_COURSES.FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default coursesReducer;

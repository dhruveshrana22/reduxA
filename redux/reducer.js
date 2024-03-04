import { combineReducers } from 'redux';

const dataReducer = (state = '', action) => {
  switch (action.type) {
    case 'SAVE_DATA':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;

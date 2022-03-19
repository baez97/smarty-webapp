import { combineReducers } from 'redux';
import smartphonesReducer from './smartphones';

const rootReducer = combineReducers({
  smartphones: smartphonesReducer
});

export default rootReducer;
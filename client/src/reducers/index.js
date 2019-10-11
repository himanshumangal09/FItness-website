import {combineReducers} from 'redux' ;
import {reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import planReducers from './planReducers'

export default combineReducers ({
auth:authReducer,
form:formReducer,
plans:planReducers
});
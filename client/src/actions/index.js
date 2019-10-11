import plans from '../apis/plans';
import history from '../history';
import {SIGN_IN,SIGN_OUT} from './types';
import {CREATE_PLAN,FETCH_PLANS,
    FETCH_PLAN, 
    EDIT_PLAN ,
    DELETE_PLAN}  from './types'
export const signIn = (userId) => {
    return {
        type:SIGN_IN,
        payload:userId
    };
};
export const signOut = () => {
    return {
        type:SIGN_OUT
    };
 }; 
export const createPlan  = formValues => async (dispatch,getState) =>{
    const {userId} =  getState().auth;
   const response = await plans.post('/plans',{...formValues,userId});
        dispatch({
            type:CREATE_PLAN,
            payload:response.data
    });
    history.push('/');
};   
export const fetchplan = id => async dispatch => {
    const response = await plans.get(`/plans/${id}`);
    dispatch({
        type:FETCH_PLAN,
        payload:response.data
    });
};
export const fetchplans = () => async dispatch => {
    const response = await plans.get('/plans');
    dispatch({
        type:FETCH_PLANS,
        payload:response.data
    });
};
export const editplan = (id,formValues) => async dispatch =>{
    const response = await plans.patch(`/plans/${id}`,formValues);
    dispatch({
        type:EDIT_PLAN,
        payload:response.data
    });
    history.push('/');
};
 export const deleteplan = (id) => async dispatch => {
    await plans.delete(`/plans/${id}`);
dispatch({
    type:DELETE_PLAN,
    payload:id});
    history.push('/');
};

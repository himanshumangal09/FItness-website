import _ from 'lodash';
import {
    CREATE_PLAN,
    FETCH_PLANS,
    FETCH_PLAN ,
    EDIT_PLAN  ,
    DELETE_PLAN
} from '../actions/types';
export default (state={},action)=>{
    switch(action.type){
        case FETCH_PLAN:
            return{...state,[action.payload.id]:action.payload}
        case FETCH_PLANS:
            return{...state , ..._.mapKeys(action.payload,'id')};
        case CREATE_PLAN:
            return{...state, [action.payload.id]:action.payload }
        case EDIT_PLAN:
                return{...state,[action.payload.id]:action.payload}
        case DELETE_PLAN:
                return _.omit(state,action.payload);
        default:
            return state;
    }
}
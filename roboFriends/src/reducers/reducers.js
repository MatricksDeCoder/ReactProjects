import {CHANGE_SEARCH_BAR,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED 
   } from '../constants';

const defaultState ={
    searchBox:'',
    robots:[],
    isPending:false,
    error:''
}

export const onSearchChange = (state=defaultState, action={}) => {

    switch(action.type) {
        case CHANGE_SEARCH_BAR:
            return  {...state, searchBox:action.payload};
        default:
            return state;
    }
    
}

export const onRequestRobots = (state=defaultState, action={}) => {

    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return {...state, isPending:true}
        case REQUEST_ROBOTS_SUCCESS:
            return {...state,robots:action.payload, isPending:false}
        case REQUEST_ROBOTS_FAILED:
            return {...state, error:action.payload, isPending:false}
        default:
            return state;
    }
    
}




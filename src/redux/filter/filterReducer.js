import initialState from "./initialState";
import {SEARCHBYKEYWORD,SEARCHBYAUTHOR,SEARCHBYCATAGORY} from './actionTypes'
const filterReducer=(state=initialState,action)=>{
 switch (action.type) {
    case SEARCHBYKEYWORD:
        return {
            ...state,keyword:action.payload
        }
    case SEARCHBYCATAGORY:
        if(state.catagory){
            return {
                ...state,
                catagory:""
                } 
        }
     return {
            ...state,
            catagory:action.payload
            } 
    case SEARCHBYAUTHOR:
        if(state.author){
            return {
                ...state,
                author:""
                } 
        }
     return {
            ...state,
            author:action.payload
            } 
 
    default:
        return state
 }

}

export default filterReducer
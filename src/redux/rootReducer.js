import { combineReducers } from "redux";
import blogRecucer from "./blog/reducer";
import filterReducer from "./filter/filterReducer";

const rootReducer=combineReducers({
    blog:blogRecucer,
    filter:filterReducer
})

export default rootReducer
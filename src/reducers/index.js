import changeViewReducer from "./changeView"
import OtherReducer from "./other"
import LevelNow from "./levelNow"

import {combineReducers} from "redux";

const allReducers = combineReducers({
    changeView : changeViewReducer,
    other : OtherReducer,
    levelNow : LevelNow,
})

export default allReducers
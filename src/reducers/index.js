import changeViewReducer from "./changeView"
import OtherReducer from "./other"
import LevelNow from "./levelNow"
import UserStatus from "./user"
import SetDataReduce from "./setDataLevel";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    changeView : changeViewReducer,
    other : OtherReducer,
    levelNow : LevelNow,
    userStatus : UserStatus,
    setDataReduce : SetDataReduce,
})

export default allReducers
import{combineReducers} from "redux";
import changeTheNumber from './upDown.js';

const rootReducer= combineReducers({
    changeTheNumber,
});

export default rootReducer;
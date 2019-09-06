import { combineReducers } from "redux";

import controlPanel from "./controlPanel";
import canvas from "./canvas";

const rootReducer = combineReducers({
  controlPanel,
  canvas
});

export default rootReducer;

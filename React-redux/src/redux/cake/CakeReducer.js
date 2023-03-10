import {ADD} from "./CakeType"
import {SUB} from "./CakeType"


const initialState = {
  cake: 15,
};

const buyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, cake: state.cake + 1 };
    case SUB:
      return { ...state, cake: state.cake - 1 };
     
    default :
        return state
  }
};

export default buyReducer;
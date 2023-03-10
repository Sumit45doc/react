//Basic redux 

const redux = require("redux");
const createStore = redux.createStore;

var BUY_CAKE = "BUY_CAKE";
//Action creator
function buyCake() {
  return {
    //action - object with type property
    type: BUY_CAKE,
  };
}

//initialState
const initialState = {
  cake: 10,
};

//reducer
const reducer = (state = initialState, { type }) => {
  switch (type) {
    case "BUY_CAKE":
      return { ...state, cake: state.cake - 1 };

    default:
      return state;
  }
};

//creating store
const store = createStore(reducer,{cake: 8});
const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();

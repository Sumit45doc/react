const redux = require("redux");
const combinedReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware()
const BUY_CAKE = "BUY_CAKE";
const BUY_SWEET = "BUY_SWEET";

//action
const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};
const buySweet = () => {
  return {
    type: BUY_SWEET,
  };
};

//initial-state
const initialCakeState = {
  cake: 10,
};
const initialSweetState = {
  sweet: 15,
};

//reducer
const cakeReducer = (state = initialCakeState, { type }) => {
  switch (type) {
    case "BUY_CAKE":
      return { ...state, cake: state.cake - 1 };

    default:
      return state;
  }
};
const sweetReducer = (state = initialSweetState, { type }) => {
  switch (type) {
    case "BUY_SWEET":
      return { ...state, sweet: state.sweet - 1 };

    default:
      return state;
  }
};

//combining reducer
const reducer = combinedReducers({
  sweetStore: sweetReducer,
  cakeStore: cakeReducer,
});

const store = redux.createStore(reducer);
const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buySweet());
unsubscribe();

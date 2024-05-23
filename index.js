// Define the initial state of the application
const initialState = {
  count: 0,
};

// Define the action types for incrementing, decrementing, and resetting the count
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// Define the action creators for incrementing, decrementing, and resetting the count
const incrementAction = () => ({ type: INCREMENT });
const decrementAction = () => ({ type: DECREMENT });
const resetAction = () => ({ type: RESET });

// Select the button element with the class 'plusbtn'
const button = document.querySelector(".plusbtn");
// Select the button element with the class 'reset-btn'
const reset = document.querySelector(".reset-btn");
// Select the button element with the class 'subtractbtn'
const subtractButton = document.querySelector(".subtractbtn");

// Add an event listener to the button element to dispatch the INCREMENT action when clicked
button.addEventListener("click", () => {
  store.dispatch({ type: INCREMENT });
});

// Add an event listener to the button element to dispatch the DECREMENT action when clicked
subtractButton.addEventListener("click", () => {
  store.dispatch({ type: DECREMENT });
});

// Add an event listener to the button element to dispatch the RESET action when clicked
reset.addEventListener("click", () => {
  store.dispatch({ type: RESET });
});

// Define the reducer function for the counter
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    case RESET:
      return { count: (state.count = 0) };
    default:
      return state;
  }
};

// Define the createStore function to create a store object
function createStore(reducer) {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  // Initialize the state
  dispatch({});

  return { getState, dispatch, subscribe };
}
// Create a store object using the createStore function
const store = createStore(counterReducer);

// Log the initial state of the store to the console
console.log(store.getState());

// Subscribe to state changes and log the state to the console whenever it updates
store.subscribe(() => {
  console.log(store.getState());
});

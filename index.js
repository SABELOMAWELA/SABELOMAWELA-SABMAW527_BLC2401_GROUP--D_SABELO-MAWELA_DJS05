const initialState = {
    count: 0
  };


const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET'

const incrementAction = () => ({ type: INCREMENT });
const decrementAction = () => ({ type: DECREMENT });
const resetAction = () => ({type: RESET})

const button = document.querySelector('.plusbtn');
console.log(button)


button.addEventListener('click', () => {
    store.dispatch({ type: INCREMENT });

});

const subtractButton = document.querySelector('.subtractbtn');


subtractButton.addEventListener('click', () => {
   store.dispatch({ type: DECREMENT });
});

const reset = document.querySelector('.reset-btn')

reset.addEventListener('click', () => {
    store.dispatch({ type: RESET });
});



  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case INCREMENT:
        return { count: state.count + 1 };
      case DECREMENT:
        return { count: state.count - 1 };
        case RESET : 
        return {count: state.count = 0};
      default:
        return state;
    }
  };

  function createStore(reducer) {
    let state;
    let listeners = [];
  
    const getState = () => state;
  
    const dispatch = (action) => {
      state = reducer(state, action);
      listeners.forEach(listener => listener());
    };
  
    const subscribe = (listener) => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter(l => l !== listener);
      };
    };
  
    // Initialize the state
    dispatch({});
  
    return { getState, dispatch, subscribe };
  }
  const store = createStore(counterReducer);
  console.log(store.getState());

// Subscribe to state changes
store.subscribe(() => {
  console.log(store.getState());
});

const initialState = {
    count: 0
  };


const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const incrementAction = () => ({ type: INCREMENT });
const decrementAction = () => ({ type: DECREMENT });

const button = document.querySelector('.plusbtn');
console.log(button)


button.addEventListener('click', () => {
    console.log("hello")

});

const subtractButton = document.querySelector('.subtractbtn');


subtractButton.addEventListener('click', () => {
    console.log("hey")
});


  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case INCREMENT:
        return { count: state.count + 1 };
      case DECREMENT:
        return { count: state.count - 1 };
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
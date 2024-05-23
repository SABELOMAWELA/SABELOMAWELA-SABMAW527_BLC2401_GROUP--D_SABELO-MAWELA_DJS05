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

// create your initial state and set a default value to it
const initialState = {
  count: 0,
};

// create your reducer and pass in the state and action as parameters. In this case,
// we set the state to the initialState that we created above. Proceed to use an if else \
// or switch statement to write out the logic. Remember to always return a copy of the
// new state and never directly mutate it. Dont forget to export the reducer for
// use in other files.
export function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };

    case "DECREMENT":
      return {
        count: state.count - 1,
      };

    case "RESET":
      return {
        count: 0,
      };

    default:
      return state;
  }
}

import "./App.css";

// import the connect higher order function from the react redux package. This will allow
// react and redux to connect to each other and make the state and dispatches visible
// to each other
import { connect } from "react-redux";

// to use the props in a functional component, pass in the props as an argument
function App(props) {
  // console log the props for own reference. You will see that the component's props contains
  // the state and dispatches as a result of the connect higher order function
  console.log(props);

  // create a simple ui with buttons to increase , decrease, and reset the count. Attach
  // onClick listeners to dispatch the corresponding action from the props. Additionally,
  // grab the state from the props. Notice all data is from props.
  return (
    <div className="App">
      <button onClick={props.decrement}>-</button>
      <span>Count:{props.count}</span>
      <button onClick={props.increment}>+</button>
      <button onClick={props.reset}>Reset</button>
    </div>
  );
}

// map the state to your props. Pass in the state as an argument
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

// map your dispatches to the props. Pass in the dispatch function as a parameter.
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    reset: () => dispatch({ type: "RESET" }),
  };
};

// Use the connect higer order function to attach the redux state and dispatches
// over to react's props
export default connect(mapStateToProps, mapDispatchToProps)(App);

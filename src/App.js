import "./App.css";
import { connect } from "react-redux";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <button onClick={props.decrement}>-</button>
      <span>Count:{props.count}</span>
      <button onClick={props.increment}>+</button>
      <button onClick={props.reset}>Reset</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    reset: () => dispatch({ type: "RESET" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

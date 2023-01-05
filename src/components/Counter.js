import React from "react";
import { connect } from "react-redux";
import * as actions from "../mystore/count/count_actions";
const Counter = (props) => {
  const { count, increateIt, decreateIt, resetIt } = props;
  return (
    <div>
      <h2>Counter {count}</h2>
      <div>
        <button onClick={() => increateIt(3)}>Increase</button>
        <button style={{ marginLeft: "10px" }} onClick={() => decreateIt(5)}>
          Reduce
        </button>
        <button style={{ marginLeft: "10px" }} onClick={() => resetIt()}>
          Reset
        </button>
      </div>
    </div>
  );
};

const mapStataToProps = (state) => {
  return {
    count: state.countReduce,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increateIt: (x) => dispatch(actions.increaseAction(x)),
    decreateIt: (x) => dispatch(actions.decreaseAction(x)),
    resetIt: () => dispatch(actions.resetAction()),
  };
};

export default connect(mapStataToProps, mapDispatchToProps)(Counter);

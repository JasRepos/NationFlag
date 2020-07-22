import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter, incrementAsync, decrementAsync } from "./testActions";
import { Button } from "semantic-ui-react";

const mapState = (state) => ({
  data: state.test.data,
  loading: state.async.loading
});

const mapDispatch = {
  incrementCounter,
  decrementCounter,
  incrementAsync,
  decrementAsync
};

class TestComponent extends Component {
  render() {
    const { data, incrementAsync, decrementAsync } = this.props;
    return (
      <div>
        <h1>Test Component</h1>
        <h3>The answer is: {data}</h3>
        <Button onClick={incrementAsync} positive content="Increment" />
        <Button onClick={decrementAsync} content="Decrement" />
      </div>
    );
  }
}

export default connect(mapState, mapDispatch)(TestComponent);

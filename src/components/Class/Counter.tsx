import { Component } from "react";

// defining the props type
type CounterProps = {
  message: string;
};

type CounterState = {
  count: number;
};

// after component we need to mention the types of props and states in angle brackets
// if we don't have props replace it with empty brackets
export class Counter extends Component<CounterProps, CounterState> {
  // to maintain the count value
  state = {
    count: 0,
  };

  // update the count
  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {/* message will be passed as props */}
        {this.props.message} {this.state.count}
      </div>
    );
  }
}

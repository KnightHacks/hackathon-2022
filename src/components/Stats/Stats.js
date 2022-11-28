import React from "react";

// inputs can be grabbed from back-end
// just some test values right now
let val1 = 100;
let val2 = 20;
let baseTimeout = 20;

let timeout1 = (baseTimeout * val2) / val1;
let timeout2 = baseTimeout;

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

class HalfStat extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  counter = async (initial, final) => {
    for (let count = initial; count <= final; count++) {
      await delay(this.props.timeout);
      this.setState({ count });
    }
  };

  componentDidMount() {
    this.counter(0, this.props.val);
  }

  render() {
    return (
      <div class="px-4">
        <p class="font-bold text-center text-white text-5xl">
          {" "}
          {this.state.count}+
        </p>
        <p class="font-medium text-center text-white text-2xl">
          {this.props.group}
        </p>
      </div>
    );
  }
}

export default function Stats() {
  return (
    <div class="flex justify-center">
      <HalfStat val={val1} group="Hackers" timeout={timeout1} />
      <HalfStat val={val2} group="Sponsors" timeout={timeout2} />
    </div>
  );
}


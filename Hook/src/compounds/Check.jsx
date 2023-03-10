import React, { Component } from "react";

class Check extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // count: 0,
      x: 0,
      y: 0,
    };
  }

  changeHandler = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };
  componentDidMount() {
    window.addEventListener("mousemove", this.changeHandler);
  }
  // componentDidCatch() {
  //   document.title = this.state.count;
  // }
  // componentDidUpdate() {
  //   document.title = this.state.count;
  // }

  render() {
    return (
      <div>
        {/* <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          click {this.state.count}
        </button> */}
        X- {this.state.x}
        Y- {this.state.y}

      </div>
    );
  }
}

export default Check;

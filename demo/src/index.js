import React, { Component } from "react";
import { render } from "react-dom";

import ReactAnimatedInteraction from "../../src";

class Demo extends Component {
  state = {
    Show: false
  };

  showHide = () => {
    this.setState({ Show: !this.state.Show });
  };
  render() {
    return (
      <div>
        <h1>react animated interaction Demo</h1>
        Click here to:{" "}
        <input type="button" value="Show/Hide" onClick={this.showHide} />
        <ReactAnimatedInteraction Show={this.state.Show}>
          Hello there, nice to meet you!
        </ReactAnimatedInteraction>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));

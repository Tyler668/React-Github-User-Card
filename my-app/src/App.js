import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  // if you just need state, no binding, you don't need a constructor
  state = {
  };

  componentDidMount(){
   
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello Doggos!</h1>
        <input
          type="text"
          value={this.state.doggoText}
          onChange={this.handleChange}
          name="doggoText"
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

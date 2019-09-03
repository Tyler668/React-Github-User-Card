import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

class App extends Component {
  // if you just need state, no binding, you don't need a constructor
  state = {
  };

  componentDidMount() {
    axios.get(`https://api.github.com/users/Tyler668`)
      .then(res => {
        console.log(res.data);
      })
      .catch(
        console.log("ERROR")
      )
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="base-container">
        <h1>User Cards:</h1>
        <div className="card-container">
          <h2 className='name'>Name</h2>
          <h3 className='username'>Handle</h3>
          <img src=''></img>
          <p className='bio'></p>
        </div>
      </div>
    );
  }
}
export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


{/* <input
          type="text"
          value={this.state.doggoText}
          onChange={this.handleChange}
          name="doggoText"
        /> */}
import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Card, Icon, Image } from 'semantic-ui-react';

class App extends Component {
  // if you just need state, no binding, you don't need a constructor


  state = {
    users: [
    ]
  };

  grabProfile(url) {
    axios.get(url)
      .then(response => {
        console.log(response.data)
        const newUser = {
          name: response.data.name,
          username: response.data.login,
          location: response.data.location,
          proPic: response.data.avatar_url,
          profileLink: `https://github.com/${response.data.login}`,
          followers: response.data.followers,
          following: response.data.following,
          bio: response.data.bio,

        };
        console.log(newUser);
        this.setState({
          users: [...this.state.users, newUser]
        });
      });
  };



  componentDidMount() {
    this.grabProfile(`https://api.github.com/users/Tyler668`)
    axios.get(`https://api.github.com/users/Tyler668/followers`)
      .then(res => {
        const followerArray = [  
        'tetondan',
        'dustinmyers',
        'justsml',
        'luishrd',
        'bigknell'];
        console.log(res.data);
        res.data.forEach(item => { followerArray.push(item.login) });
        console.log(followerArray);

        followerArray.forEach(item => {
          this.grabProfile(`https://api.github.com/users/${item}`)
        })
        // res.data.map()
      })

  }



  render() {
    return (
      <div>
        <h1 className='title'>GitHub UserCards</h1>


        <div className='base-container'>
          {this.state.users.map(item => (
            <Card className='card'>
              <Image className="proPic" src={`${item.proPic}`} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{item.name}</Card.Header>
                <Card.Meta>
                  <span className='date'>{item.username}</span>
                </Card.Meta>
                <Card.Description>
                  {item.bio}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  {item.followers}
                </a>
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>

    );
  }
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);







// <div className="base-container">
// <h1>User Cards:</h1>
// {this.state.users.map(item => (
//   <div className="card">
//     <h2 className='name'>{item.name}</h2>
//     <h3 className='username'>{item.username}</h3>
//     <img src={`${item.proPic}`}></img>
//     <h3 className='location'>{item.location}</h3>
//     <h3 className='profile'>Profile: {item.profileLink}</h3>
//     <h3 className='followers'>Followers: {item.followers}</h3>
//     <h3 className='following'>Following: {item.following}</h3>
//     <p className='bio'>Bio: {item.bio}</p>
//   </div>
// ))}
// </div>
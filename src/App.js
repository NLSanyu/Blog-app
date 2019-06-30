import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import PageHeader from './components/PageHeader';
import PageContent from './components/PageContent';

const users = [
  {name: "Lydia", email: "lydia@mail.com"}, 
  {name: "Isaac", email: "isaac@mail.com"}, 
  {name: "Dan", email: "dan@mail.com"}
];

const articles = [
  {
   author: users[1],
   title: "Lorem ipsum",
   text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,

   comments: [{author: users[2], text: "Me too"}, {author: users[1], text: "Great"}]
  },
  {
   title: "Duis aute",
   author: users[2],
   text: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    
   comments: [{author: users[2], text: "Definitely"}]
   }
  
  
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader title="The Blog" />
        <PageContent articles={articles}/>
      </div>
    )
  }
}

export default App;

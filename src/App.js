import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {data:[]};
  }

  componentDidMount() {
    this.search();
  }

  search(response){
    Search.getData().then((response) => {
      this.setState({data: Object.keys(response)});
    });
  }


  render() {
    return (
      <ul className="App">
        {this.state.data.map((item) => {
          return <li>{item}</li>
        })}
      </ul>
    );
  }
}

export default App;

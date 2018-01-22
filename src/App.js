import React, { Component } from 'react';
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
      <div className="App">
        <ul>
          {this.state.data.map((item) => {
            return <li key={item}>{item}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;

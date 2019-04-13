import React, { Component } from 'react';
import Graph from './Graph';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      graphs: [],
      paths: [],
      graphName: ''
    };

    this.createGraph = this.createGraph.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      graphName: e.target.value
    });
  }

  createGraph() {
    if (!this.state.graphName || this.state.graphs.includes(this.state.graphName)) {
      console.log('Vertex name must be unique');
      return;
    }

    this.setState(state => ({
      graphs: state.graphs.concat(state.graphName),
      graphName: String.fromCodePoint(state.graphName.codePointAt(state.graphName - 1) + 1)
    }));
  }

  render() {
    return (
      <div className='App'>
        <input
          type='text'
          value={this.state.graphName}
          onChange={this.handleChange} />

        <button
          onClick={this.createGraph}>
          Create Graph
        </button>

        <input
          type='text'
          value={this.state.graphName}
          onChange={this.handleChange} />

        <button
          onClick={this.createGraph}>
          Add Path
        </button>

        <div className='Graphs'>
          {this.state.graphs.map(graph => (
            <Graph
              key={graph}
              prefix={graph}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

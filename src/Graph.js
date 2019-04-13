import React, { Component } from 'react';
import Vertex from './Vertex';


class Graph extends Component {
  constructor(props) {
    super(props);

    this.prefix = this.props.prefix;
    this.vertexCount = 0;
    this.state = {
      vertices: []
    };

    this.addVertex = this.addVertex.bind(this)
  }

  addVertex() {
    this.setState(state => ({
      vertices: state.vertices.concat(this.prefix + (++this.vertexCount)),
    }));
  }

  render() {
    return (
      <div className='Graph'>
        <button
          className='Graph-Button'
          onClick={this.addVertex}>Add Vertex</button>

        <div className='Vertices'>
          {this.state.vertices.map(vertex => (
            <Vertex
              key={vertex}
              name={vertex} />
          ))}
        </div>
      </div>
    );
  }
}

export default Graph;

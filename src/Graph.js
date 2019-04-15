import React, { Component } from 'react';
import Vertex from './Vertex';
import Path from './Path';

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

        <table>
          <tr>
            <th>Vertices</th>
            <th>A</th>
            <th>B</th>
          </tr>

          {this.state.vertices.map(vertex => (
            <tr>
              <td className='Vertices'>
                <Vertex key={vertex} name={vertex} />
              </td>
              <td>
                <Path />
              </td>
              <td>
                <Path />
              </td>
            </tr>
          ))}
        </table>

      </div>
    );
  }
}

export default Graph;

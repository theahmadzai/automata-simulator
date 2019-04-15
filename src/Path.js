import React, { Component } from 'react';
import Vertex from './Vertex';

class Path extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className='Path'>
        <Vertex name={'a'} />
        <Vertex name={'b'} />
      </div>
    );
  }
}

export default Path;

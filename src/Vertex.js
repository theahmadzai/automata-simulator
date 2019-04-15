import React, { Component } from 'react';

class Vertex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edges: new Map()
    };

    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(e) {
    console.log(e)
  }

  render() {
    return (
      <div className='Vertex'
        onDrop={this.onDrop}
        draggable>{this.props.name}
      </div>
    );
  }
}

export default Vertex;

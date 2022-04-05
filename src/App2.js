import React, { Component } from 'react'

export default class App2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
       nombre : ''
    }
  }

  captura(e) {
    this.setState({ 
      nombre : this.refs.anything.value
    })
  }

  render() {
    return (
      <div>
        <input type="text" ref="anything"  onChange={this.captura.bind(this)} />
        <p>{this.state.nombre}</p>
      </div>
    )
  }
}

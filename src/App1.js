import React, { Component } from 'react'

export default class App1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
       nombre : ''
    }
  }

  captura(e) {
    this.setState({
      nombre : e.target.value
    })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.captura.bind(this)} />
        <p>{this.state.nombre}</p>
      </div>
    )
  }
}

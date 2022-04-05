import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       nombre : ''
    }
    console.log("1")
  }

  componentDidMount() {
    console.log("2")
    this.a.oninput  = this.captura.bind(this)
  }

  captura(e) {
    this.setState({ 
      nombre : this.a.value
    })
  }

  render() {
    console.log("3")
    return (
      <div>
        <input type="text" ref={(miko) => {this.a = miko}}  />
        <p>{this.state.nombre}</p>
      </div>
    )
  }
}

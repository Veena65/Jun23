
import React, { Component } from 'react'
import UpdateComp from './Updatecomp'

class Clickcomp extends Component {
  render() {
    const {count,increment} = this.props
    return (
      <div>
        <button onClick={increment}>Count on increment:{count}</button>
      </div>
    )
  }
}

export default UpdateComp(Clickcomp);
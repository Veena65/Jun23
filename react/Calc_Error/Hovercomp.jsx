
import React, { Component } from 'react'
import UpdateComp from './Updatecomp'

class Hovercomp extends Component {
  render() {
    const {count,increment} = this.props
    return (
      <div>
         <h1 onMouseOver={increment}>Mouse on hover increments count:{count}</h1>
      </div>
    )
  }
}
export default UpdateComp(Hovercomp)

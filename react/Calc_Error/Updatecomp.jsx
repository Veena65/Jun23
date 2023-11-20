import React, { Component } from 'react'

const UpdateComp = (OrignalComponent)=>{
class Democomp extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            count : 0
        }
    }
    increment = ()=>{
        this.setState((prevState) => {
            return { count: prevState.count + 1 }
          })
    }
  render() {
    return (
      
        <OrignalComponent count={this.state.count}
            increment={this.increment} 
            {...this.props}/>
      
    );
  }
}
return Democomp;
}
export default UpdateComp
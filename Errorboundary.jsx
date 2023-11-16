import React, { Component } from 'react'

export class Errorboundary extends Component {
    constructor(props)
    {
        super(props);
        this.state ={
            haserror : false
        }
    }

    static getDerivedStateFromError(error)
    {
        return { haserror :true };
    }
    // componentDidCatch(error,errorInfo)
    // {
    //     console.log(error);
    //     console.log(errorInfo);
    // }
  render() {
    if(this.state.haserror === true)
    {
        return <p style={{color:'red',textAlign:'center'}}>Something went wrong</p>;
    }
    else
        return this.props.children;
  }
}

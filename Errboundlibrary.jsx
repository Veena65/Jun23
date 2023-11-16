import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Fallback from './Fallback'
import Counter from './Counter'

const Errboundlibrary = () => {
  
  
    return (

    <div>
       <ErrorBoundary FallbackComponent={Fallback} >
            <Counter />
       </ErrorBoundary>
     
       
    </div>
  )
}

export default Errboundlibrary
import React from 'react'

function Auth(Component)
{
    return function(props){
        const isAuth = props.isAuth;
        if(!isAuth){
            return <h1>Unauthorized Access</h1>
        }
        return <Component />
    }
}

export default Auth
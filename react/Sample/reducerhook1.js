import React from "react";
import { useReducer } from "react";

export default function Sumdiff()
{
    const [state,dispatch] = useReducer(reducer,{count:0});

    function increment()
    {
        dispatch({
            type:'increment'
        });
    }

    function decrement()
    {
        dispatch({
            type:'decrement'
        });
    }

    return (
        <>
            <button onClick={increment}>+</button>
            Count:{state.count}
            <button onClick={decrement}>-</button>
        </>
    );

}

function reducer(state,action)
{
    switch(action.type)
    {
        case 'increment':
            return {count : state.count+1};
        case 'decrement':
            return {count : state.count-1};
        default:
            return state;
    }
}
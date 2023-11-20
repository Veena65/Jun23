

const initialstate={count:0};
const Counterreducer=(state=initialstate,action)=>
{
    switch (action.type)
    {
        case "Increment":
            return { count:state.count+1};
        case "Decrement":
            return { count:state.count-1};
        default:
            return state;
    }
}

export default Counterreducer;
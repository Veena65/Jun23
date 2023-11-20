import React,{useState} from 'react';

// function Samphook()
// {

    // const [count,setCount] = useState(0);
    // return (
    //     <div>
    //         <h1>Count:{count}</h1>
    //         <button onClick={ () => setCount(count+1)}>Increment</button>
    //     </div>
    // )


// }

// export default Samphook;

function Car()
{
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });
      console.log('Rendering');

      const updateColor = () => {
        setCar(previousState => {
          return { ...previousState, color: "blue" }
        });
      }

      return (
        <>
          <h1>My {car.brand}</h1>
          <p>
            It is a {car.color} {car.model} from {car.year}.
          </p>
          <button
            type="button"
            onClick={updateColor}
          >Blue</button>
        </>
      );

}

export default Car;
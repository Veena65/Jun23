import React, { useState } from 'react'

const Radiofilter = () => {
    const initialstate = [
       { name:"T-Shirt" , catagory:"men" ,price:590},
       { name:"Saree" , catagory:"women", price:200 },
       { name:"Frok" , catagory:"kid",price:1000},
       { name:"Kurthi" , catagory:"women",price:700},
       { name:"Pant" , catagory:"men",price:400},
       { name:"Toys" , catagory:"kid", price:800}
    ];
    
    const [items,setItems] = useState(initialstate);
    const [filtercatagory,setFiltercatagory] = useState('all');
    const [min,setMin] = useState('');
    const [max,setMax] = useState('');

    let changeCatagory = ((event)=>{
       setFiltercatagory(event.target.value);
    })

    const filteredData1 = items.filter((item) => {
        if (filtercatagory === 'all') {
          return true;
        } 
        else {
          return item.catagory === filtercatagory;
        }
      });
    let handleMinChange = ((event)=>{
      setMin(event.target.value)
    })
    let handleMaxChange = ((event)=>{
      setMax(event.target.value)
    })

    const filteredData = filteredData1.filter((item)=>{
       let price = item.price;
       let minprice = min === '' ? Number.MIN_SAFE_INTEGER:parseInt(min);
       let maxprice = max === '' ? Number.MAX_SAFE_INTEGER:parseInt(max);
       return price>=minprice && price <= maxprice;
    })

  return (
    <div>
      <input type="radio" value='all' checked={filtercatagory === 'all'} onChange={changeCatagory}/>All
      <input type="radio" value='men' checked={filtercatagory === 'men'} onChange={changeCatagory}/>Mens
      <input type="radio" value='women' checked={filtercatagory === 'women'} onChange={changeCatagory}/>Womens
      <input type="radio" value='kid' checked={filtercatagory === 'kid'} onChange={changeCatagory}/>Kids 
      <br />
      Minimum Price: <input type="number" onChange={handleMinChange} value={min}/>
      Maximum Price: <input type="number" onChange={handleMaxChange} value={max}/>

      {
        filteredData.map((item)=>{
          return (
            <li id='item.key'>{item.name} {item.price}</li>
          )
        })
      }

    </div>
  )
}

export default Radiofilter
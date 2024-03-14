import { useEffect, useState } from 'react'

import './App.css'

function App ()
{
  const [products,setProducts]=useState([])
 useEffect(() =>
  {
   fetch("https://fakestoreapi.com/products")
     .then((res) => res.json())
     .then((data) => setProducts(data))
     .catch((err)=>console.assert.log("my error"+err))
  },[])
  return (
		<div>
			<h1>Manish solution Pvt.Ltd</h1>
			<h1>use Effect Demo- fetching products</h1>
      
			<div style={{ display: "grid", gridTemplateColumns: "repeat(4,2fr)" }}>
				{products.map((pr, index) => (
					<div
						style={{ boxShadow: "5px 5px 5px black" }}
						key={index}>
						<img
							src={pr.image}
							alt={pr.title}
							height='50'
							width='100'
						/> 
						
            <td> add item</td>
            
					</div>
				))}
			</div>
		</div>
	)
}
    

export default App
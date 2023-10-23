import React, { useState } from 'react'
import Header from './component/Header'
import { ToastContainer } from 'react-toastify';
import Hero from './component/Home/Hero'
import Cards from './component/Home/Cards'
import Products from './component/Products'
import Plans from './component/Plans'
import Blog from './component/Blog';
 import products from './Data/data'
const Main = ( ) => {
  // hande filyering 
  const [Items,setItems]=useState(products)
  const meanuBtns=[...new Set(products.map((item)=>item.category))]
  const filterProducts=(cat)=>{
    const NewProduct=products.filter((item)=>item.category === cat)
    setItems(NewProduct)
  }
  return (
    <div>

    
        <Header />
        <Hero  />
        <Cards/>

        <Products
         Items={Items} 
        setItems={setItems}
        filterProducts={filterProducts}
        meanuBtns={meanuBtns} />
         <Plans/>
         <Blog/>
       <ToastContainer/>
    </div>
  )
}

export default Main
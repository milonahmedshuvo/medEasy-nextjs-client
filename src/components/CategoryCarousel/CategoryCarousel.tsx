/* eslint-disable @next/next/no-img-element */
"use client"

import { useEffect, useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from "react-icons/fa6";


interface Item {
  _id: string;
  category: string;
  image: string
}



const CategoryCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [items, setItems] = useState<Item[]>([])

  useEffect(()=>{
    fetch("http://localhost:5000/categoris")
    .then(res => res.json())
    .then((data)=> setItems(data))
  },[])






  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex === items.length - 5 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? items.length - 5 : prevIndex - 1));
  };

  return (
    <div className='mt-10'>
      <p className='font-medium text-xl'>Product Categories</p>


     <div className="flex items-center justify-between mt-5">
      <button
        onClick={prevSlide}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full"
      >
        <FaAngleLeft/>
      </button>
      <div className="flex space-x-6 overflow-hidden ">
        {items.slice(startIndex, startIndex + 5).map((product) => (
          <div key={product._id} className="border rounded-xl py-4 px-10 flex flex-col justify-center items-center ">
            <img src={product.image} alt="categoriImage" className='w-[80px]' />
            <p className='font-medium mt-5'>{product.category}</p>
          </div>
        ))}

      </div>
      <button
        onClick={nextSlide}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4  rounded-full"
      >
        {/* Next */}
        <FaAngleRight/>
      </button>
    </div>

    </div>
  );
};

export default CategoryCarousel;

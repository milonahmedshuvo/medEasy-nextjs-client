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
    <div className="flex items-center justify-between mt-10">
      <button
        onClick={prevSlide}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
      >
        <FaAngleLeft/>
      </button>
      <div className="flex space-x-4 overflow-hidden">
        {items.slice(startIndex, startIndex + 5).map((product) => (
          <div key={product._id} className="border rounded-lg py-4 px-12 flex flex-col justify-center items-center ">
            <img src={product.image} alt="categoriImage" className='w-[80px]' />
            <p className='font-medium mt-5'>{product.category}</p>
          </div>
        ))}

      </div>
      <button
        onClick={nextSlide}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
      >
        {/* Next */}
        <FaAngleRight/>
      </button>
    </div>
  );
};

export default CategoryCarousel;

/* eslint-disable @next/next/no-img-element */
"use client"

import { useEffect, useState } from 'react';

const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
  { id: 4, name: 'Product 4' },
  { id: 5, name: 'Product 5' },
  { id: 6, name: 'Product 6' },
  { id: 7, name: 'Product 7' },
  { id: 8, name: 'Product 8' }
  // Add more products as needed
];

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


  console.log(items, )



  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex === products.length - 5 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? products.length - 5 : prevIndex - 1));
  };

  return (
    <div className="flex items-center justify-between">
      <button
        onClick={prevSlide}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
      >
        Previous
      </button>
      <div className="flex space-x-4 overflow-hidden">
        {items.slice(startIndex, startIndex + 5).map((product) => (
          <div key={product._id} className="bg-gray-200 py-4 px-10 flex-shrink-0 flex flex-col justify-center items-center ">
            <img src={product.image} alt="categoriImage" className='w-[80px]' />
            <p className='font-medium mt-5'>{product.category}</p>
          </div>
        ))}

      </div>
      <button
        onClick={nextSlide}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
      >
        Next
      </button>
    </div>
  );
};

export default CategoryCarousel;

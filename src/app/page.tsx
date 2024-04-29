import Carousel from '@/components/Carousel/Carousel';
import CategoryCarousel from '@/components/CategoryCarousel/CategoryCarousel';
import ThreeCart from '@/components/ThreeCart/ThreeCart';
import React from 'react'

const page = async () => {

    

  return (
    <div>
       <Carousel />
       <CategoryCarousel />
       <ThreeCart/>
    </div>
  )
}

export default page;
 
import Image from 'next/image';
import React from 'react';

const FooterPage = () => {
    return (
        <div className='bg-[#000000] py-20'>
           <h1>Footer page </h1>





           <div className='flex justify-center'>
            <div className='w-[450px] border'>
                <p className='text-xl font-semibold'>MedEasy</p>
            </div>

            <div className='w-[250px] border'>
                <div className='bg-[#25A8D6] w-[70px] h-[60px] md:w-[70px] md:h-[60px] rounded-xl flex justify-center items-center'>
                      <Image 
                      src="https://medeasy.health/icons/footer-messages.svg"
                      width={30}
                      height={30}
                      alt='logo'
                       />
                </div>
            </div>

            <div className='w-[250px] border'>
            <div className='bg-[#25A8D6] w-[70px] h-[60px] rounded-xl flex justify-center items-center'>
                      <Image 
                      src="https://medeasy.health/icons/footer-messages.svg"
                      width={30}
                      height={30}
                      alt='logo'
                       />
                </div>
            </div>
           </div>



        {/* line 2  */}
        <div className='flex justify-center my-4'>
            <div className='w-[450px] border'>
                <p className='text-xl font-semibold'>About us</p>
            </div>

            <div className='w-[250px] border'>
                <p>Email:support@medeasy.health</p>
            </div>

            <div className='w-[250px] border'>
            <p>Level:3, Road: 14,C 180/6,</p>
            </div>
           </div>



           {/* line 4  */}
           <div className='flex justify-center my-4'>
            <div className='w-[450px] border'>
                <p className='text-lg font-semibold'>Return and Refund Policy</p>
            </div>

            <div className='w-[250px] border'>
                <p>01844671112</p>
                <p>01774671112</p>
            </div>

            <div className='w-[250px] border'>
            <p>Trade License:</p>
            <p>TRAD/DNCC/131766/2022</p>
            </div>
           </div>
        






        </div>
    );
};

export default FooterPage;
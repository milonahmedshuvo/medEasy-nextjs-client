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
                <div className='bg-[#25A8D6] w-[70px] h-[60px] rounded-xl flex justify-center items-center'>
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
        


        </div>
    );
};

export default FooterPage;
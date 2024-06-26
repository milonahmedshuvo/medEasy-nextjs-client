import Image from 'next/image';
import React from 'react';




const FooterPage = () => {
    return (
        <div className='bg-[#000000] py-20'>
           





           <div className='flex justify-center py-2'>
            <div className='w-[450px] border'>
                <p className='text-xl font-semibold text-white'>MedEasy</p>
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
        <div className='flex justify-center my-4 py-2'>
            <div className='w-[450px] border'>
                <p className='text-xl font-semibold text-white'>About us</p>
            </div>

            <div className='w-[250px] border'>
                <p className='text-white'>Email:support@medeasy.health</p>
            </div>

            <div className='w-[250px] border'>
            <p className='text-white'>Level:3, Road: 14,C 180/6,</p>
            </div>
           </div>



          
         {/* line 4  */}
         <div className='flex justify-center py-2'>
            <div className='w-[450px] border'>
                <p className='text-xl font-semibold text-white'>MedEasy</p>
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





 {/* line 5  */}
 <div className='flex justify-center my-4 py-2'>
            <div className='w-[450px] border'>
                <p className='text-lg font-semibold text-white'>Return and Refund Policy</p>
            </div>

            <div className='w-[250px] border'>
                <p className='text-white'>01844671112</p>
                <p className='text-white'>01774671112</p>
            </div>

            <div className='w-[250px] border'>
            <p className='text-white'>Trade License:</p>
            <p className='text-white'>TRAD/DNCC/131766/2022</p>
            </div>
           </div>




           {/* line 6  */}
            <div className='flex justify-center my-4'>
            <div className='w-[450px] border'>
            <Image
          src="https://medeasy.health/assets/images/medEasyIcon.svg"
          width={60}
          height={500}
          alt="Picture of the author"
        />
            </div>

            

            <div className='w-[500px] border'>
            
            
            </div>
            
           </div>
        


        

        </div>
    );
};

export default FooterPage;
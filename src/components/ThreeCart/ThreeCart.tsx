/* eslint-disable @next/next/no-img-element */

const cartDetails = [
  {
    img: "https://medeasy.health/_next/image?url=%2Fassets%2Fimages%2Fupload.png&w=32&q=75",
    title:"Upload",
    subTitle: "Prescriptions"
    
  }
]

const ThreeCart = () => {
  return (
    <div>
      <p>treee cart </p>
      {
        cartDetails.map((cart, index)=> <div key={index} className="flex items-center bg-[#82CCDD]"> 

           <div>
            <img src={cart.img} alt="" />
           </div>
           <div>
            <p>{cart.title}</p>
            <p>{cart.subTitle}</p>
           </div>
        </div>)
      }
    </div>
  )
}

export default ThreeCart

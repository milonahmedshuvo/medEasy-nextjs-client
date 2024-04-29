/* eslint-disable @next/next/no-img-element */

const cartDetails = [
  {
    img: "https://medeasy.health/_next/image?url=%2Fassets%2Fimages%2Fupload.png&w=32&q=75",
    title: "Upload",
    subTitle: "Prescriptions",
    bgColor: "bg-[#82CCDD]",
  },
  {
    img: "https://medeasy.health/_next/image?url=%2Fassets%2Fimages%2Fconsultation.png&w=32&q=75",
    title: "Doctor",
    subTitle: "Consultation",
    bgColor: "bg-[#38ADA9]",
  },
  {
    img: "https://medeasy.health/_next/image?url=%2Fassets%2Fimages%2Fphone-call.png&w=32&q=75",
    title: "Call to Order: 01844-",
    subTitle: "671112",
    bgColor: "bg-[#3C6382]",
  },
];

const ThreeCart = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
      {cartDetails.map((cart, index) => (
        <div
          key={index}
          className={`flex items-center border pl-20 py-11 gap-4 rounded-2xl  ${cart.bgColor}`}
        >
          <div>
            <img src={cart.img} alt="" />
          </div>
          <div>
            <p className="text-white font-medium text-xl">{cart.title}</p>
            <p className="text-white font-medium text-xl">{cart.subTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThreeCart;

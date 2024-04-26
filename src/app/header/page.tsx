import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderPage = () => {
  return (
    <div className="bg-[#25A8D6] py-3">

      <div className="flex items-center text-white text-xl font-medium">
        <Image
          src="https://medeasy.health/assets/images/medEasyIcon.svg"
          width={60}
          height={500}
          alt="Picture of the author"
        />

        <h3>MedEasy</h3>
      </div>
    </div>
  );
};

export default HeaderPage;

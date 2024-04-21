/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderPage from "./header/page";
import FooterPage from "@/components/footer/page";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { FaAngleRight } from "react-icons/fa6";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const res = await fetch("http://localhost:5000/categoris", {
    cache: "force-cache",
  });
  const categoris = await res.json();

  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderPage />
        <div className="flex flex-col md:flex-row justify-start  ">

          <div className=" w-full md:w-1/5 ml-4  pr-3">
            {categoris.map(
              (
                category: { image:string, category: string },
                i: string
              ) => (
                <div key={i} className="flex justify-between items-center my-12 ">
                  <div className="flex gap-2">
                   

                    <img src={category.image} alt="categoriImage" className="w-[30px]" />

                    <p className="text-lg font-medium text[#000000]">
                      {category.category}
                    </p>
                  </div>

                  <div>
                    <p className="text-lg font-normal"> <FaAngleRight/> </p>
                  </div>
                </div>
              )
            )}
          </div>

          {/* all home components  */}
          <div className="border w-4/5">
            {children}
          </div>

        </div>

        {/* <FooterPage/> */}
      </body>
    </html>
  );
};

export default RootLayout;



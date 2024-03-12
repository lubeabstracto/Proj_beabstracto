import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import blogImg from '../assets/blogs.svg';


export default function Blog() {
  return (
    <div className=" flex flex-row items-center justify-center p-0 w-[1280px] h-[792px] bg-custom-gradient min-h-screen ml-14 gap-4">
      <div className="flex flex-col items-center p-0 gap-4 w-[1280px] h-[617px] flex-none order-0">
        <div className="flex flex-col justify-center items-center p-0 gap-1 w-[988.2px] h-[123px] ">
          <h1 className="text-font-color-light font-brand font-semibold text-heading-2 leading-[54px] ">
            Experts, nerds, exploradores.
           
          </h1>
          <h2 className="text-font-color-light font-brand w-[675px] h-[65px] text-center text-[21.6px] leading-[32px] tracking-[0.0012em] flex-none order-1 flex-grow-0">
            Tudo isso e mais um pouco. Somos curiosos de marketing, arte e tecnologia e juntos fazemos a equipe mais forte do mundo.
          </h2>
        </div>
        <div className="flex flex-row items-center justify-start overflow-x-scroll p-0 w-[1280px] h-[470px] ml-14 gap-4 px-14">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="">
              <div className="flex flex-col justify-center items-start p-0 space-y-4 w-68 h-117">
                <div className=" flex flex-col justify-center items-start p-0 gap-4 w-68 h-118 ">

                    <div className="w-68 h-76 p-2 rounded-md flex items-center justify-center overflow-hidden">
                    <img className="w-full h-full object-cover" src={blogImg.src} alt="Blog" />
                   </div>

                 
                  <div className="flex flex-col items-start p-0 space-y-2 w-68 h-38">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      SOMOS MARKETEIROS
                    </h2>
                    <p className="mt-2 text-heading-3 font-semibold leading-8">
                      Lorem ipsum dolor sit amet consectetur. Sed aliquet adipiscing pulvinar pulvinar varius.
                    </p>
                  </div>
                 
                 <div className="flex flex-row justify-center items-center py-2 pl-2 pr-0 gap-2 w-[146px] h-10 rounded order-2 flex-none">
                  <button>
                    Todos serviços 
                    <FaArrowRight />
                  </button>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

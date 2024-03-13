import React from "react";

import arrowright from "../assets/arrowright.svg";

import portif2 from "../assets/portif2.svg";
import portif1 from "../assets/portif1.svg";

const posts = [
  {
    id: 1,
    title: "SOMOS MARKETEIROS",

    description:
      "Lorem ipsum dolor sit amet consectetur. Sed aliquet adipiscing pulvinar pulvinar varius.",
    imageUrl: portif1,
  },

  {
    id: 2,
    title: "SOMOS MARKETEIROS",

    description:
      "Lorem ipsum dolor sit amet consectetur. Sed aliquet adipiscing pulvinar pulvinar varius.",
    imageUrl: portif1,
  },

  {
    id: 3,
    title: "SOMOS MARKETEIROS",

    description:
      "Lorem ipsum dolor sit amet consectetur. Sed aliquet adipiscing pulvinar pulvinar varius.",

    imageUrl: portif2,
  },

  {
    id: 4,
    title: "SOMOS MARKETEIROS",

    description:
      "Lorem ipsum dolor sit amet consectetur. Sed aliquet adipiscing pulvinar pulvinar varius.",
    imageUrl: portif1,
  },

  {
    id: 5,
    title: "SOMOS MARKETEIROS",

    description:
      "Lorem ipsum dolor sit amet consectetur. Sed aliquet adipiscing pulvinar pulvinar varius.",
    imageUrl: portif1,
  },
  
];

export default function PostsCard() {
  return (
    <div className="flex flex-row items-center justify-center p-0 w-full h-full bg-custom-gradient min-h-screen ml-14 gap-4">
      <div className="flex flex-col items-center p-0 gap-4 w-full   h-full flex-none order-0">
        <div className="flex flex-col justify-center items-center p-0 gap-1 ">
          <h1 className="text-font-color-light font-brand font-semibold text-heading-2  ">
            Experts, nerds, exploradores.
          </h1>
          <h2 className="text-font-color-light font-brand mt-4 mb-6 w-full  h-full text-center text-heading-4 tracking-[0.0012em] flex-none order-1 flex-grow-0">
            Tudo isso e mais um pouco. Somos curiosos de marketing, arte e <br />
            tecnologia e juntos fazemos a equipe mais forte do mundo.
          </h2>
        </div>

        <div className=" flex flex-row items-center justify-start overflow-x-scroll p-0 w-full  h-full ml-14 gap-4 px-14">
          {posts.map((post) => (
            <div
              key={post.id}
              className=" flex flex-col justify-center items-start p-0 space-y-4 "
            >
              <div className=" relative w-full">
                <img
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
              </div>

              <div className="flex flex-col items-start p-0 gap-2 " />

              <h3 className=" font-subheading text-heading-4 leading-6 tracking-tighter text-font-color-dark">
                <span className="absolute inset-0" />
                {post.title}
              </h3>
              <p className="font-link text-heading-4 leading-6 text-font-color-muted-2">
                {post.description}
              </p>

              <div className="">
                <button className="flex flex-row justify-center items-center p-2 pl-0 gap-2 rounded-md order-2 flex-none">
                  <p className="text-heading-4 font-subheading text-azul-600 ">Todos serviços</p>
                  <img src={arrowright.src} alt="" className="" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

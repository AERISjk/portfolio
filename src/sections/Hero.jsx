import React from "react";
import backgroundImage from '../assets/image/BG.png';

const Hero = () => {
  return (
    <>

        <div className={` relative isolate overflow-hidden w-full h-fit bg-[#111111] bg-[url('${backgroundImage}')] bg-contain bg-center bg-no-repeat`} style={{ backgroundSize: 'contain' }}>
          <svg className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
            <defs>
              <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width={200} height={200} x="100%" y={-1} patternUnits="userSpaceOnUse">
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
              <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" strokeWidth={0} />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
          </svg>
          <div className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]" aria-hidden="true">
            <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-pink-200 to-pink-500 opacity-20" style={{ clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)' }}>
            </div>
          </div>
          <div className="w-full h-full bg-cover bg-center relative sm:pt-24 py-24 flex justify-center items-center " >
            <div className="lg:px-16 px-2 flex flex-col gap-6 justify-center items-center text-center text-white">

              <h1 class="sm:text-4xl text-2xl font-bold text-white sm:mb-52 mb-12">👋 Hey there! Welcome to My Crazy Portfolio! 🎉</h1>
              <p class=" mt-12 text-lg text-gray-200 ">I code, I design, I drink coffee (a lot), and sometimes, I even sleep! 🛌</p>

            </div>
          </div>
        </div>
    

    </>
  )
}

export default Hero
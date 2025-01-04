import React from 'react';

const AboutMe = () => {
    return (
        <>
            {/* Heading */}
          
            <section className="bg-[#111111] lg:px-16  md:pt-10 pt-24 md:px-20 px-8 " >
                <div className="w-fit">
                    <h2 className="text-2xl font-bold text-white pb-2">About Me</h2>
                    <div className="rounded-t-full border-[1px] border-gray-500 overflow-hidden">
                        <hr className="border-[3px] border-pink-400 w-[30%]" />
                    </div>
                </div>

                <div className="w-full h-full relative top-5 pb-20">
                    <div className=" flex sm:flex-row flex-col-reverse gap-6 justify-center items-center">
                        <div className="sm:text-left text-center text-white">
                            <h4 className="sm:text-2xl text-3xl font-semibold w-fit pb-3">My name is
                                <span className="text-pink-500 sm:text-2xl text-xl font-serif pl-3">SIEK CHHENGLY </span>
                            </h4>
                            {/* <h1 className="mt-4 sm:text-4xl text-5xl text-pink-500 ">
                                <span className="text-white">I'm</span> Web developer.
                            </h1> */}
                            <p className="mt-4 text-lg capitalize">Web development with a passion for building and maintaining user-friendly and visually appealing websites. Proven ability to learn new technologies quickly and work independently and as part of a team.</p>
                            <div className=" mt-6 flex sm:flex-row flex-col gap-4 sm:justify-start justify-center">
                                <a
                                    href="/CV - Siek Chhengly.pdf" // Path to the PDF in the public folder
                                    download="My_CV.pdf" // Desired name for the downloaded file
                                    className="p-2 px-6 text-white font-semibold rounded-full outline outline-2 outline-pink-500 hover:bg-pink-600 transition ease-in-out delay-150"
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>
                        {/* Image */}
                        <img className="md:max-w-[30%] sm:max-w-[40%] max-w-[70%] sm:rounded-sm sm:rounded-br-[5rem] sm:rounded-tl-[5rem] rounded-full sm:outline-none outline outline-[.3rem] outline-pink-400/60 shadow-lg shadow-pink-200/60" src="https://techakim.com/sam/tg/7268/li/imgs/profile.jpg" alt="My Pic" />

                    </div>
                </div>

            </section>
           
        </>
    )
}

export default AboutMe
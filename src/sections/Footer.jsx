import React from 'react'

const Footer = () => {
    return (
        <>
            <section className="bg-[#111111] lg:px-16 md:pt-20 pt-10 md:px-20 px-8  pb-24" >

              
                    <nav class="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">

                        <a class="hover:text-white" href="#">About ME</a>
                        <a class="hover:text-white" href="#">Skills</a>
                        <a class="hover:text-white" href="#">Work History</a>
                        <a class="hover:text-white" href="#">Resume</a>
                        <a class="hover:text-white" href="#">Contact</a>
                    </nav>

                    <div class="flex justify-center space-x-5 pt-12">
                        <a href="https://github.com/AERISjk" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/fluent/30/000000/github.png" />
                        </a>
                        <a href="https://www.linkedin.com/in/chhengly-siek-5b475323b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
                        </a>
                        <a href="https://www.instagram.com/aeris__l_/profilecard/?igsh=cjFldjh3cmoxYWc5" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
                        </a>
                       
                      
                    </div>
               
            </section>
        </>
    )
}

export default Footer
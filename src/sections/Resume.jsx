import React from 'react'

const Resume = () => {
  return (
    <>
      <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div class="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Background Image" class="object-cover object-center w-full h-full" />
          <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1
            class="mx-auto max-w-3xl font-display text-3xl font-bold leading-tight mb-4 text-white-300 sm:text-5xl">
           Download My

            <span class="relative whitespace-nowrap text-pink-700 dark:text-pink-500">
              <svg aria-hidden="true" viewBox="0 0 418 42" class="absolute top-2/3 left-0 h-[0.58em] w-full fill-pink-700 dark:fill-pink-500/60" preserveAspectRatio="none">
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
              <span class="relative pl-4 ">Resume </span>
            </span>
            and Let's Get Connected!
          </h1>
          <p class="text-lg text-gray-300 mb-8">Available in PDF Format for Easy Download and Sharing.</p>
          <a
            href="/CV - Siek Chhengly.pdf" // Path to the PDF in the public folder
            download="My_CV.pdf" // Desired name for the downloaded file
            className="p-2 px-6 text-white font-semibold rounded-full outline outline-2 outline-pink-500 hover:bg-pink-600 transition ease-in-out delay-150"
          >
            Download CV
          </a>
        </div>
      </div>


    </>
  )
}

export default Resume
import React from "react";
import Marquee from "react-fast-marquee";

const ScrollLogo = () => {
  const logos = [
    {
      src: "https://www.svgrepo.com/show/452228/html-5.svg",
      alt: "Microsoft Logo",
    },
    {
      src: "https://www.svgrepo.com/show/452045/js.svg",
      alt: "PayPal Logo",
    },
    {
        src: "https://www.svgrepo.com/show/452185/css-3.svg",
        alt: "PayPal Logo",
      },
    {
      src: "https://www.svgrepo.com/show/354259/react.svg",
      alt: "Google Logo",
    },
    {
      src: "https://www.svgrepo.com/show/374118/tailwind.svg",
      alt: "Chase Logo",
    },
    {
      src: "https://www.svgrepo.com/show/354238/python.svg",
      alt: "Walmart Logo",
    },
    {
        src: "https://www.svgrepo.com/show/353985/laravel.svg",
        alt: "Walmart Logo",
      },
      {
        src: "https://www.svgrepo.com/show/353657/django-icon.svg",
        alt: "Walmart Logo",
      },
      {
        src: "https://www.svgrepo.com/show/255832/sql.svg",
        alt: "Walmart Logo",
      },
      {
        src: "https://www.svgrepo.com/show/354200/postgresql.svg",
        alt: "Walmart Logo",
      },
      {
        src: "https://www.svgrepo.com/show/303251/mysql-logo.svg",
        alt: "Walmart Logo",
      },
      {
        src: "https://www.svgrepo.com/show/354987/figma.svg",
        alt: "Walmart Logo",
      },
      {
        src: "https://www.svgrepo.com/show/512317/github-142.svg",
        alt: "Walmart Logo",
      },
      {
        src: "https://www.svgrepo.com/show/353785/gitlab.svg",
        alt: "Walmart Logo",
      },
      {
        src: "https://www.svgrepo.com/show/354202/postman-icon.svg",
        alt: "Walmart Logo",
      },
      {
        src: "https://www.svgrepo.com/show/473818/unity.svg",
        alt: "Walmart Logo",
      },
      {
        src: "https://www.svgrepo.com/show/452129/vs-code.svg",
        alt: "Walmart Logo",
      },
      
  ];

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/150?text=Logo+Missing"; // Fallback image
    e.target.alt = "Placeholder Logo";
  };

  return (
    <Marquee speed={100}>
      <div className="flex items-center justify-center bg-white py-6">
        {logos.map((logo, index) => (
          <div className="flex-shrink-0 mx-6 "  key={index}>
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-12 w-auto"
              loading="lazy"
              onError={handleImageError} // Handle broken image URLs
            />
          </div>
        ))}
      </div>
    </Marquee>
  );
};

export default ScrollLogo;

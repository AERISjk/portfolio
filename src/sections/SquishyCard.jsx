import { motion } from "framer-motion";
import React from "react";
import image from "../assets/image/pic1.jpg";
import workData from "./Data/WorkData";

const SquishyCard = () => {
  return (
    <section className="bg-[#111111] px-4 py-12">
      <div className="mx-auto flex flex-wrap justify-center gap-8">
        {workData.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

const Card = ({ project }) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-2xl bg-pink-500 p-8"
    >
      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
          {project.date || "Pro"}
        </span>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-2 pb-4 block origin-top-left  font-mono text-4xl font-black leading-[1.2]"
        >
          {project.title || "299"}
          <br />
          {project.title1 || "Month"}
        </motion.span>
        <p>{project.description || "No description provided."}</p>
      </div>
      <a href={project.link}>
      <button className="absolute bottom-4 left-4 right-4 z-20  border-2 border-white bg-[#111111]  py-2 text-center font-mono uppercase  backdrop-blur  p-2 px-6 text-white font-semibold rounded-full outline outline-2 outline-pink-500 hover:bg-pink-600 transition ease-in-out delay-150 ">
        View details
      </button>
      </a>
      <motion.img
        src={image}
        alt="Background"
        className="absolute inset-0 z-0"
        variants={{
          hover: {
            scale: 1.5,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
      />
    </motion.div>
  );
};

export default SquishyCard;

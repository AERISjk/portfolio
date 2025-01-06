import React, { useState } from "react";
import { FaDatabase, FaHtml5, FaNodeJs, FaReact, } from "react-icons/fa"; // Import required icons
import skillData from "./Data/data";

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState("frontend");

    return (
        <section className="bg-[#111111] lg:px-16 md:pt-20 pt-24 md:px-20 px-8">
            {/* Header */}
            <div className="w-fit">
                <h2 className="text-2xl font-bold text-white pb-2">Technical Skills</h2>
                <div className="rounded-t-full border-[1px] border-gray-500 overflow-hidden">
                    <hr className="border-[3px] border-pink-400 w-[50%]" />
                </div>
            </div>

            {/* Grid Layout */}
            <div className="w-full h-full relative top-5 pb-20">
            <div
                className="pt-12 grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 w-full max-w-6xl mt-8"
                style={{
                    gridTemplateRows: "auto",
                }}
            >
                {/* Left Section: Buttons */}
                <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                    {Object.keys(skillData).map((key) => (
                        <div
                            key={key}
                            onClick={() => setSelectedSkill(key)}
                            className={`relative text-white outline outline-2 outline-pink-500 hover:bg-pink-600 transition ease-in-out delay-150 rounded-lg shadow-lg cursor-pointer ${selectedSkill === key ? "bg-pink-600" : "bg-[#111111]"
                                }`}
                            style={{
                                height: "100px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {/* Icon */}
                            <div className="absolute -top-3 left-1 transform -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-xl border border-pink-500 bg-[#111111] shadow-md">
                                {React.createElement(
                                    {
                                        FaHtml5,
                                        FaNodeJs,
                                        FaReact,
                                        FaDatabase,
                                    }[skillData[key].icon],
                                    { className: "h-6 w-6 text-pink-500" }
                                )}
                            </div>
                            <h2 className=" text-lg font-semibold text-center">
                                {skillData[key].title}
                            </h2>
                        </div>
                    ))}
                </div>

                {/* Right Section: Dynamic Skill List */}
                <div className="p-6 sm:pb-18  outline outline-2 outline-pink-500 text-white rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4 ">
                        {skillData[selectedSkill].title}
                    </h3>
                    <p className="mb-4 z">{skillData[selectedSkill].description}</p>
                    <ul className="space-y-4">
                        {skillData[selectedSkill].technologies.map((tech, index) => (
                            <li key={index} className="flex flex-col">
                                <div className="flex justify-between">
                                    <span>{tech.name}</span>
                                    <span>{tech.proficiency}%</span>
                                </div>
                                <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
                                    <div
                                        className="bg-pink-600 h-full"
                                        style={{ width: `${tech.proficiency}%` }}
                                    ></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Skills;

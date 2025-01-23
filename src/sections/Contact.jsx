import React from 'react';

const Contact = () => {
    return (
        <section className="bg-[#111111] lg:px-16 md:pt-10 pt-24 md:px-20 px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white pb-2">Get In Touch</h2>
                <div className="flex justify-center">
                    <div className="rounded-t-full border border-gray-500 overflow-hidden w-24">
                        <hr className="border-4 border-pink-400" />
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center items-center">
                {/* Form Section */}
                <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                    <form className="space-y-6" action="https://formspree.io/f/xgvvpnkp" method="POST">
                        <div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                className="w-full p-4 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Message"
                                className="w-full p-4 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full md:w-auto px-6 py-3 text-white font-semibold rounded-full bg-pink-600 hover:bg-white hover:text-black transition ease-in-out delay-150 border-2 border-pink-500"
                        >
                            Let's Talk
                        </button>
                    </form>
                </div>

                {/* Spline Viewer Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="rounded-full overflow-hidden aspect-square max-w-[20rem] max-h-[20rem] md:max-w-[35rem] md:max-h-[35rem] shadow-2xl">
                        <spline-viewer url="https://prod.spline.design/54R5Go6eZPA2o6vq/scene.splinecode"></spline-viewer>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

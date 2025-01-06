import React from 'react'
import SquishyCard from './SquishyCard'

const AdditionalWork = () => {
    return (
        <>

            <section className="bg-[#111111] lg:px-16  md:pt-10 pt-24 md:px-20 px-8 " >
                <div className="w-fit">
                    <h2 className="text-2xl font-bold text-white pb-2">Additional Project</h2>
                    <div className="rounded-t-full border-[1px] border-gray-500 overflow-hidden">
                        <hr className="border-[3px] border-pink-400 w-[75%]" />
                    </div>
                </div>


                <SquishyCard/>

            </section>

        </>
    )
}

export default AdditionalWork
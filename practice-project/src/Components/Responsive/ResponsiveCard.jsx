import React from "react";

function ResponsiveCard() {
    return (
        <>
            <div className="mt-3">
                <div className="max-w-sm mx-auto bg-slate-200 rounded-xl
                 overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                        <div>
                            <img className="h-48 w-full object-cover
                            md:h-full md:w-48" src="https://images.pexels.com/photos/269583/pexels-photo-269583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wider
                            font-bold text-indigo-600">An Awesome Card</div>
                            <a className="block text-lg
                            text-black hover:text-red-600" href="#">TailwindCss is amazing ! once you understand the 
                            <span className="bg-yellow-500 text-white hover:text-black p-[2px] px-[14px]">Power</span> of it</a>
                            <p className="mt-2 text-slate-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, soluta?</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResponsiveCard
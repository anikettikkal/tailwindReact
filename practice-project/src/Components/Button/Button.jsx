import React from "react";

function Button() {
    return (
        <>
            <div className="grid place-content-center mt-4">
                <button className="w-25 h-10 text-base bg-sky-700 text-black rounded-xl
        hover:bg-black hover:text-white">Buy Now</button>
            </div>

            <div className="text-center my-4">
                <p className="text-3xl md:text-green-500
                sm:text-red-600">Lorem ipsum, dolor sit amet consectetur adipisicing </p>
            </div>
        </>
    )
}
export default Button
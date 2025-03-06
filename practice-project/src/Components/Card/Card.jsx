import React from "react";

function Card() {
    return (
        <>
            <div className="main-div">

                <div className="p-6 max-w-sm mx-auto bg-black rounded-xl shadow-lg flex items-center space-x-4">

                    <div className="img-div">
                        <img className="h-40 w-40" src="https://img.freepik.com/free-vector/hand-drawn-wedding-cake-with-topper_23-2149020548.jpg?t=st=1741280241~exp=1741283841~hmac=ec6a3199fe33a2a8f67d875746d0f8d32a6e7acdf5e77e8ea2cfa59fd54ae059&w=900" alt="" />
                    </div>

                    <div className="content text-2xl font-medium ">
                        <h2 className="text-white ">IceCream-Cake</h2>
                        <p className="text-red-600 text-xl">Best Cake of our Shop</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Card
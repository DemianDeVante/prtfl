import Link from "next/link";
import React from "react";

export default function MainBanner(){
    return <div className="items-center justify-center">
        <div className="flex max-w-3xl min-h[40vh] gap-20 py-10 md:py-0 md:gap-0
        flex-col-reverse md:flex-row 
        items-center justify-between">
            <div className="text-4xl space-y-6 relative z-20">
                <div className="text-center md:text-left  py-4">
                    <h1>Hello! 
                        <br/>
                            <span className="font-bold underline underline-offset-8 decoration-blue-500">
                                "I'm Ángel Mendoza"
                            </span>
                    </h1>
                </div>
                <div className="text-center md:text-left 
                w-96 text-lg text-gray-300">
                    <p>
                        {"I'm a developer with a passion for audio processing and an eye for graphic design. My journey learning and developing jsfx ui libraries with no documentation has sharpened my ability to grasp new languages swiftly. Whether it's through lines of code or sound waves, I strive to create experiences that resonate."}
                    </p>
                    <Link href={"mailto:veg.angel.mm@gmail.com"}>
                        <div>
                            <div className="hover:scale-105 hover:text-green-500 transition-all  text-xl py-2 font-bold ">
                                <h1>Contact me :)</h1>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className=" justify-center">
                <div className="size-41 space-y-3 -rotate-[30deg] relative">
                    <div className="flex gap-3 translate-x-8">
                        <div className="size-20 rounded-3xl bg-yellow-500 shadow-xl"></div>
                        <div className="size-20 rounded-full bg-blue-600 shadow-xl"></div>
                    </div>
                    <div className="flex gap-3 -translate-x-8">
                        <div className="size-20 rounded-3xl bg-blue-600 shadow-xl"></div>
                        <div className="size-20 rounded-full bg-yellow-500 shadow-xl"></div>
                    </div>
                    <div className="glow absolute right-[52%] top-[48%] -z-10"></div>
                </div>
            </div>
        </div>
    </div>
}
import React from "react";
import ColorChangeButton from "../Components/Animated-button";
const Hero = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <div className="border border-gray-600 rounded-lg w-fit text-black px-4 m-13">
                ✨ Join our waitlist and claim instant offer
            </div>
            <div className="font-bold text-6xl text-center text-black ">
                You Deserve to Feel Better.
                <div className="m-5">Peace Begins with Us</div>
            </div>
            <div className="text-gray-600 text-center text-[1rem] font-light p-2">
                <div>We offer compassionate and personalized.</div>
                <div>mental health support to guide life’s challenges.</div>
            </div>
            <div className="m-6">
                <ColorChangeButton/>
            </div>
        </div>
    );
};

export default Hero;

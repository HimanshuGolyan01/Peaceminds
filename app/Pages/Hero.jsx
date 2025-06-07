import React from "react";
import ColorChangeButton from "../../components/magicui/Animated-button";
import { Iphone15ProDemo, Iphone16ProDemo, Iphone17ProDemo, Iphone18ProDemo } from "@/components/magicui/side-component";
const Hero = () => {
    return (
        <div className="flex justify-center items-center flex-col relative">
            <div className="border border-gray-600 rounded-lg w-fit text-black px-4 m-13">
                ✨ Join our waitlist and claim instant offer
            </div>
            <div className="font-bold text-5xl text-center text-black ">
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
            <div className=" absolute mr-[85rem] mt-40">
                <Iphone15ProDemo/>
            </div>
            <div className="absolute mr-[60rem] mt-15">
                 <Iphone16ProDemo/>
            </div>
            <div className="absolute ml-[84rem] mt-30">
                <Iphone17ProDemo/>
            </div>
            <div className="absolute ml-[60rem] mt-40">
                <Iphone18ProDemo/>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Hero;

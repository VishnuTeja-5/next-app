"use client";
import { Transition } from "@/animation";
import React from "react";

function Section13() {
  return (
    <Transition delay={0.5} x={50} stiffness={30}>
      <div className="w-full min-h-screen bg-slate-100 flex flex-col gap-6 justify-center items-center">
        <div className="px-4 py-2 font-bold text-3xl bg-black/20">LOGO</div>
        <h1 className="w-[50%] text-center uppercase font-heading text-2xl md:text-4xl font-bold">
          Lorem ipsum dolor sit amet consectetur. Dui.
        </h1>
        <p className="w-[40%] px-8 text-center">
          Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor
          pharetra tempor quis arcu. Ipsum nullam.
        </p>
        <div className="w-[40%] flex justify-center items-center">
          <button className="w-fit rounded px-4 text-sm font-semibold py-2 bg-primary text-white hover:scale-105 duration-300">
            Lorem Ipsum &#8594;
          </button>
        </div>
      </div>
    </Transition>
  );
}

export default Section13;

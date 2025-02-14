"use client";
import { Transition } from "@/animation";
import { Input, SelectInput, Textarea } from "@/components";
import React from "react";

function Section15() {
  return (
    <Transition delay={0.5} x={50} stiffness={30}>
      <div className="w-full min-h-screen p-8 py-20 flex flex-col">
        <h1 className="w-full text-center uppercase font-heading text-4xl font-bold">
          Request a Quote
        </h1>
        <div className="w-full h-full p-4 px-28 flex justify-center items-center">
          <form
            className="w-full h-full p-2 flex flex-col md:grid md:grid-cols-2 gap-2 md:gap-6"
            action="">
            <Input type="text" label="Name" placeholder="" id="fname" />
            <Input type="text" label="Email" placeholder="" id="email" />
            <Input type="text" label="Phone" placeholder="" id="phone" />

            <SelectInput
              label="Time Frame"
              placeholder="Choose Time Frame"
              id="time"
              options={[]}
              required
            />
            <SelectInput
              label="Size"
              id="size"
              placeholder="Choose Size"
              options={[]}
              required
            />
            <SelectInput
              label="Quantity"
              placeholder="Choose Quantity"
              id="quantity"
              options={[]}
              required
            />
            <div className="w-full md:col-span-2">
              <Textarea
                label="Please Describe your project"
                placeholder="Choose a project type"
                id="project"
                required
              />
            </div>
            <div className="w-full md:col-span-2 py-8 flex justify-center items-center">
              <p>
                By submitting this form you agree to our{" "}
                <span className="underline">Terms of Service</span> and{" "}
                <span className="underline">Privacy Policy.</span>
              </p>
            </div>
            <div className="w-full md:col-span-2 flex justify-center items-center">
              <button className="w-fit rounded px-4 text-sm font-semibold py-2 bg-primary text-white hover:scale-105 duration-300">
                Lorem Ipsum &#8594;
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>
  );
}

export default Section15;

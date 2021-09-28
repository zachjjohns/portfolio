import React from 'react';
import image from "../../src/spacemountain.jpg";

export default function Home() {
  return (
    <main>
      <img 
        src={image} 
        alt="Mountain scene with starry sky" 
        className="absolute object-none md:object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 
          className="text-7xl text-blue-100 titillium font-bold leading-none lg:leading-snug">
          Hello World. I'm Zach.
        </h1>
      </section>
    </main>
  )
}
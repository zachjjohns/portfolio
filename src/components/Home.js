import React from 'react';
import image from "../../src/spacemountain.jpg";

export default function Home() {
  return (
    <main>
      <img 
        src={image} 
        alt="Mountain scene with starry sky" 
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 
          className="text-6xl text-blue-100 font-bold ubuntu leading-none lg:leading-snug home-name">
          Hello World. I'm Zach.
        </h1>
      </section>
    </main>
  )
}
import React from 'react';
import image from "src/spacemountain.jpg";

export default function Home() {
  return (
    <main>
      <img 
        src={image} 
        alt="Mountain scene with starry sky" 
        classNames="absolute object-cover w-full h-full"
      />
      <section>
        <h1>Hey there! I'm Zach.</h1>
      </section>
    </main>
  )
}
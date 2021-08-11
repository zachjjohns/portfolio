import React, { useEffect, useState } from "react";
import sanityClient from "../client";

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      name,
      bio,
      "authorImage": image.aseet->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  });

  if (!author) return <div>Loading...</div>

  return <h1>About page!</h1>;
}

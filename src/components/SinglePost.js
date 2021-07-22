import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source)
}

export default function SinglePost() {
  const [SinglePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  return <h1>SinglePost page!</h1>
}
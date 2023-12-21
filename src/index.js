import Quote from "./App";
import React from "react";
import { createRoot } from "react-dom/client";
const getRandomQuote = async () => {
  const response = await fetch("https://api.quotable.io/random");
  const quote = await response.json();
  return { content: quote.content, author: quote.author };
};
function getRandomRgbColor() {
  const r = Math.floor(Math.random() * 192);
  const g = Math.floor(Math.random() * 192);
  const b = Math.floor(Math.random() * 192);

  return `rgb(${r}, ${g}, ${b})`;
}

const root = createRoot(document.getElementById("container"));
root.render(
  <Quote generateQuote={getRandomQuote} generateColor={getRandomRgbColor} />
);

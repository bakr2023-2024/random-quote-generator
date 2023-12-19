import Quote from "./App";
import ReactDOM from "react-dom";
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

ReactDOM.render(
  <Quote generateQuote={getRandomQuote} generateColor={getRandomRgbColor} />,
  document.getElementById("container")
);

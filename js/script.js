/******************************************
A Random Quote Generator
******************************************/
// * VARIABLES *

// Array of quotes
const quotes = [
  {
    quote: "Life would be much easier if I had the source code.",
    source: "Anonymous",
    citation: "",
    year: '',
    tags: "developer, software-engineering"
  },
  {
    quote: "Programming is usually taught by examples.",
    source: "Waseem Latif",
    citation: "speech,publication or a movie",
    year: ''
  },
  {
    quote: "The fundamental truth for developers is they will build if there are users.",
    source: "Satya Nadella",
    citation: "speech",
    year: 2019
  },
  {
    quote: "A very important part of game development is testing - something that a lot of developers don't do.",
    source: "Randy Pitchford",
    citation: "",
    year: 2015
  },
  {
    quote: "Programming is Thinking, Not Typing.",
    source: "Casey Patton",
    citation: "",
    year: ''
  }
];

// * FUNCTIONS *

// Get a random quote
function getRandomQuote() {
  // Generate a random number between 0 and size of quotes
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

// Change Background Color
function getRandomBackground() {
  // Create our color array
  let colors = ['#F08080', '#FFD700', '#9ACD32', '#90EE90', '#4682B4'];

  // Generate a random color
  let randomColor = colors[Math.floor(Math.random() * colors.length)];

  // Set the background Body to the generated color
  document.querySelector('body').style.background = randomColor;
}

// Print a quote
function printQuote() {
  // Call our getRandomQuote() to generate a random quote
  let randomQuote = getRandomQuote();

  // Create our template
  let myHTML = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  `;

  // Check if there is a citation property
  if (randomQuote.citation) {
    myHTML += `<span class="citation">${randomQuote.citation}</span>`;
  }

  // Check if there is a year property
  if (randomQuote.year) {
    myHTML += `<span class="year">${randomQuote.year}</span>`;
  }

  if (randomQuote.tags) {
    myHTML += `<span class="tag">${randomQuote.tags}</span>`;
  }

  myHTML += `</p>`;

  // Attach our final template to the HTML
  document.getElementById('quote-box').innerHTML = myHTML;

  // Call getRandomBackground() to change our background color
  getRandomBackground();
}

// * EVENTS *

// Call "printQuote" at any "click" in the button
document.getElementById('load-quote').addEventListener("click", printQuote, false);

// Set an interval to print a quote every 10 seconds
setInterval(printQuote, 10000);



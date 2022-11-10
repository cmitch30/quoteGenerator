/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    source: "Oscar Wilde",
    year: "1948",
    citation: "BrainyQuote",
  },
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    source: "Oscar Wilde",
    year: "1948",
    citation: "BrainyQuote",
  },
  {
    quote: "True friends stab you in the front.",
    source: "Oscar Wilde",
    year: "1948",
    citation: "BrainyQuote",
  },
  {
    quote: "Women are made to be Loved, not understood.",
    source: "Oscar Wilde",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    source: "Mahatma Gandhi",
    year: "1948",
    citation: "BrainyQuote",
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    source: "Mahatma Gandhi",
    year: "1948",
    citation: "BrainyQuote",
  },
  {
    quote: "No one can make you feel inferior without your consent.",
    source: "Eleanor Roosevelt",
    year: "1948",
    citation: "BrainyQuote",
  },
  {
    quote:
      "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    source: "Eleanor Roosevelt",
    year: "1948",
    citation: "BrainyQuote",
  },
  {
    quote:
      "Do what you feel in your heart to be right - for you'll be criticized anyway.",
    source: "Eleanor Roosevelt",
    year: "1948",
    citation: "BrainyQuote",
  },
  {
    quote: "Do one thing every day that scares you.",
    source: "Eleanor Roosevelt",
    year: "1948",
    citation: "BrainyQuote",
  },
  {
    quote:
      "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
    source: "Martin Luther King",
    year: "1963",
    citation: "BrainyQuote",
  },
  {
    quote:
      "Our lives begin to end the day we become silent about things that matter.",
    source: "Martin Luther King",
    year: "1948",
    citation: "BrainyQuote",
  },
  {
    quote:
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
   source: "Martin Luther King",
    year: "1948",
    citation: "BrainyQuote",
  },
  {
    quote: "Injustice anywhere is a threat to justice everywhere.",
    source: "Martin Luther King",
    citation: "BrainyQuote",
  },
  {
    quote: "The time is always right to do what is right.",
    source: "Martin Luther King",
    citation: "BrainyQuote",
  },
  {
    quote:
      "Life's most persistent and urgent question is, 'What are you doing for others?",
    source: "Martin Luther King",
  },
  {
    quote:
      "Weak people revenge. Strong people forgive. Intelligent People Ignore.",
    source: "Albert Einstein",
    year: "1948",

  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    source: "Thomas A. Edison",
    year: "1948",
    citation: "BrainyQuote",
  },
  {
    quote:
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
    source: "Thomas A. Edison",
    year: "1948",
    citation: "BrainyQuote",
  },
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    source: "Thomas A. Edison",
  },
  {
    quote:
      "If we did all the things we are capable of, we would literally astound ourselves.",
    source: "Thomas A. Edison",
    citation: "BrainyQuote",
  },
  {
    quote:
      "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
    source: "Albert Einstein",
    year: "1948",
    
  },
];

/***
 * `getRandomQuote` function
 ***/
const getRandomQuote = () => {
  //random variable
 let random = Math.floor(Math.random() * quotes.length);

 //object properties
  let quote = quotes[random];
return quote
}

/***
 * `printQuote` function
 ***/

function getRndColor() {
    return 'hsl(' + (360 * Math.random()) + ',50%,50%)'
}
const printQuote = () => {
  let body = document.querySelector('body')
  body.style.backgroundColor = getRndColor();
  let getQuote = getRandomQuote()
  let html = `<p class="quote">${getQuote.quote}</p>
  <p class="source">${getQuote.source}`
  if (getQuote.year) {
    html += `<span class= "year"> ${getQuote.year}</span></p>`
  } else if (getQuote.citation) {
    html += `<span class= "citation"> ${getQuote.citation}</span></p>`;
  } else {
    html += `</p>`
  }
  return document.getElementById('quote-box').innerHTML = html
}
setInterval(printQuote, 10000)






/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/


document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);

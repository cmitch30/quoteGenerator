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
        author: "Oscar Wilde",
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde",
    },
    {
        quote: "True friends stab you in the front.",
        author: "Oscar Wilde",
    },
    {
        quote: "Women are made to be Loved, not understood.",
        author: "Oscar Wilde",
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "No one can make you feel inferior without your consent.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "Do what you feel in your heart to be right - for you'll be criticized anyway.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "Do one thing every day that scares you.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
        author: "Martin Luther King",
    },
    {
        quote: "Our lives begin to end the day we become silent about things that matter.",
        author: "Martin Luther King",
    },
    {
        quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        author: "Martin Luther King",
    },
    {
        quote: "Injustice anywhere is a threat to justice everywhere.",
        author: "Martin Luther King",
    },
    {
        quote: "The time is always right to do what is right.",
        author: "Martin Luther King",
    },
    {
        quote: "Life's most persistent and urgent question is, 'What are you doing for others?",
        author: "Martin Luther King",
    },
    {
        quote: "Weak people revenge. Strong people forgive. Intelligent People Ignore.",
        author: "Albert Einstein",
        
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison",
    },
    {
        quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author: "Thomas A. Edison",
    },
    {
        quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        author: "Thomas A. Edison",

    },
    {
        quote: "If we did all the things we are capable of, we would literally astound ourselves.",
        author: "Thomas A. Edison",
       
    },
    {
        quote: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
        author: "Albert Einstein",
    }

]

/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/
let btn = document.querySelector('#load-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.source')



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
btn.addEventListener('click', () => {
  let random = Math.floor(Math.random() * quotes.length)
  quote.innerText = quotes[random].quote
  person.innerText = quotes[random].author;
})

document.getElementById('load-quote').addEventListener("click", printQuote, false);
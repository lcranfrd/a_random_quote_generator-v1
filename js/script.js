/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

  //Leonard Bennett Crantford
  //I am attempting the Exceeds Expectations Grade

/*** 
 * `quotes` array
 * quotes material from www.goodreads.com
***/
const quotes = [
  {
    quote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
    source: 'Albert Einstein'
  },
  {
    quote: 'The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.',
    source: 'Isac Asimov'
  },
  {
    quote: 'Never memorize something that you can look up',
    source: 'Albert Einstein',
    tags: ' humor'
  },
  {
    quote: 'Somewhere, something incredible is waiting to be known.',
    source: 'Carl Sagan'
  },
  {
    quote: 'Time is a drug. Too much of it kills you.',
    source: 'Terry Prachett',
    citation: 'Small Gods',
    year: '1992'
  },
  {
    quote: 'I\'m sure the universe is full of intelligent life. It\'s just been too intelligent to come here.',
    source: 'Arthur C. Clarke',
    tags: 'humor life science '
  },
  {
    quote: 'An expert is a person who has made all the mistakes that can be made in a very narrow field.',
    source: 'Niels Bohr'
  },
  {
    quote: 'Science and religion are not at odds. Science is simply too young to understand.',
    source: 'Dan Brown',
    citation: 'Angels & Demons',
    year: '2000'
  },
  {
    quote: 'That which can be asserted without evidence, can be dismissed without evidence',
    source:'Christopher Hitchens'
  },
  {
    quote: 'Everything must be made as simple as possible. But not simpler.',
    source:'Albert Einstein'
  },
  {
    quote: 'We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the Universe. That makes us something very special.',
    source: 'Stephen Hawking',
    tags: 'inspirational science'
  },
  {
    quote: 'If we knew what it was we were doing, it would not be called research, would it?',
    source: 'Albert Einstein'
  },
  {
    quote: 'Your assumptions are your windows on the world. Scrub them off every once in a while, or the light won\'t come in.',
    source: 'Isaac Asimov',
    tags: 'assumptions closed-mindedness'
  },
  {
    quote: 'Space is big. You just won\'t believe how vastly, hugely, mind-bogglingly big it is. I mean, you may think it\'s a long way down the road to the chemist\'s, but that\'s just peanuts to space.',
    source: 'Douglas Adams',
    citation: 'The Hitchhiker\s Guide to the Galaxy',
    year: '1979',
    tags: 'humor science'
  },
  {
    quote: 'God does not play dice with the universe.', 
    source: 'Albert Einstein',
    citation: 'The Born-Einstein Letters',
    year: '1916-55',
    tags: 'quantum-physics'
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
   const genRandomNum = Math.floor(Math.random() * quotes.length);
   return quotes[genRandomNum];
}

/***
 * `getRandomQuote` function
 * For 'Exceeds Expectations':
 * function will return random hex color value
 * between #222 and #CCC to be passed to the DOM in `printQuote`
 ***/

function getRandomColor() {
  const hexColRand = Math.floor(Math.random() * (0xCCCCCC - 0x222222) + 0x222222).toString(16)
  return '#' + hexColRand.toUpperCase();
}

/***
 * `printQuote` function
 * timerID will be cleared on call and set at end to preserve
 * the automatic new quote generation timing after user click.
 * function will get new random quote and new hex color,
 * both to be passed to the DOM.
 * 
***/

function printQuote() {
  clearInterval(timerId);
  const newQuote = getRandomQuote();
  const newColor = getRandomColor();
  let htmlStr = `<p class="quote"> ${newQuote.quote} </p><p class="source">${newQuote.source}`;
  if(newQuote.citation){
    htmlStr += `<span class="citation"> ${newQuote.citation} </span>`;
  }
  if(newQuote.year){
    htmlStr += `<span class="year"> ${newQuote.year} </span>`;
  }
  if(newQuote.tags){
    htmlStr += `<span class="tags"> ${newQuote.tags} </span>`;
  }
  htmlStr += '</p>';
  document.getElementById('quote-box').innerHTML = htmlStr;
  document.body.style.backgroundColor = newColor;
  timerId = setInterval(printQuote, 15000);
}

/***
 * For 'Excceeds Expectations':
 * use setTimout method to generate and display a new quote every 15 seconds.
 * timerId will be reset inside of `printQuote` function
 */

 let timerId = setInterval(printQuote, 15000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
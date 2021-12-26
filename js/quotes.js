const quotes = [
    {
        quote: "You will face many defeats in life, but never let yourself be defeated",
        author: "Maya Angelou",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison",
    },
    {
        quote: "I believe we are here on the planet Earth to live, grow up and do what we can to make this world a better place for all people to enjoy freedom.",
        author: "Rosa Parks",
    },
    {
        quote: "Life is either a great adventure or nothing.",
        author: "Helen Keller",
    },
    {
        quote: "I don't go by the rule book…I lead from the heart, not the head.",
        author: "Princess Diana",
    },
    {
        quote: "Life is from the inside out. When you shift on the inside, life shifts on the outside.",
        author: "Kamal Ravikant",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = todaysQuote.author;

var changeBtn = document.getElementById("changeBtn");

var quoteOutput=document.getElementById("quoteOutput");
var quoteAuthor=document.getElementById("quoteAuthor");



function generateQuote() {

    var quotes = [{quote: `“Be yourself; everyone else is already taken.”`, author: `― Oscar Wilde` },
    {quote: `“So many books, so little time.”`, author: `― Frank Zappa` },
    {quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`, author: `― Albert Einstein` },
    {quote: `“A room without books is like a body without a soul.”`, author: `― Marcus Tullius Cicero` },
    {quote: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`, author: `― Bernard M. Baruch` },
    {quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`, author: `― Dr. Seuss` },
    {quote: `“You only live once, but if you do it right, once is enough.”`, author: `― Mae West` },
    {quote: `“A room without books is like a body without a soul.”`, author: `― Marcus Tullius Cicero` },
    {quote: `“Be the change that you wish to see in the world.”`, author: `― Mahatma Gandhi` },
    {quote: `“In three words I can sum up everything I've learned about life: it goes on.”`, author: `― Robert Frost` },
    {quote: `“If you tell the truth, you don't have to remember anything.”`, author: `― Mark Twain` },
    {quote: `“A friend is someone who knows all about you and still loves you.”`, author: `― Elbert Hubbard` },
    {quote: `“To live is the rarest thing in the world. Most people exist, that is all.”`, author: `― Oscar Wilde` },
    {quote: `“Always forgive your enemies; nothing annoys them so much.”`, author: `― Oscar Wilde` },
    {quote: `“Live as if you were to die tomorrow. Learn as if you were to live forever.”`, author: `― Mahatma Gandhi` },
    ]

            var Random = Math.floor(Math.random() * quotes.length);
                quoteOutput.innerHTML=quotes[Random].quote;
                authorOutput.innerHTML=quotes[Random].author;
                quotes.splice(Random, 1);

    }


changeBtn.addEventListener("click", generateQuote);
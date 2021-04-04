
let quote = [
{
	quote: "I have no special talent. I am only passionately curious.",
	source: "Albert Einstein",
	citation: "SCIENCE!",
	year: "Unknown."
 },
{
	quote: "Learning never exhausts the mind.",
	source: "Leonardo da Vinci",
	citation: "INVENTING",
	year: "1474."
 },
{
	quote: "Don’t Let Yesterday Take Up Too Much Of Today.",
	source: "Will Rogers",
	citation: "PHILOSOPHICAL",
	year: "1930."
 },
{
	quote: "Be yourself; everyone else is already taken.",
	source: "Oscar Wilde",	
	citation: "DEEP",
	year: "1976."
 },
{
	quote: "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
	source: "Dr.Suess",	
	citation: "IMAGINATION",
	year: "Unknown."
 },
];


 getRandomQuote = arr => randomQuote = arr[Math.floor(Math.random() * arr.length)];


printQuote = () => {
	let a = getRandomQuote(quote);
	let html = `<p class="quote">${a.quote}</p>
	<p class="source">${a.source}
	<span class="citation">${a.citation}</span>
	<span class="year">${a.year}</span></p>`
	document.getElementById('quote-box').innerHTML = html;
return html;
};


random_bg_color = () => {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    };


noRepeat = (arr) => {
	let repeat = [];
	for(let i = quote.length; i < 0; i--){
	if (i == -1){
	quote.pop(quote[i]);
	repeat.push(quote[i]);
	html = `That's all the quotes!`;
  }
 }
};


document.getElementById('load-quote').addEventListener("click", () => {
random_bg_color();
printQuote();
noRepeat();
});




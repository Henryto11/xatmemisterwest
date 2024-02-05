const tag = document.querySelector(".tag");
const newTweet = document.querySelector(".new");
const xa = document.querySelector(".xa");
const xas = document.querySelector(".xas");
const like = document.querySelector(".xai-like");
const characterCount = document.querySelector(".characters");
let sl;
const url = `https://api.kanye.rest/`;
let count = 0;
const stocks = async function () {
	count = 0;
	like.textContent = "🤍";

	// xa.innerHTML = "";
	try {
		const getData = await fetch(url);
		console.log(getData);
		if (!getData.ok) {
			throw new Error("stock not found");
		}
		const res = await getData.json();
		const { quote } = res;
		const characters = quote.length;
		xas.textContent = `"${quote}"`;
		characterCount.textContent = `(${characters}/280)`;
	} catch {
		(err) => console.error(`sorry ${err.message}`);
	}
};
newTweet.addEventListener("click", stocks);
like.addEventListener("click", function (e) {
	count++;
	console.log(count);
	this.textContent = `${count} 💗`;
	const click = e.target;
	console.log(click);
});

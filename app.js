let base = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json"

let from = document.querySelector('#From');
let to = document.querySelector('#To');
let btn = document.querySelector("button");
let input = document.querySelector("input");
let msg = document.querySelector(".msg");

if (input.value < 1) {
    input.value = 1;
}

btn.addEventListener("click", async function getData() {
    let response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from.value.toLowerCase()}/${to.value.toLowerCase()}.json`);
    let data = await response.json();
    let rate = data[to.value.toLowerCase()];
    console.log(rate);
    msg.innerText = rate * input.value;
});

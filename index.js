
function vineBoom() {

    document.getElementById("alert-box").style.transitionDuration = "0s";
    document.getElementById("alert-box").style.opacity = 1;
    setTimeout(() => {
        document.getElementById("alert-box").style.transitionDuration = "1s";
        document.getElementById("alert-box").style.opacity = 0;
    },750);
    const audio = new Audio("resources/index/vine-boom.mp3");
    audio.play();
}


function read()
{
    const input = document.getElementById("guess").value;
    console.log(input);
}
/*
const phrases = ["the factory must grow", "web programming", "the honored one", "fire and ice", "space elevator", "quantum physics", "hello world", "trains are the best", "binary trees", "afternoon is the best"];

const phrase = phrases[Math.floor(Math.random() * 10)];
console.log(phrase);
console.log(phrase.length);
const display = document.getElementById("hidden-word");
console.log(display);
const dashes = [];
for(let lett = 0; lett < phrase.length; lett++)
{
    console.log(phrase[lett]);
    if(phrase[lett] == " ")
    {
        console.log("space")
        dashes.push(" ")
    }
    else
    {
        console.log("blank")
        dashes.push("_")
    }
}
console.log(dashes);
display.textContent = dashes.join("");
console.log(display.textContent);

for(let char = 0; char < phrase.length; char++)
{
    dashes[char] = phrase[char];
    display.textContent = dashes.join("");
}
console.log(dashes, "dashes");
*/

/* //this is the final product, commented so i dont have to change index.html
function plaDas() //stands for place dashes
{
    const phrases = ["the factory must grow", "web programming", "the honored one", "fire and ice", "space elevator", "quantum physics", "hello world", "trains are the best", "binary trees", "afternoon is the best"];
    const phrase = phrases[Math.floor(Math.random() * 10)];
    console.log(phrase);
    const display = document.getElementById("hidden-word");
    const dashes = [];

    for(let lett = 0; lett < phrase.length; lett++)
    {
        if(phrase[lett] == " ")
        {
            display.textContent += " ";
            dashes.push(" ");
        }
        else
        {
            dashes.push("_");
            display.textContent += "_";
        }
    }
    console.log(dashes);
}
*/

const phrases = ["the factory must grow", "web programming", "the honored one", "fire and ice", "space elevator", "quantum physics", "hello world", "trains are the best", "binary trees", "afternoon is the best"];
const phrase = phrases[Math.floor(Math.random() * 10)];
console.log(phrase);
const display = document.getElementById("hidden-word");
const dashes = [];

for(let lett = 0; lett < phrase.length; lett++)
{
    if(phrase[lett] == " ")
    {
        display.textContent += " ";
        dashes.push(" ");
    }
    else
    {
        dashes.push("_");
        display.textContent += "_";
    }
}
console.log(dashes);

function check()
{
    console.log("pass")
}

const input = document.getElementById("guess").value;
console.log(input);

if(phrase.includes(input))
{
    dashes
}

function read()
{
    const input = document.getElementById("guess").value;
    console.log(input);
}

const phrases = ["the factory must grow", "web programming", "the honored one", "fire and ice", "space elevator", "quantum physics", "hello world", "trains are the best", "binary trees", "afternoon is the best"];

//const ran = Math.floor(Math.random() * 10);

const phrase = phrases[Math.floor(Math.random() * 10)];
console.log(phrase);
console.log(phrase.length);
const display = document.getElementById("hidden-word");
console.log(display);
for(let lett = 0; lett < phrase.length; lett++)
{
    /*
    console.log(phrase[lett]);
    const disLet = document.createElement("h2");
    disLet.textContent = phrase[lett]
    display.appendChild(disLet);
    const dash = document.createElement("div");
    display.appendChild(dash);
    */
    console.log(phrase[lett]);
    if(phrase[lett] == " ")
    {
        console.log("space")
        display.textContent += " ";
    }
    else
    {
        console.log("blank")
        display.textContent += "_";
    }
}

console.log(display);

for(let char = 0; char < phrase.length; char++)
{
    console.log(display.textContent[char], "2");
    display.textContent[char] = phrase[char]
}
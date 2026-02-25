
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

function createPlayAgain () {
    const playAgain = document.createElement("button");
    playAgain.textContent = "Play Again?";
    playAgain.classList.add("font");
    playAgain.id = "play-again";
    document.body.appendChild(playAgain);

    playAgain.onclick = function() {
        location.reload();
    }
}

function decreaseChances() {
    const chances = document.getElementById("chances");

    chances.textContent = parseInt(chances.textContent) - 1;
    document.getElementById("hanger-img").src = "resources/index/stage" + (6 - parseInt(chances.textContent)) + ".png";
}

const phrases = ["the factory must grow", "web programming", "the honored one", "fire and ice", "space elevator", "quantum physics", "hello world", "trains are the best", "binary trees", "afternoon is the best"];
const phrase = phrases[Math.floor(Math.random() * 10)];
console.log(phrase);

/*
function plaDas() //stands for place dashes
{
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

const display = document.getElementById("hidden-word");
//the list of dashes exists, because the textContent can't be changed one character at a time
//so this changes one character at a time, then makes textContent equal the list as a string
const dashes = [];
//this for loop is global because the list of dashes has to be global
for(let lett = 0; lett < phrase.length; lett++)
{
    if(phrase[lett] == " ")
    {
        dashes.push(" ");
    }
    else
    {
        dashes.push("_");
    }
}
console.log(dashes);
display.textContent = dashes.join("");


function check()
{
    const input = document.getElementById("guess").value;
    console.log(input);

    if (phrase.includes(input)) {
        for (let char = 0; char < phrase.length; char++)
        {
            if(phrase[char] == input)
            {
                dashes[char] = input;
                display.textContent = dashes.join("");
            }
        }
    }

    else {
        decreaseChances();
        vineBoom();
    }

    document.getElementById("guess").value = "";

    if (!dashes.includes("_") || parseInt(document.getElementById("chances").textContent) <= 0)
    {
        createPlayAgain();
        document.getElementById("submit").disabled = true;
        document.getElementById("guess").disabled = true;
    }

    console.log(display.textContent);
}
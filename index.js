
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

function createWinText() {
    const winText = document.createElement("div");
    winText.textContent = "Congratulations, you won! Now you and the hangman can go and live your lives in peace, but the events of this day will be forever scarred into each of you...";
    winText.classList.add("font");
    winText.id = "win-text";
    document.body.appendChild(winText);
}

function createLoserText() {
    const loserText = document.createElement("div");
    loserText.textContent = "You lose. Now you must live the rest of your life with the guilt of killing a man... The phrase was: " + phrase;
    loserText.classList.add("font");
    loserText.id = "loser-text";
    document.body.appendChild(loserText);
}

const phrases = ["the factory must grow", "web programming", "the honored one", "fire and ice", "space elevator", "quantum physics", "hello world", "trains are the best", "binary trees", "afternoon is the best"];
const phrase = phrases[Math.floor(Math.random() * 10)];

function makDas() //stands for make dashes
{
    const temp = [];
    for(let lett = 0; lett < phrase.length; lett++)
    {
        if(phrase[lett] == " ")
        {
            temp.push(" ");
        }
        else
        {
            temp.push("_");
        }
    }
    return temp;
}
//the list of dashes exists, because the textContent can't be changed one character at a time
//so this changes one character at a time, then makes textContent equal the list as a string
const dashes = makDas();
const display = document.getElementById("hidden-word");
display.textContent = dashes.join(""); //converts the list of dashes into a string

function check() //checks if a guessed letter is in the phrase
{   
    const input = document.getElementById("guess").value.toLowerCase();
    const asciiNumb = input.charCodeAt(0);

    if ((asciiNumb < 97 || asciiNumb > 122) || document.getElementById("guessed-letters").textContent.includes(input, 16)) //if the input is not a letter, or if the letter has already been guessed, do nothing
    {   
        document.getElementById("guess").value = "";
        return;
    }

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

    document.getElementById("guessed-letters").textContent += ` ${input}`; //adds the the display list of failed guesses
    document.getElementById("guess").value = "";

    if (!dashes.includes("_")) //end game if there are no more dashes, meaning the phrase has been fully guessed
    {
        createWinText();
        createPlayAgain();
        document.getElementById("submit").disabled = true;
        document.getElementById("guess").disabled = true;
    }

    else if (parseInt(document.getElementById("chances").textContent) <= 0) //end game if there are no more chances, meaning the hanger is fully drawn
    {
        display.textContent = phrase; //displays the phrase if the player looses
        createLoserText();
        createPlayAgain();
        document.getElementById("submit").disabled = true;
        document.getElementById("guess").disabled = true;
    }
}

function read()
{
    const input = document.getElementById("guess").value;
    console.log(input);
}

const phrases = ["the factory must grow", "web programming", "the honored one", "fire and ice", "space elevator", "quantum physics", "hello world", "trains are the best", "binary trees", "afternoon is the best"];

//const ran = Math.floor(Math.random() * 10);

phrase = phrases[Math.floor(Math.random() * 10)];
console.log(phrase)
const body = document.getElementsByTagName("body")[0];
console.log(body)
for(let lett = 0; lett > phrase.length; lett++)
{
    console.log(lett)
}
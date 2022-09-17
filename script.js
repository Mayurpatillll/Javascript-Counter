var igrm = document.querySelector("#ig");
var youtube = document.querySelector("#yt");
var github = document.querySelector("#git");
var lco = document.querySelector("#lco");

let count = 1;

setInterval(() => {
    if (count < 60) {
        count++;
        igrm.innerText = count + ("k");
    }
}, 5);

setInterval(() => {
    if (count < 75) {
        count++;
        youtube.innerText = count + ("k");
    }
}, 5);
setInterval(() => {
    if (count < 8) {
        count++;
        github.innerText = count + ("k");
    }
}, 5);
setInterval(() => {
    if (count < 100) {
        count++;
        lco.innerText = count + ("k");
    }
}, 5);
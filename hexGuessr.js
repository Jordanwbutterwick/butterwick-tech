
function generateRandomColors() {
    const color = Math.random() * 0xfffff * 1000000;

    return '#' + color.toString(16).slice(0, 6);
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function validateGuess(guess) {
    const reg = /^#?([0-9a-f]{3}){1,2}$/i;
    const result = reg.test(guess);
    console.log(result);
    return result;
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.05;
    }, 50);
}

window.addEventListener("load", () => {

    const color = generateRandomColors();

    const form = document.getElementById("hexguessr");
    const responder = document.getElementById("responder");
    const score = document.getElementById("score");

    async function errorResponse(responseText){
        responder.textContent = responseText;
        responder.style.opacity = 1;

        delay(5000).then(() => {
            fade(responder)
        })
    }

    function makeGuess() {
        const formData = new FormData(form);
        const guess = formData.get("guess");
        
        console.log(`guess: ${guess}`);

        if (!validateGuess(guess)) {
            errorResponse(`invalid guess: ${guess}, please use a valid hex color code`);
        }


    }
    
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        makeGuess();
    });
});
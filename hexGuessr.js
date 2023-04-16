
window.addEventListener("load", () => {3

    const form = document.getElementById("hexguessr");
    const responder = document.getElementById("responder");
    const score = document.getElementById("score");


    function validateGuess(guess) {
        const reg = /^#?([0-9a-f]{3}){1,2}$/i;
        const result = reg.test(guess);
        console.log(result);
        return result;
    }

    function errorResponse(responseText){
        responder.textContent = responseText;
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
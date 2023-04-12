
window.addEventListener("load", () => {3

    function validateGuess(guess) {
        var reg=/^#?([0-9a-f]{3}){1,2}$/i;
        console.log(reg.test(guess));
    }

    function makeGuess() {
        const formData = new FormData(form);
        const guess = formData.get("guess");
        console.log(guess);

        validateGuess(guess);
    }
    
    const form = document.getElementById("hexguessr");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        makeGuess();
    });
});
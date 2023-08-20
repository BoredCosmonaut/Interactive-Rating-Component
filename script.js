
const ratingScores = document.querySelectorAll('.score');

ratingScores.forEach(scoreElement => {

    scoreElement.addEventListener('click', function() {

        // Remove the background color from all rating score elements
        ratingScores.forEach(element => {
            element.style.backgroundColor = '';
        });
        
        //Makes the selected score background white
        this.style.backgroundColor = "white"

        //Gets the text of the clicked score
        const score = this.innerText

    //Button function
    document.getElementById("submit").addEventListener("click", (e) => {
        e.preventDefault();

        //Makes the first card disappear
        document.getElementById("card").style.display = "none"

        //makes the thank you card appear 
        document.getElementById("thank-card").style.display = "block"

        //Changes the test of the thank you card
        document.getElementById("star-score").innerText = `You selected ${score} out of 5`;
    })

    });
});


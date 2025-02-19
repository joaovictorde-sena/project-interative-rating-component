document.addEventListener('DOMContentLoaded', function(){
    const ratingButtons = document.querySelectorAll('.rating-btn');
    const submitButton = document.getElementById('submit-btn');
    const ratingState = document.getElementById('rating-state');
    const thankYouState = document.getElementById('thank-you-state');
    const selectedRatingValue = document.getElementById('selected-rating-value');


let selectedRating = null;

ratingButtons.forEach(button => {
    button.addEventListener('click', function(){
        ratingButtons.forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected')
        selectedRating = this.getAttribute('data-value');
    });
});

submitButton.addEventListener('click', function(){
    if(selectedRating) {
        selectedRatingValue.textContent = selectedRating;
        ratingState.classList.add('hidden');
        thankYouState.classList.remove('hidden');
    }
    else{
        alert('Please select a rating before submiting.');
    }
});
});


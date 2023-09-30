const ratingOptions = document.querySelectorAll('.rating-option');
const selectedNumber = document.querySelector('.selected-number');
const ratingPage = document.querySelector('.rating');
const thankYouPage = document.querySelector('.thank-you-message');
const submitButton = document.querySelector('.submit-button');

const displayThankYouMessage = () => {
	ratingPage.classList.add('hidden');
	thankYouPage.classList.remove('hidden');
};

const showSelectedNumber = (e) => {
	selectedNumber.textContent = e.target.innerText;
};

ratingOptions.forEach(option => option.addEventListener('click', showSelectedNumber));

submitButton.addEventListener('click', displayThankYouMessage);

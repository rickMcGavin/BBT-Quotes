	// variables

{
	// Array of objects with quote information
	const quotes = [
		{
			quote: "Don't you think that if I were wrong, I'd know it?",
			author: "- Sheldon Cooper",
			textSize: "4rem",
			quoteClass: "quote-box--sheldon",
			heartClass: "quote-container__heart-body--sheldon",
			imageClass: "image-container--sheldon",
			liked: false,
			likes: randomLikeNum()
		},
		{
			quote: "If Sheldon proposed to me during sex, my ovaries would grab onto him and never let go.",
			author: "- Amy Farrah Fowler",
			textSize: "3rem",
			quoteClass: "quote-box--amy",
			heartClass: "quote-container__heart-body--amy",
			imageClass: "image-container--amy",
			liked: false,
			likes: randomLikeNum()
		},
		{
			quote: "I'm a vegetarian, except for fish, and the occasional steak. I LOVE steak!",
			author: "- Penny",
			textSize: "3rem",
			quoteClass: "quote-box--penny",
			heartClass: "quote-container__heart-body--penny",
			imageClass: "image-container--penny",
			liked: false,
			likes: randomLikeNum()
		},
		{
			quote: "I'd kill my Rabbi with a pork chop to be with your sister.",
			author: "- Howard Wolowitz",
			textSize: "3.75rem",
			quoteClass: "quote-box--howard",
			heartClass: "quote-container__heart-body--howard",
			imageClass: "image-container--howard",
			liked: false,
			likes: randomLikeNum()
		},
		{
			quote: "I've said this before and I'll say it again: Aquaman sucks!",
			author: "- Raj",
			textSize: "3.5rem",
			quoteClass: "quote-box--raj",
			heartClass: "quote-container__heart-body--raj",
			imageClass: "image-container--raj",
			liked: false,
			likes: randomLikeNum()
		},
		{
			quote: "Twelve years after high school and I'm still at the nerd table.",
			author: "- Leonard hofstadter",
			textSize: "3.5rem",
			quoteClass: "quote-box--leonard",
			heartClass: "quote-container__heart-body--leonard",
			imageClass: "image-container--leonard",
			liked: false,
			likes: randomLikeNum()
		}
	]

	// const and let declarations
	const imageContainer = document.querySelector('.image-container');
	const leftArrow = document.querySelector('.image-container__left-arrow');
	const rightArrow = document.querySelector('.image-container__right-arrow');
	const quoteBox = document.querySelector('.quote-box');
	const quoteText = document.querySelector('.quote-container__text');
	const author = document.querySelector('.quote-container__author');
	const heartBody = document.querySelector('.quote-container__heart-body');
	const heart = document.querySelector('.quote-container__heart');
	const heartFilled = document.querySelector('.quote-container__heart-filled');
	const likes = document.querySelector('.quote-container__heart-numbers');
	const quoteContainerInner = document.querySelector('.quote-container__inner');

	let count = 0;	


	// listeners
	leftArrow.addEventListener('click', goBackOneQuote);
	rightArrow.addEventListener('click', goForwardOneQuote);
	heartBody.addEventListener('click', updateLikeStatus);
	leftArrow.addEventListener('click', animateUp);
	rightArrow.addEventListener('click', animateUp);
	quoteContainerInner.addEventListener('transitionend', animateDown);

	// functions

	function animateUp() {
		quoteContainerInner.classList.add('quote-container__inner--animateUp');
	}

	function animateDown(e) {
		this.classList.remove('quote-container__inner--animateUp');
	}

	function displayQuote() {
		// change background colors for heart body and quote box
		quoteBox.classList.add(quotes[count].quoteClass);
		heartBody.classList.add(quotes[count].heartClass);
		// change background image 
		imageContainer.classList.add(quotes[count].imageClass)
		// load new quote
		quoteText.textContent = quotes[count].quote;
		// change to best font size
		quoteText.style.fontSize = quotes[count].textSize;
		// load author
		author.textContent = quotes[count].author;
		updateLikeDisplay();
		updateLikesDisplay();
	}

	function removeClasses(count) {
		// remove character specific classes for background colors of quoteBox, heartBody, & character photo in imageContainer
		quoteBox.classList.remove(quotes[count].quoteClass);
		heartBody.classList.remove(quotes[count].heartClass);
		imageContainer.classList.remove(quotes[count].imageClass);
	}

	function goBackOneQuote() {
		removeClasses(count);
		count--;
		if (count >= 0) {
			displayQuote();
		} else if (count < 0) {
			// if count is less than 0 go to the end of the array
			count = quotes.length - 1;
			displayQuote();
		}
	}

	function goForwardOneQuote() {
		removeClasses(count);
		count++;
		if (count < quotes.length) {
			displayQuote();
		} else if (count > quotes.length - 1) {
			// if count is greater than the number of objects in the quotes array, go to beginning of the array
			count = 0;
			displayQuote();
		}
	}

	function updateLikeStatus() {
		if (quotes[count].liked) {
			quotes[count].liked = false;
			updateLikeDisplay();
		} else {
			quotes[count].liked = true;
			updateLikeDisplay();
		}
	}

	function updateLikeDisplay() {
		if (quotes[count].liked) {
			heartFilled.classList.remove('no-display');
			heart.classList.add('no-display');
			updateLikesDisplay();
		} else {
			heartFilled.classList.add('no-display');
			heart.classList.remove('no-display');
			updateLikesDisplay();
		}
	}

	function updateLikesDisplay() {
		if (quotes[count].liked) {
			likes.textContent = quotes[count].likes + 1;
		} else {
			likes.textContent = quotes[count].likes;
		}
	}

	// function to generate a random number for the likes
	function randomLikeNum() {
	  return Math.floor(Math.random() * 999);
	}
	
	displayQuote();
}


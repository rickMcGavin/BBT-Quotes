	// Block scoping the code seems to break it entirely in Safari, so they are commented out and replaced with es6 IIFE.

// {
 

(() => {
   // array of objects to store information on each quote used in the app
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
  
	// const declarations for DOM elements
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

  // let declaration to keep track of place in array
	let count = 0;	


	// Event listeners
	leftArrow.addEventListener('click', goBackOneQuote);
	rightArrow.addEventListener('click', goForwardOneQuote);
	heartBody.addEventListener('click', updateLikeStatus);
	leftArrow.addEventListener('click', animateUp);
	rightArrow.addEventListener('click', animateUp);
	quoteContainerInner.addEventListener('transitionend', animateDown);

	// functions
  
  // animate text up when user clicks arrows
	function animateUp() {
		quoteContainerInner.classList.add('quote-container__inner--animateUp');
	}
  
  // when animateUp transition ends, remove the class to bring text back down
	function animateDown(e) {
		this.classList.remove('quote-container__inner--animateUp');
	}

	function displayQuote() {
		// change background colors for heart body and quote box
		quoteBox.classList.add(quotes[count].quoteClass);
		heartBody.classList.add(quotes[count].heartClass);
		// change character photo 
		imageContainer.classList.add(quotes[count].imageClass)
		// load new quote
		quoteText.textContent = quotes[count].quote;
		// change to best font size for quote used
		quoteText.style.fontSize = quotes[count].textSize;
		// load author
		author.textContent = quotes[count].author;
    
		updateLikeDisplay();
		updateLikesDisplay();
	}

  // remove character specific classes for background colors of     quoteBox, heartBody, & character photo in imageContainer
	function removeClasses(count) {
		quoteBox.classList.remove(quotes[count].quoteClass);
		heartBody.classList.remove(quotes[count].heartClass);
		imageContainer.classList.remove(quotes[count].imageClass);
	}

  // fires when user clicks back arrow. function primarily takes user back in the quote array by one
	function goBackOneQuote() {
		removeClasses(count);
		count--;
		if (count >= 0) {
			displayQuote();
    // if count is less than 0 go to the end of the array
		} else if (count < 0) {
			count = quotes.length - 1;
			displayQuote();
		}
	}

  // fires when user clicks forward arrow. function primarily takes the user forward in the quotes arrow by one
	function goForwardOneQuote() {
		removeClasses(count);
		count++;
		if (count < quotes.length) {
			displayQuote();
    // if count is greater than the number of objects in the quotes array, go to beginning of the array  
		} else if (count > quotes.length - 1) {
			count = 0;
			displayQuote();
		}
	}

  // fires when user clicks the heart, updates the like status of the quote in the object, then calls the function to update the display
	function updateLikeStatus() {
		if (quotes[count].liked) {
			quotes[count].liked = false;
			updateLikeDisplay();
		} else {
			quotes[count].liked = true;
			updateLikeDisplay();
		}
	}
  
  // check if this quote has been liked by the user and display the approriate heart
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

  // check if this quote has been liked by the user, and display the appropriate number of likes
	function updateLikesDisplay() {
		if (quotes[count].liked) {
			likes.textContent = quotes[count].likes + 1;
		} else {
			likes.textContent = quotes[count].likes;
		}
	}

	//generate a random number for initial like number value
	function randomLikeNum() {
	  return Math.floor(Math.random() * 999);
	}
	
	displayQuote();
// }

})();
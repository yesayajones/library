let myLibrary = ['Paradise', 'Hell', 'Heaven'];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		return `The ${title} by ${author}, ${pages} pages, ${read} read yet`;
	};
}

// let theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 255, 'not');
// console.log(theHobbit.info());

function addBookToLibrary(book) {
	myLibrary.push(book);
}

function loop() {
	myLibrary.forEach((book) => {
		console.log(book);
	});
}

loop();

function Book(title, author) {
	this.title = title;
	this.author = author;
	this.getTitle = () => {
		return "Title: " + this.title;
	}
	
	this.getAuthor = () => {
		return "Author: " + this.author;
	}
}

var PP = new Book("Pride and Prejudice", "Jane Austen");
var H = new Book("Hamlet", "William Shakespeare");
var WP = new Book("War and Peace", "Leo Tolstoy");

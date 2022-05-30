import Books from './utilityClass.js';
import navigation from './navMenu.js';
import luxon from './luxon.js';

const title = document.getElementById('book-title');
const author = document.getElementById('author');

window.book = new Books(title, author);
window.book.displayBooks();

navigation();
luxon();

import Books from './utilityClass.js';
import navigation from './navMenu.js';
import luxon from './time.js';

const title = document.getElementById('book-title');
const author = document.getElementById('author');

window.book = new Books(title, author);

window.addEventListener('load', () => {
  window.book.displayBooks();
  navigation();
  luxon();
});
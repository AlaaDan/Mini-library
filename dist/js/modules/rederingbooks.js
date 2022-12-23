var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getApi } from "./gettingapi";
const books_names_front = document.querySelectorAll('.book_name_front');
const books_author_front = document.querySelectorAll('.book_author_front');
const front_pages = document.querySelectorAll('.front_page');
function renderBook(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const books_info = yield getApi();
        const book = books_info[id];
        //console.log('test',book)
        document.querySelector('#book_name').innerHTML = book.title;
        document.querySelector('#author').innerHTML = book.author;
        document.querySelector('#book').innerHTML = book.plot;
        document.querySelector('#audience').innerHTML = book.audience;
        document.querySelector('#first_published').innerHTML = book.year.toString();
        if (typeof (book.pages) === 'number') {
            document.querySelector('#pages_number').innerHTML = book.pages.toString();
        }
        else {
            document.querySelector('#pages_number').innerHTML = book.pages;
        }
        document.querySelector('#publisher').innerHTML = book.publisher;
        const page = document.querySelector('.front_page');
        page.style.background = book.color;
    });
}
function addingColor(card_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const books_info = yield getApi();
        const book = books_info[card_id];
        //console.log(book.title);
        books_names_front[card_id].innerHTML = book.title;
        books_author_front[card_id].innerHTML = book.author;
        const page = front_pages[card_id];
        page.style.background = book.color;
    });
}
export { addingColor };
export { renderBook };

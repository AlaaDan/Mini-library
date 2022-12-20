var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const BASE_URL = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";
const homePage = document.querySelector('.wrapper');
const book = document.querySelector('.card');
const books = document.querySelectorAll('.card');
const front_pages = document.querySelectorAll('.front_page');
const books_names_front = document.querySelectorAll('.book_name_front');
const books_author_front = document.querySelectorAll('.book_author_front');
function getApi() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(BASE_URL);
            //console.log(response);
            if (response.status === 200) {
                const data = yield response.json();
                //console.log("Hey",data);
                return data;
            }
            else {
                throw Error("Something went wrong, try again later");
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
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
function showHide(id) {
    var _a, _b, _c;
    book === null || book === void 0 ? void 0 : book.classList.toggle('flip');
    (_a = document.querySelector('.front_page')) === null || _a === void 0 ? void 0 : _a.classList.toggle('front_page_zoom');
    books_names_front[0].classList.toggle('hide');
    books_author_front[0].classList.toggle('hide');
    //document.querySelector('#close').classList.toggle('hide')
    if ((_b = document.querySelector('.details')) === null || _b === void 0 ? void 0 : _b.classList.contains('show')) {
        (_c = document.querySelector('.details')) === null || _c === void 0 ? void 0 : _c.classList.remove('show');
    }
    else {
        setTimeout(() => {
            var _a;
            (_a = document.querySelector('.details')) === null || _a === void 0 ? void 0 : _a.classList.add('show');
        }, 600);
    }
    ;
}
// books_names_front.forEach((book_name, index)=>{
//     console.log(book_name);
//     addingColor(book_name,index)
// })
books.forEach((book, index) => {
    //console.log(book);
    addingColor(index);
    book.addEventListener('click', () => {
        const dataID = book.getAttribute('data-id');
        //console.log(dataID);
        renderBook(dataID);
        showHide(dataID);
    });
});

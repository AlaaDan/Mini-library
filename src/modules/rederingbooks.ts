import { getApi } from "./gettingapi";
const books_names_front = document.querySelectorAll('.book_name_front');
const books_author_front = document.querySelectorAll('.book_author_front');
const front_pages = document.querySelectorAll('.front_page');


async function renderBook(id){
    const books_info =  await getApi();
    const book = books_info[id]
    //console.log('test',book)
    document.querySelector('#book_name').innerHTML = book.title;
    document.querySelector('#author').innerHTML = book.author;
    document.querySelector('#book').innerHTML = book.plot;
    document.querySelector('#audience').innerHTML = book.audience;
    document.querySelector('#first_published').innerHTML = book.year.toString();
    if(typeof(book.pages)=== 'number'){
        document.querySelector('#pages_number').innerHTML = book.pages.toString();
    }else{
        document.querySelector('#pages_number').innerHTML = book.pages;
    }
    document.querySelector('#publisher').innerHTML = book.publisher;
    const page = document.querySelector('.front_page') as HTMLElement | null;
    page.style.background = book.color;
}

async function addingColor(card_id: number){
    const books_info =  await getApi();
    const book = books_info[card_id];
    //console.log(book.title);
    books_names_front[card_id].innerHTML = book.title;
    books_author_front[card_id].innerHTML = book.author;
    const page = front_pages[card_id] as HTMLElement | null;
    page.style.background = book.color;
}

export{addingColor}
export{renderBook}
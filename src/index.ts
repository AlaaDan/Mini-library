const BASE_URL: string = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books"
//const homePage = document.querySelector('.wrapper');
const book = document.querySelector('.card');
const books = document.querySelectorAll('.card');
const front_pages = document.querySelectorAll('.front_page');
const books_names_front = document.querySelectorAll('.book_name_front');
const books_author_front = document.querySelectorAll('.book_author_front');
//const search = document.querySelector('input');


interface Book_info{
    audience: string,
    author: string,
    color: string,
    id: number,
    pages: number | null,
    plot: string,
    publisher: string,
    title: string,
    year: number
}

async function getApi(){
    try{
        const response = await fetch(BASE_URL);
        //console.log(response);
        if(response.status === 200){
            const data: Book_info[]=  await response.json();
            //console.log("Hey",data);
            return data
        }else{
            throw Error("Something went wrong, try again later")
        }
        
    } catch(error){
        console.log(error)
    }
    
}

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
function showHide(id): void{
    book?.classList.toggle('flip');
    document.querySelector('.front_page')?.classList.toggle('front_page_zoom');
    books_names_front[0].classList.toggle('hide');
    books_author_front[0].classList.toggle('hide');
    //document.querySelector('#close').classList.toggle('hide')
    if(document.querySelector('.details')?.classList.contains('show')){
        document.querySelector('.details')?.classList.remove('show');
    }else{
        setTimeout(() => {
            document.querySelector('.details')?.classList.add('show');
        }, 600);
    };    
}
// books_names_front.forEach((book_name, index)=>{
//     console.log(book_name);
//     addingColor(book_name,index)
// })

// async function search() {
//     const Books = await getApi()
//     console.log(Books.length)
//     const searchButton = document.querySelector('#searchButton') as HTMLInputElement;
//     Books.forEach((singleBook, inx)=>{
//         if (singleBook.title.includes(searchButton.value)){
//             console.log(inx)
            
//         }
//     })
  
//     // if (searchedBook[0]) {
//     // //   displayBook(undefined, searchedBook[0]);
//     // //   query.value = '';
//     // }
  
//   }
// const searchButton = document.querySelector('#searchButton') as HTMLInputElement;
// searchButton.addEventListener('click', (){
//     search()
// })

books.forEach((book, index)=>{
    //console.log(book);
    addingColor(index);
    
    book.addEventListener('click', ()=>{
        const dataID: any = book.getAttribute('data-id');
        
        //console.log(dataID);
        renderBook(dataID);
        showHide(dataID)
    })
})





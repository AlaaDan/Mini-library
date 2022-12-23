import { Book_info } from "./interfaces";
const BASE_URL: string = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books"

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

export {getApi}
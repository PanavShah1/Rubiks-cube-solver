import { text_array } from "./solving";

console.log(text_array);
let ctr = 1;
function next(){
    document.querySelector('.move').innerHTML = text_array[ctr];
    ctr++;
}
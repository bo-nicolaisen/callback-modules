import {renderPageTwo} from '../view/pageTwo.js';
import {renderPageOne} from '../view/mainPage.js';


export  function callbackOne(myValue){
console.log('callbackOne: ' + myValue);
renderPageOne();

}

export  function callbackTwo(myValue){
console.log('callbackTwo: ' + myValue);
renderPageTwo();
}



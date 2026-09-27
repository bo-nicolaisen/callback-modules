import { callbackOne,callbackTwo } from '../controllers/mainCallbacks.js';

export function renderPageOne(){

    let myAppElement = document.getElementById('app');

    myAppElement.innerHTML = '<h1>Callback Modules page 1</h1><p>Click the buttons below to see the callbacks in action.</p>';

myAppElement.appendChild(createButtonOne());
myAppElement.appendChild(createButtonTwo());

}


function createButtonOne(){

   let myButton= document.createElement('button');
    myButton.innerHTML = 'page One';
    myButton.addEventListener('click', function(){
        callbackOne('Button One Clicked');
    })

return myButton;

}

function createButtonTwo(){

   let myButton= document.createElement('button');
    myButton.innerHTML = 'page Two';
    myButton.addEventListener('click', function(){
        callbackTwo('Button Two Clicked');
    })

return myButton;

}

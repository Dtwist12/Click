var button =document.querySelector("button");
var body = document.querySelector('body');

btn1.addEventListener('click', Foo)

function Foo(){
    var pTag = document.createElement('h3');
    pTag.textContent = 'Foo'
    body.appendChild(pTag);
}
var button=document.querySelector("button"); 
btn2.addEventListener('click', Bar)

function Bar(){
    var pTag = document.createElement('h3');
    pTag.textContent='Bar'
    body.appendChild(pTag);
}

var button=document.querySelector("button");
btn3.addEventListener('click', FooBar)

function FooBar(){
var pTag = document.createElement('h2');
pTag.textContent="FooBar"
body.appendChild(pTag)
}
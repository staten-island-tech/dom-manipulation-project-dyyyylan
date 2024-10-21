const DOMSelectors = {
parentdiv: document.querySelector(".parent"),
submitButton: document.querySelector("button"),
form: document.querySelector(".form"),
text: document.querySelector("#text"),
img: document.querySelector("#img"),
};


function clearinput() {
    DOMSelectors.form.reset();
}

function addprompt(num) {
    DOMSelectors.parentdiv.insertAdjacentHTML(
        "beforeend",
        `<div class="card" id="p${num}"> <h4>${DOMSelectors.text.value}</h4> <img src ="${DOMSelectors.img.value}" class="imgsize"> <button id="b${num}">Remove</button></div>`
    )
}

function removeprompt(num) {
    document
    .querySelector(`#b${num}`)
    .addEventListener("click", function (event){
        event.preventDefault();
        document.querySelector(`#p${num}`).remove();
    });
}

function run() {
    let n = 0;
    DOMSelectors.submitButton.addEventListener("click", function (event) {
        if (!(DOMSelectors.text.value === "" || DOMSelectors.img.value === "")){
            event.preventDefault();
            addprompt(n);
            clearinput();
            removeprompt(n);
            n+= 1;
        }
        else {
            alert(">:( you didnt put values for both dude now im erasing any existing imgs")
        }
        
    })
}

run();
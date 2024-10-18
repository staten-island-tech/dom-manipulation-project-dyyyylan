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

function removeprompt(num) {
    DOMSelectors.parentdiv.removeChild(`p${num}`);
}

function addprompt(num) {
    DOMSelectors.parentdiv.insertAdjacentHTML(
        "beforeend",
        `<div class="card" id="p${num}"> <h4>${DOMSelectors.text.value}</h4> <img src ="${DOMSelectors.img.value}"> <button id="b${num}"></button></div>`
    )
    document
    .querySelector(`#b${num}`)
    .addEventListener("click", function (event){
        event.preventDefault;
        document.addEventListener(`#p${num}`).remove();
    });
}

function run() {
    let n = 0;
DOMSelectors.submitButton.addEventListener("submit", function (event) {
    if (!(DOMSelectors.text.value === "" || DOMSelectors.img.value === "")){
        event.preventDefault();
        addprompt(n);
        clearinput();
    }
})
}

run();
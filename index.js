const DOMSelectors = {
parentdiv: document.querySelector(".parent"),
submitButton: document.querySelector("button"),
form: document.querySelector(".form"),
text: document.querySelector("#text"),
img: document.querySelector("#img"),
};

DOMSelectors.form.addEventListener("submit", function (event){
    event.preventDefault();
    DOMSelectors.form.reset();
    DOMSelectors.parentdiv.insertAdjacentHTML(
        "beforeend",
        '<div class="card">    </div>'
    )
}

);

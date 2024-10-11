const header = document.querySelector("h1");
console.log(header);



const DOMSelectors = {
    button: document.querySelector(".btn"),
    form: document.querySelector(".form"),
    container: document.querySelector(".container"),
    input: document.querySelector("#Desc"),
    text: document.querySelector("text")
};

DOMSelectors.form.addEventListener("submit", function (event){
    event.preventDefault();
    let input = DOMSelectors.input.text
    DOMSelectors.container.insertAdjacentHTML(
        "beforeend", <div class="card"><p>${input}</p></div>);
    });


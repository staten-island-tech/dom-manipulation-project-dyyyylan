const header = document.querySelector("h1");
console.log(header);



const DOMSelectors = {
    header: document.querySelector("h1"),
    items: document.querySelector("li"),
    cardHeader: document.querySelector(".cardheader"),
    button: document.querySelector(".btn"),
    form: document.querySelector(".form"),
};

DOMSelectors.form.addEventListener("submit", function (event){
    event.preventDefault();
    console.log(document.querySelector("input").value);
    });


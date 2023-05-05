let qs = (elemento) => {
    return document.querySelector(elemento);
}

window.addEventListener("load", () => {
    let $email = qs("#email");


    email.addEventListener("focus", function(){
        console.log(1);
    })

})
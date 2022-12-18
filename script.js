const res = document.getElementById("res");
const resLista = document.getElementById("lista");
const vamos = document.querySelector("#vamos");

let lista = [];
const num = document.querySelector("#botaoJogar");

num.addEventListener('click', () => {
    res.removeAttribute("hidden")
    let x = Math.round(Math.random() * 75)
    if (x < 1) {
        x = Math.round(Math.random() * 75)
    }
    res.innerHTML = x;
    lista.push(x);
    resLista.innerHTML = lista;
    vamos.setAttribute("hidden", "hidden")
}
)

const reset = document.querySelector("#botaoResetar");

reset.addEventListener('click', () => {
    res.innerHTML = "";
    lista = [];
    resLista.innerHTML = "";
    res.setAttribute("hidden", "hidden")
    vamos.removeAttribute("hidden")
})
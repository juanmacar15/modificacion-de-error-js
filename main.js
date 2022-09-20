addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        console.log(data);
    })

    for (let input of document.querySelectorAll("input")) {
        document.querySelector(`[name='${input.name}']`).addEventListener('input', (e) => {
            if (!new RegExp(e.target.pattern).test(e.target.value))
                e.target.setCustomValidity(e.target.title);
            else
                e.target.setCustomValidity("");
        })
    }
})

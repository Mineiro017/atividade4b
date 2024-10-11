function multiplicar() {
    const numero1 = document.querySelector("#numeri-1").value
    const numero2 = document.querySelector("#numeri-2").value
    const numero3 = document.querySelector("#numeri-3").value

    const resultado = document.querySelector(".resultado")
    resultado.innerHTML = `Multiplicação: ${numero1 * numero2 * numero3}`
}

const button = document.querySelector("button")
button.addEventListener("click", multiplicar)
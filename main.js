let elem = document.querySelector('.element')
let btn = document.querySelector('.btn')

btn.onclick = () => {
    elem.classList.add('element2')
    btn.classList.add('btn2')
}

let add = document.querySelector('.add')
let knopka = document.querySelector('.knopka')
let click = document.querySelector('.click')

knopka.onclick = () => {
    add.classList.add('add1','add2','add3')
}
click.onclick = () => {
    add.classList.remove('add3')
}

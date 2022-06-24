input.onButtonPressed(Button.A, function () {
    // SE QtdeColunasJaDefinidas for menor ou igual a QtdeColunasAUsar, então ainda permite escolhas de categorias
    // SENAO
    // mostra mensagem que já foram escolhidas todas as categorias definidas.
    //         
    if (true) {
    	
    } else {
    	
    }
})
// Equivale a um botão para reset, para reiniciar uma nova história.
input.onButtonPressed(Button.AB, function () {
    Categoria = 0
    QtdeColunasJaDefinidas = 1
    QtdeColunasAUsar = 6
    basic.showString("Nova historia")
})
input.onButtonPressed(Button.B, function () {
    let Item = 0
    basic.showString("C")
    basic.showNumber(Categoria - 1)
    basic.showString("I")
    basic.showNumber(Item)
    basic.clearScreen()
})
let QtdeColunasAUsar = 0
let QtdeColunasJaDefinidas = 0
let Categoria = 0
Categoria = 0
QtdeColunasJaDefinidas = 1
QtdeColunasAUsar = 6

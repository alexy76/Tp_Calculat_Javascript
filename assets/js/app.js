let arrayID = ["btnZero", "btnOne", "btnTwo", "btnThree", "btnFour", "btnFive", "btnSix", "btnSeven", "btnEight", "btnNine", "btnPoint", "btnEnter", "btnAdd", "btnSub", "btnMult", "btnDiv", "btnReset", "temp", "keyboard"]

arrayID.forEach(element => {
    eval(`var ${element} = document.getElementById(${element})`)
})

// btnOne.addEventListener('click', e => simulateKeyPress(btnOne))      A voir plus tard

reset()
keyboard.focus()
temp.value = ""
let point = false


keyboard.addEventListener('keydown', e => {

    switch(e.keyCode){


        //   ***********   Les chiffres de 0 à 9, et le point virgule **********
        case 96 :
            simulateKeyPress(btnZero)
            break
        case 97 :
            simulateKeyPress(btnOne)
            break
        case 98 :
            simulateKeyPress(btnTwo)
            break
        case 99 :
            simulateKeyPress(btnThree)
            break
        case 100 :
            simulateKeyPress(btnFour)
            break
        case 101 :
            simulateKeyPress(btnFive)
            break
        case 102 :
            simulateKeyPress(btnSix)
            break
        case 103 :
            simulateKeyPress(btnSeven)
            break
        case 104 :
            simulateKeyPress(btnEight)
            break
        case 105 :
            simulateKeyPress(btnNine)
            break
        case 110 :
            simulateKeyPress(btnPoint)
            break

        // ********   Les différents Opérateurs (+, -, *, /)   ***********
        case 107 :
            simulateKeyPress(btnAdd)
            e.preventDefault()
            addOperator(e.key)
            reset()
            break
        case 109 :
            simulateKeyPress(btnSub)
            e.preventDefault()
            addOperator(e.key)
            reset()
            break
        case 106 :
            simulateKeyPress(btnMult)
            e.preventDefault()
            addOperator(e.key)
            reset()
            break
        case 111 :
            simulateKeyPress(btnDiv)
            e.preventDefault()
            addOperator(e.key)
            reset()
            break

        // Touche "Entrer" pour calculer le total de l'opération
        case 13 :

            simulateKeyPress(btnEnter)
            temp.value += keyboard.value
            totalCalcul(temp.value)

            break

        case 8 :
            simulateKeyPress(btnBackspace)
            break


        // Touche "²" pour RESET la calculatrice
        case 222 :
            simulateKeyPress(btnReset)
            e.preventDefault()
            reset()
            break

        default:
            e.preventDefault()
    }

})



function reset(){
    keyboard.value = ""
    keyboard.placeholder = 0
}

function simulateKeyPress(selectID){
    selectID.style.backgroundColor = "blue"
    setTimeout(() => selectID.style.backgroundColor = "", 100)
}

function addOperator(operator){
    if(temp.value === ""){
        temp.value = keyboard.value += ` ${operator} `
        console.log(operator)
    }
}

function totalCalcul(calcul){

    // ****   Pour les fainéants !   ****
    // keyboard.value = eval(calcul)
    // temp.placeholder = calcul
    // temp.value = ""

    total = calcul.split(" ")
    total[0] = parseFloat(total[0])
    total[2] = parseFloat(total[2])

    if(total[1] === "+"){
        keyboard.value = total[0] + total[2]
    }else if(total[1] === "-"){
        keyboard.value = total[0] - total[2]
    }else if(total[1] === "*"){
        keyboard.value = total[0] * total[2]
    }else if(total[1] === "/"){
        keyboard.value = total[0] / total[2]
    }

    temp.placeholder = temp.value
    temp.value = ""
}
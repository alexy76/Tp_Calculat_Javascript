let arrID = ["btnZero", "btnOne", "btnTwo", "btnThree", "btnFour", "btnFive", "btnSix", "btnSeven", "btnEight", "btnNine", "btnPoint", "btnEnter", "btnAdd", "btnSub", "btnMult", "btnDiv", "btnReset", "temp", "keyboard"]

arrID.forEach(element => {
    eval(`var ${element} = document.getElementById(${element})`)
})

keyboard.value = ""
temp.value = ""
reset()
keyboard.focus()


keyboard.addEventListener('keydown', e => {

    switch(e.keyCode){

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
        case 107 :
            simulateKeyPress(btnAdd)
            e.preventDefault()
            if(temp.value === ""){
                temp.value = keyboard.value += " + "
            }
            reset()
            break
        case 109 :
            simulateKeyPress(btnSub)
            e.preventDefault()
            if(temp.value === ""){
                temp.value = keyboard.value += " - "
            }
            reset()
            break
        case 106 :
            simulateKeyPress(btnMult)
            e.preventDefault()
            if(temp.value === ""){
                temp.value = keyboard.value += " x "
            }
            reset()
            break
        case 111 :
            simulateKeyPress(btnDiv)
            e.preventDefault()
            if(temp.value === ""){
                temp.value = keyboard.value += " / "
            }
            reset()
            break
        case 13 :
            simulateKeyPress(btnEnter)
            temp.value += keyboard.value
            let total = temp.value.split(" ")
            total[0] = parseInt(total[0])
            total[2] = parseInt(total[2])
            totalCalcul(total)
            break
        case 8 :
            simulateKeyPress(btnBackspace)
            break
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

function totalCalcul(total){

    if(total[1] === "+"){
        keyboard.value = total[0] + total[2]
        temp.placeholder = temp.value
        temp.value = ""
    }else if(total[1] === "-"){
        keyboard.value = total[0] - total[2]
        temp.placeholder = temp.value
        temp.value = ""
    }else if(total[1] === "x"){
        keyboard.value = total[0] * total[2]
        temp.placeholder = temp.value
        temp.value = ""
    }else if(total[1] === "/"){
        keyboard.value = total[0] / total[2]
        temp.placeholder = temp.value
        temp.value = ""
    }
}

function simulateKeyPress(selectID){
    selectID.style.backgroundColor = "blue"
    setTimeout(() => selectID.style.backgroundColor = "", 100)
}
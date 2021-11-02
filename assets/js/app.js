let init = false

if(!init){
    initCalculat()
}


keyboard.addEventListener('keydown', e => {

    // console.log(e)

    // console.log(keyboard.value)

    switch(e.keyCode){

        case 96 :
            console.log(e.key)
            break
        case 97 :
            console.log(e.key)
            break
        case 98 :
            console.log(e.key)
            break
        case 99 :
            console.log(e.key)
            break
        case 100 :
            console.log(e.key)
            break
        case 101 :
            console.log(e.key)
            break
        case 102 :
            console.log(e.key)
            break
        case 103 :
            console.log(e.key)
            break
        case 104 :
            console.log(e.key)
            break
        case 105 :
            console.log(e.key)
            break
        case 110 :
            console.log(e.key)
            break
        case 107 :
            e.preventDefault()
            console.log(keyboard.value)
            reset()
            break
        case 109 :
            e.preventDefault()
            console.log(keyboard.value)
            reset()
            break
        case 106 :
            e.preventDefault()
            console.log(keyboard.value)
            reset()
            break
        case 111 :
            e.preventDefault()
            console.log(keyboard.value)
            reset()
            break
        case 192 :
            e.preventDefault()
            console.log(keyboard.value)
            reset()
            break
        case 13 :
            console.log(e.key)
            break
        case 8 :
            console.log(e.key)
            break
        case 222 :
            e.preventDefault()
            reset()
            break

        default:
            e.preventDefault()
    }

})

function initCalculat(){
    init = true
    let keyboard = document.getElementById("keyboard")
    keyboard.value = ""
    reset()
    keyboard.focus()
}

function reset(){
    keyboard.value = ""
    keyboard.placeholder = 0
}
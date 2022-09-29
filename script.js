const one = document.querySelector(".one-btn")
const two = document.querySelector(".two-btn")
const three = document.querySelector(".three-btn")
const four = document.querySelector(".four-btn")
const five = document.querySelector(".five-btn")
const six = document.querySelector(".six-btn")
const seven = document.querySelector(".seven-btn")
const eight = document.querySelector(".eight-btn")
const nine = document.querySelector(".nine-btn")
const zero = document.querySelector(".zero-btn")
const point = document.querySelector(".point-btn")
const displayAnswer = document.querySelector(".num")
const reset = document.querySelector(".reset-btn")
const del = document.querySelector(".del-btn")
const plus = document.querySelector(".plus-btn")
const minus = document.querySelector(".minus-btn")
const divide = document.querySelector(".divide-btn")
const multiply = document.querySelector(".multiply-btn")
const equal = document.querySelector(".equal-btn")
const total = document.querySelector(".total")
const list = document.querySelector(".list2")
const deleteItems = []
const theme1 = document.querySelector(".theme1-num")
const theme2 = document.querySelector(".theme2-num")
const theme3 = document.querySelector(".theme3-num")
const toggleSwitch = document.querySelector(".switch")
const themeBg = document.querySelector(".theme-bg")
const displayBg = document.querySelector(".display-answer")
const keysBg = document.querySelector(".input-btn")
const toggleSwitchBg = document.querySelector(".toggle-switch")

// const themeTextColor = document.querySelector(".theme-txt-cl")

zero.addEventListener("click", () => {
    displayAnswer.textContent += "0"
    deleteItems.push(0)
})
one.addEventListener("click", () => {
    displayAnswer.textContent += "1"
    deleteItems.push(1)
})
two.addEventListener("click", () => {
    displayAnswer.textContent += "2"
    deleteItems.push(2)
})
three.addEventListener("click", () => {
    displayAnswer.textContent += "3"
    deleteItems.push(3)
})
four.addEventListener("click", () => {
    displayAnswer.textContent += "4"
    deleteItems.push(4)
})
five.addEventListener("click", () => {
    displayAnswer.textContent += "5"
    deleteItems.push(5)
})
six.addEventListener("click", () => {
    displayAnswer.textContent += "6"
    deleteItems.push(6)
})
seven.addEventListener("click", () => {
    displayAnswer.textContent += "7"
    deleteItems.push(7)
})
eight.addEventListener("click", () =>{
    displayAnswer.textContent += "8"
    deleteItems.push(8)
})
nine.addEventListener("click", () => {
    displayAnswer.textContent += "9"
    deleteItems.push(9)
})
point.addEventListener("click", () => {
    displayAnswer.textContent += "."
    deleteItems.push(".")
})

plus.addEventListener("click", () => {
    displayAnswer.textContent += "+"
    deleteItems.push("+")
})
minus.addEventListener("click", () => {
    displayAnswer.textContent += "-"
    deleteItems.push("-")
})
divide.addEventListener("click", () => {
    displayAnswer.textContent += "/"
    deleteItems.push("/")
})
multiply.addEventListener("click", () => {
    displayAnswer.textContent += "*"
    deleteItems.push("*")
})
equal.addEventListener("click", () => {
    // function newNum2() { return eval(`${displayAnswer.textContent}`)}
    let totalValue = eval(`${displayAnswer.textContent}`)
    // console.log(newNum2())
    total.textContent = totalValue
    // list.classList.toggle = "list"
    // list.classList.toggle("list")
})
reset.addEventListener("click", () => {
    deleteItems.pop()
    for(elements of deleteItems){
        deleteItems.pop()
    }
    displayAnswer.textContent = ""
    total.textContent = ""
})
del.addEventListener("click", () => {
    deleteItems.length = 0
    displayAnswer.textContent = deleteItems.join('')
    // total.textContent = eval(`${displayAnswer.textContent}`)
})
theme1.addEventListener("click", () => {
    toggleSwitch.style.transform = `translateX(0)`
    toggleSwitch.style.background =  "hsl(6, 70%, 34%)"
    themeBg.classList.remove("theme2-bg")
    themeBg.classList.remove("theme3-bg")
    displayBg.style.background = "hsl(224, 36%, 15%)"
    document.querySelector(".theme1-num").style.color = "hsl(0, 0%, 100%)"
    document.querySelector(".theme2-num").style.color = "hsl(0, 0%, 100%)"
    document.querySelector(".theme3-num").style.color = "hsl(0, 0%, 100%)"
    document.querySelector(".theme").style.color = "hsl(0, 0%, 100%)"
    document.querySelector(".logo-h").style.color = "hsl(0, 0%, 100%)"
    seven.classList.remove("theme3-keys")
    eight.classList.remove("theme3-keys")
    nine.classList.remove("theme3-keys")
    four.classList.remove("theme3-keys")
    five.classList.remove("theme3-keys")
    six.classList.remove("theme3-keys")
    plus.classList.remove("theme3-keys")
    one.classList.remove("theme3-keys")
    two.classList.remove("theme3-keys")
    three.classList.remove("theme3-keys")
    minus.classList.remove("theme3-keys")
    point.classList.remove("theme3-keys")
    zero.classList.remove("theme3-keys")
    divide.classList.remove("theme3-keys")
    multiply.classList.remove("theme3-keys")
    seven.classList.remove("theme2-keys")
    eight.classList.remove("theme2-keys")
    nine.classList.remove("theme2-keys")
    four.classList.remove("theme2-keys")
    five.classList.remove("theme2-keys")
    six.classList.remove("theme2-keys")
    plus.classList.remove("theme2-keys")
    one.classList.remove("theme2-keys")
    two.classList.remove("theme2-keys")
    three.classList.remove("theme2-keys")
    minus.classList.remove("theme2-keys")
    point.classList.remove("theme2-keys")
    zero.classList.remove("theme2-keys")
    divide.classList.remove("theme2-keys")
    multiply.classList.remove("theme2-keys")
    keysBg.classList.remove("keys-bg3")
    keysBg.classList.remove("keys-bg2")
    toggleSwitchBg.classList.remove("keys-bg3")
    toggleSwitchBg.classList.remove("keys-bg2")
    displayBg.style.color = "white"
    del.classList.remove("theme3-clear")
    reset.classList.remove("theme3-clear")
    del.classList.remove("theme2-clear")
    reset.classList.remove("theme2-clear")
    equal.classList.remove("theme3-equal")
    equal.classList.remove("theme2-equal")
    equal.style.color = "hsl(0, 0%, 100%)"
})
theme2.addEventListener("click", () => {
    toggleSwitch.style.transform = `translateX(calc(var(--width) * 2) )`
    toggleSwitch.style.background = "hsl(25, 98%, 40%)"
    themeBg.classList.add("theme2-bg")
    themeBg.classList.remove("theme3-bg")
    displayBg.style.background = "hsl(0, 0%, 93%)"
    // themeColoredNum.classList.add("theme-txt-cl")
    document.querySelector(".theme1-num").style.color = "hsl(60, 10%, 19%)"
    document.querySelector(".theme2-num").style.color = "hsl(60, 10%, 19%)"
    document.querySelector(".theme3-num").style.color = "hsl(60, 10%, 19%)"
    document.querySelector(".theme").style.color = "hsl(60, 10%, 19%)"
    document.querySelector(".logo-h").style.color = "hsl(60, 10%, 19%)"
    seven.classList.remove("theme3-keys")
    eight.classList.remove("theme3-keys")
    nine.classList.remove("theme3-keys")
    four.classList.remove("theme3-keys")
    five.classList.remove("theme3-keys")
    six.classList.remove("theme3-keys")
    plus.classList.remove("theme3-keys")
    one.classList.remove("theme3-keys")
    two.classList.remove("theme3-keys")
    three.classList.remove("theme3-keys")
    minus.classList.remove("theme3-keys")
    point.classList.remove("theme3-keys")
    zero.classList.remove("theme3-keys")
    divide.classList.remove("theme3-keys")
    multiply.classList.remove("theme3-keys")
    seven.classList.add("theme2-keys")
    eight.classList.add("theme2-keys")
    nine.classList.add("theme2-keys")
    four.classList.add("theme2-keys")
    five.classList.add("theme2-keys")
    six.classList.add("theme2-keys")
    plus.classList.add("theme2-keys")
    one.classList.add("theme2-keys")
    two.classList.add("theme2-keys")
    three.classList.add("theme2-keys")
    minus.classList.add("theme2-keys")
    point.classList.add("theme2-keys")
    zero.classList.add("theme2-keys")
    divide.classList.add("theme2-keys")
    multiply.classList.add("theme2-keys")
    keysBg.classList.remove("keys-bg3")
    keysBg.classList.add("keys-bg2")
    toggleSwitchBg.classList.remove("keys-bg3")
    toggleSwitchBg.classList.add("keys-bg2")
    displayBg.style.color = "hsl(60, 10%, 19%)"
    del.classList.remove("theme3-clear")
    reset.classList.remove("theme3-clear")
    del.classList.add("theme2-clear")
    reset.classList.add("theme2-clear")
    equal.classList.remove("theme3-equal")
    equal.classList.add("theme2-equal")
    equal.style.color = "hsl(0, 0%, 100%)"
})
theme3.addEventListener("click", () => {
    toggleSwitch.style.transform = `translateX(calc(var(--width) * 3.8) )`
    toggleSwitch.style.background = "hsl(176, 100%, 44%)"
    themeBg.classList.add("theme3-bg")
    displayBg.style.background = "hsl(268, 71%, 12%)"
    document.querySelector(".theme1-num").style.color = "hsl(52, 100%, 62%)"
    document.querySelector(".theme2-num").style.color = "hsl(52, 100%, 62%)"
    document.querySelector(".theme3-num").style.color = "hsl(52, 100%, 62%)"
    document.querySelector(".theme").style.color = "hsl(52, 100%, 62%)"
    document.querySelector(".logo-h").style.color = "hsl(52, 100%, 62%)"
    seven.classList.add("theme3-keys")
    eight.classList.add("theme3-keys")
    nine.classList.add("theme3-keys")
    four.classList.add("theme3-keys")
    five.classList.add("theme3-keys")
    six.classList.add("theme3-keys")
    plus.classList.add("theme3-keys")
    one.classList.add("theme3-keys")
    two.classList.add("theme3-keys")
    three.classList.add("theme3-keys")
    minus.classList.add("theme3-keys")
    point.classList.add("theme3-keys")
    zero.classList.add("theme3-keys")
    divide.classList.add("theme3-keys")
    multiply.classList.add("theme3-keys")
    keysBg.classList.add("keys-bg3")
    toggleSwitchBg.classList.add("keys-bg3")
    displayBg.style.color = "hsl(52, 100%, 62%)"
    del.classList.add("theme3-clear")
    reset.classList.add("theme3-clear")
    equal.classList.add("theme3-equal")
    equal.style.color = "hsl(198, 20%, 13%)"
})
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
    displayAnswer.textContent = ""
    total.textContent = ""
})
del.addEventListener("click", () => {
    deleteItems.pop()
    displayAnswer.textContent = deleteItems.join('')
    // total.textContent = eval(`${displayAnswer.textContent}`)
})
theme1.addEventListener("click", () => {
    toggleSwitch.style.transform = `translateX(0)`
    toggleSwitch.style.background =  "hsl(6, 70%, 34%)"
    themeBg.classList.remove("theme2-bg")
    displayBg.classList.remove("theme2-display-bg")
    document.querySelector(".theme1-num").style.color = "hsl(0, 0%, 100%)"
    document.querySelector(".theme2-num").style.color = "hsl(0, 0%, 100%)"
    document.querySelector(".theme3-num").style.color = "hsl(0, 0%, 100%)"
    document.querySelector(".theme").style.color = "hsl(0, 0%, 100%)"
    document.querySelector(".logo-h").style.color = "hsl(0, 0%, 100%)"
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
    keysBg.classList.remove("keys-bg")
    toggleSwitchBg.classList.remove("keys-bg")
    displayBg.style.color = "white"
    del.classList.remove("theme2-clear1")
    reset.classList.remove("theme2-clear1")
    equal.classList.remove("theme2-equal1")
})
theme2.addEventListener("click", () => {
    toggleSwitch.style.transform = `translateX(calc(var(--width) * 2) )`
    toggleSwitch.style.background = "hsl(25, 98%, 40%)"
    themeBg.classList.add("theme2-bg")
    displayBg.classList.add("theme2-display-bg")
    // themeColoredNum.classList.add("theme-txt-cl")
    document.querySelector(".theme1-num").style.color = "hsl(60, 10%, 19%)"
    document.querySelector(".theme2-num").style.color = "hsl(60, 10%, 19%)"
    document.querySelector(".theme3-num").style.color = "hsl(60, 10%, 19%)"
    document.querySelector(".theme").style.color = "hsl(60, 10%, 19%)"
    document.querySelector(".logo-h").style.color = "hsl(60, 10%, 19%)"
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
    keysBg.classList.add("keys-bg")
    toggleSwitchBg.classList.add("keys-bg")
    displayBg.style.color = "hsl(60, 10%, 19%)"
    del.classList.add("theme2-clear1")
    reset.classList.add("theme2-clear1")
    equal.classList.add("theme2-equal1")
})
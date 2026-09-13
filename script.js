let userInput = prompt("Please enter a userInput:")
const btn = document.getElementById("btn")
const num = document.getElementById("number")
const len = document.getElementById("len")
const liter = document.getElementById("liter")
const kilos = document.getElementById("kilos")


let m_f = userInput*3.281
let f_m =userInput/3.281
let l_g = userInput*0.204
let g_l = userInput/0.204
let k_p = userInput*2.204
let p_k = userInput/2.204

btn.addEventListener("click",function length(){
  let contnent = `${userInput} meter = ${m_f} feet | ${userInput} feet = ${f_m.toFixed(3)} meter`
  len.textContent = contnent

}
)

btn.addEventListener("click",function volume(){
  let contnent = `${userInput} liter = ${l_g} gallon | ${userInput} gallon = ${g_l.toFixed(3)} liter`
  liter.textContent = contnent

}
)
btn.addEventListener("click",function mass(){
  let contnent = `${userInput} kilos = ${k_p} pound | ${userInput} pound = ${p_k.toFixed(3)} kilos`
  kilos.textContent = contnent

}
)
num.textContent = userInput
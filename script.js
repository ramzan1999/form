var input1=document.querySelector(".inp1")
var input2=document.querySelector(".inp2")
var input3=document.querySelector(".inp3")
var input4=document.querySelector(".inp4")
var input5=document.querySelector(".inp5")
var input6=document.querySelector(".inp6")
var btn1=document.querySelector(".btn1")
var main2=document.querySelector(".main2")
btn1.onclick=()=>{
    inp1=input1.value
    inp2=input2.value
    inp3=input3.value
    inp4=input4.value
    inp5=input5.value
    inp6=input6.value
    main2.innerHTML=`<h2>name:&nbsp;&nbsp;&nbsp; <span>${inp1}</span></h2><br><h2>Father Name:&nbsp;&nbsp;&nbsp; <span>${inp2}</span></h2><br>
    <h2>Email:&nbsp;&nbsp;&nbsp; <span>${inp3}</span></h2><br><h2>Ph no:&nbsp;&nbsp;&nbsp; <span>${inp4}</span></h2><br>
    <h2>Password:&nbsp;&nbsp;&nbsp; <span>${inp5}</span></h2><br><h2>Date:&nbsp;&nbsp;&nbsp; <span>${inp6 }</span></h2>`
    main2.style.visibility="visible"
    btn1.style.backgroundColor="blue"
    btn1.style.color="white"
    btn1.style.border="none"



}

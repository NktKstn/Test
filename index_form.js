let button = document.getElementById("finish");
let outResult = document.querySelector(".outResult");
button.addEventListener("click", checkTest);
let out1 = document.querySelector(".out-1");
let out2 = document.querySelector(".out-2");
let out3 = document.querySelector(".out-3");
let out4 = document.querySelector(".out-4");
let out5 = document.querySelector(".out-5");
let out6 = document.querySelector(".out-6");
let out7 = document.querySelector(".out-7");
let p1 = document.getElementById("p-1");
let p2 = document.getElementById("p-2");
let p3 = document.getElementById("p-3");
let p4 = document.getElementById("p-4");
let p5 = document.getElementById("p-5");
let p6 = document.getElementById("p-6");
let p7 = document.getElementById("p-7");
let result = 0;
function checkTest() {
    let a1 = document.getElementById("q-1").value;
    let a2 = document.getElementById("q-2").value;
    let a3 = document.getElementById("q-3").value;
    let a4 = document.getElementById("q-4").value;
    let a5 = document.getElementById("q-5").value;
    let a6 = document.getElementById("q-6").value;
    let a7 = document.getElementById("q-7").value;

    if (a1 === "Слабая" || a1 === "слабая" || a1 === "слабо типизированный" || a1 === "Динамический язык") result++;
    else {
        out1.style.background = "red"
        out1.innerHTML = "Иди грызть мануалы";
    }

    if (a2 === "JSON" || a2 === "json" || a2 === ".json" ) result++;
    else {
       out2.style.background = "red";
       out2.innerHTML = "Давай еще разок";
    }
    if (a3 === "Функция высшего порядка" || a3 === "функция высшего порядка") result++;
    else {
        out3.style.background = "red";
        out3.innerHTML = "Не смеши";
    }

    if (a4 === "let" ) result++;
    else {
        out4.style.background = "red";
        out4.innerHTML = "Мде";
    }

    if (a5 === "hoisting" || a5=== "хойстинг" || a5=== "Хойстинг" || a5=== "Hoisting" || a5=== "хоистинг" || a5=== "Хойстинг" ) result++;
    else {
        out5.style.background = "red";
        out5.innerHTML = "На собес пока рановато";
    }

    if (a6 === "Замыкание" || a6 === "замыкание" ) result++;
    else {
        out6.style.background = "red";
        out6.innerHTML = "Можно было и запомнить";
    }

    if (a7 === "Куки" || a7 === "куки" || a7 === "cookie" || a7 === "Cookie"  ) result++;
    else {
        out7.style.background = "red";
        out7.innerHTML = "Подумай еще";
    }
    outResult.innerHTML = "Правильных ответов: " + result + " из " + "7";
    result = 0;
}


function mouseEnter1 () {
    p1.style.background = "green";
}
function mouseLeave1 () {
    p1.style.background = "orange";
}
function mouseEnter2 () {
    p2.style.background = "green";
}
function mouseLeave2 () {
    p2.style.background = "orange";
}

function mouseEnter3 () {
    p3.style.background = "green";
}
function mouseLeave3 () {
    p3.style.background = "orange";
}

function mouseEnter4 () {
    p4.style.background = "green";
}
function mouseLeave4 () {
    p4.style.background = "orange";
}

function mouseEnter5 () {
    p5.style.background = "green";
}
function mouseLeave5 () {
    p5.style.background = "orange";
}

function mouseEnter6 () {
    p6.style.background = "green";
}
function mouseLeave6 () {
    p6.style.background = "orange";
}

function mouseEnter7 () {
    p7.style.background = "green";
}
function mouseLeave7 () {
    p7.style.background = "orange";
}

function buttonEnter () {
    button.style.background = "red";
}
function buttonLeave () {
    button.style.background = "bisque";
}
p1.onmouseenter = mouseEnter1;
p1.onmouseleave = mouseLeave1;
p2.onmouseenter = mouseEnter2;
p2.onmouseleave = mouseLeave2;
p3.onmouseenter = mouseEnter3;
p3.onmouseleave = mouseLeave3;
p4.onmouseenter = mouseEnter4;
p4.onmouseleave = mouseLeave4;
p5.onmouseenter = mouseEnter5;
p5.onmouseleave = mouseLeave5;
p6.onmouseenter = mouseEnter6;
p6.onmouseleave = mouseLeave6;
p7.onmouseenter = mouseEnter7;
p7.onmouseleave = mouseLeave7;
button.onmouseenter = buttonEnter;
button.onmouseleave = buttonLeave;
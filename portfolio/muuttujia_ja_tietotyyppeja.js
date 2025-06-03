console.log("muuttujia ja tietotyyppejä avattu");
let a = parseFloat(document.getElementById("1").value) || 0;
let b = parseFloat(document.getElementById("2").value) || 0;
function laskin_summa() {
    let a = parseFloat(document.getElementById("1").value) || 0;
let b = parseFloat(document.getElementById("2").value) || 0;
    alert(a + b);
}

function laskin_vahennys() {
    let a = parseFloat(document.getElementById("1").value) || 0;
let b = parseFloat(document.getElementById("2").value) || 0;
    alert(a - b);
}

function laskin_kerto() {
    let a = parseFloat(document.getElementById("1").value) || 0;
let b = parseFloat(document.getElementById("2").value) || 0;
    alert(a * b);
}

function laskin_jako() {
    let a = parseFloat(document.getElementById("1").value) || 0;
let b = parseFloat(document.getElementById("2").value) || 0;
    alert(a / b);
}
function itseisarvo() {
    let a = parseFloat(document.getElementById("1").value) || 0;
    alert(Math.abs(a));
}
function neliöjuuri() {
    let a = parseFloat(document.getElementById("1").value) || 0;
    alert(Math.sqrt(a));
}
function potenssi() {
    let a = parseFloat(document.getElementById("1").value) || 0;
    let b = parseFloat(document.getElementById("2").value) || 0;
    alert(Math.pow(a, b));
}
function suurempi() {
    let a = parseFloat(document.getElementById("1").value) || 0;
    let b = parseFloat(document.getElementById("2").value) || 0;
    if (a > b) {
        alert(a + " on suurempi kuin " + b);
    } else if (a < b) {
        alert(b + " on suurempi kuin " + a);
    }}
function pienempi() {
    let a = parseFloat(document.getElementById("1").value) || 0;
    let b = parseFloat(document.getElementById("2").value) || 0;
    if (a < b) {
        alert(a + " on pienempi kuin " + b);
    } else if (a > b) {
        alert(b + " on pienempi kuin " + a);
    }}
function pyöristä() {
    let a = parseFloat(document.getElementById("1").value) || 0;
    let b = parseFloat(document.getElementById("2").value) || 0;
    alert(Math.round(a * b));
}

function päivämäärä() {
    new Date("27.5.2025");
    new Date("11.26");
    new Date("2025-05-27 11.26");
    new Date("tiistai");
    new Date("toukokuu");
}
function nappula () {
    alert(päivämäärä);}
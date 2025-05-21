console.log("tehtävälista avattu");
const lista = ["tehtävä 1", "tehtävä 2"];

function addToLista() {
    const paivitaLista = document.getElementById('Lisää');
    const teksti = paivitaLista.value;
    lista.push(teksti);
    console.log("Tehtävälista:", lista);
}

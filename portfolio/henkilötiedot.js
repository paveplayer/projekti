console.log("henkilötiedot avattu");
const henkilöt = [
    {
        name: "Merja Meikäläinen",
        age: 20,
        job: "Opiskelija",
        driversLicense: true
    },
    {
        name: "Teppo Teikäläinen",
        age: 25,
        job: "Sähköteknikko",
        driversLicense: true
    },
    {
        name: "Helena Heikäläinen",
        age: 30,
        job: "ohjelmistosuunnittelija",
        driversLicense: false
    },
    {
        name: "Semir Sikäläinen",
        age: 18,
        job: "opiskelija",
        driversLicense: true
    },
    {
        name: "Tomas Täkäläinen",
        age: 22,
        job: "linja-autonkuljettaja",
        driversLicense: true
    }
];
const rivit = document.querySelector('rivit');
function luoRivit() {
    tbody.innerHTML = "";
henkilot.forEach(hlo => {
                const rivi = document.createElement("tr");

                const tdNimi = document.createElement("td");
                tdNimi.innerHTML = hlo.name;

                const tdIka = document.createElement("td");
                tdIka.innerHTML = hlo.age;

                const tdTyo = document.createElement("td");
                tdTyo.innerHTML = hlo.job;

                const tdAjokortti = document.createElement("td");
                tdAjokortti.innerHTML = hlo.driversLicense ? "Kyllä" : "Ei";

                rivi.append(tdNimi, tdIka, tdTyo, tdAjokortti);
                rivit.appendChild(rivi);
            });
        }
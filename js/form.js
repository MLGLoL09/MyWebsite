const fs = document.getElementById('knta');

function toggleModeSub(event) {
    event.preventDefault();
    let form = document.getElementById("meinFormular");
    let name = document.getElementById('name').value;
    let geburtstag = document.getElementById('Geburtstag').value;

    if (name === '' || geburtstag === '') {
        window.alert("Füllen Sie alle felder aus!");
        return;
    }

    let geburtsdatum = new Date(geburtstag);
    let heute = new Date();
    let alter = heute.getFullYear() - geburtsdatum.getFullYear();
    let monatDifferenz = heute.getMonth() - geburtsdatum.getMonth();
    let tagDifferenz = heute.getDate() - geburtsdatum.getDate();

    if (monatDifferenz < 0 || (monatDifferenz === 0 && tagDifferenz < 0)) {
        alter--;
    }

    if(alter < 14) {
        window.alert("Sie müssen mindesten 14 Jahre alt sein!");
        return;
    }

    if (form.checkValidity()) {
        if (fs.hasAttribute('hidden')) {
            fs.removeAttribute('hidden');
            form.setAttribute('hidden', '');
        }
    }

    fs.innerHTML = `
    <legend>Kontaktformular (ausgefüllt)</legend>
    <p>Anrede: ${document.getElementById("anr").value}</p>
    <p>Name: ${document.getElementById("name").value}</p>
    <p>Zweitname: ${document.getElementById("zweitname").value}</p>
    <p>Nachname: ${document.getElementById("nachname").value}</p>
    <p>E-Mail: ${document.getElementById("email").value}</p>
    <p>Telefon: ${document.getElementById("vorwahl").value + document.getElementById("tel").value}</p>
    <p>Geburtstag: ${geburtstag} (Alter: ${alter})</p>
    <p>Betreff: ${document.getElementById("betreff").value}</p>
    <p>Anliegen: ${document.getElementById("anl").value}</p>
`;


    window.alert("Formular erfolgreich abgeschickt!");
}

function toggleModeRst() {
    if (!fs.hasAttribute('hidden')) {
        fs.setAttribute('hidden', '');
    }
}

document.getElementById('meinFormular').addEventListener('submit', toggleModeSub);

/*
Function: inZahlUmwandeln(wert)

Beschreibung der Parameter:
-> wert: Der Parameter wert enthält einen numerischen oder textuellen Wert 

Beschreibung:
Die Funktion versucht den mitgegebenen Wert in einen nummerischen Wert 
umzuwandeln und nutzt hierfür die Funktion Number().
Liefert diese Funktion den Wert NaN zurück wird eine entsprechende 
alert() Meldung ausgegeben "Beim eingegebenen Wert handelt es sich nicht um eine
Zahl oder Ziffer"
*/

function inZahlUmwandeln(wert) {
    var numwert = Number(wert);
    if (isNaN(numwert)) {
        window.alert('Beim eingegebenen Wert handelt es sich nicht um eine Zahl oder Ziffer');
    }
    parseFloat(numwert);
    numwert.toFixed(2);
    return numwert;
}

/*
Function berechne(wert1,wert2,operation)

Beschreibung der Parameter:
wert1 = der erste wert der für die rechnung benötigt wird
wert2 = der zweite wert der für die rechnung benötigt wird
operation = die rechenoperation die benötigt wird für die rechnung

Beschreibung:
überprüft welche operation verwendet werden soll und macht diese dann mit wert 1 & 2.
*/
function berechne(wert_1, wert_2, operation1) {
    let ergebnis;
    switch (operation1) {
        case '+': ergebnis = wert_1 + wert_2; break;
        case '-': ergebnis = wert_1 - wert_2; break;
        case '/':
            if (wert_2 === 0) {
                window.alert('Division durch 0 nicht möglich!');
                return null;
            }
            ergebnis = wert_1 / wert_2; break;
        case '*': ergebnis = wert_1 * wert_2; break;
        case '^': ergebnis = wert_1 ** wert_2; break;
        case 'rt': ergebnis = wert_1 ** (1/wert_2); break;
        default:
            window.alert('Bitte geben Sie ein gueltiges Rechenzeichen ein.');
            return null;
    }return parseFloat(ergebnis.toFixed(2));
}


/*
Function speicherInArray(wert1,wert2,operation, ergebnis)

Beschreibung der Parameter:
wert_1 = der 1. wert
wert_2 = der 2. wert
operation1 = die operation
ergebnis1 = das ergebnis

Beschreibung:
speichert die rechnung in einem array
*/

function speicherInArray(wert_1, wert_2, operation1, ergebnis1) {
    rechnungen.push(`${wert_1} ${operation1} ${wert_2} = ${ergebnis1}`);
}

/*
Function neueRechnungOdUebersicht(neu)

Beschreibung der Parameter:
Übernimmt einen String der sagt ob die ergebnisse angezeigt werden sollen oder ob eine weitere rechnung gerechnet werden soll

Beschreibung:
zeigt entweder das array mit den rechnungen an und bricht dann ab oder du rechnest noch weitere recnungen
*/
function neueRechnungOdUebersicht(neu) {
    neu = neu.trim().toLowerCase();
    if(neu === 'rechnen' || neu === 'r') {
        fortsetzen = true;
    } else if(neu === 'anzeigen' || neu === 'a') {
        fortsetzen = false;
        ausgabe();
        console.log("Eingabe:", neu, rechnungen);
        return null;
    } else {
        console.log("ungueltige eingabe");
        window.alert('Keine gueltige eingabe');
		auswahl = prompt('Wollen Sie noch eine Rechnung machen oder die rechnungen anzeigen lassen? "rechnen" oder "anzeigen"');
        neueRechnungOdUebersicht(auswahl);
    }
}

/*
Function ausgabe()

Beschreibung der Parameter:
keine

Beschreibung:
Macht einen window alert mit dem standard text und dem ergebnis
*/
function ausgabe() {
    window.alert(rechnungen); 
}
/*
Function validOperation()

Beschreibung der Parameter:
oepration1 = übernimmt den oeperator

Beschreibung:
überprüft ob es ein gueltiger rechenoperator ist
*/
function validOperation(operation1) {
    switch(operation1) {
        case '*': return true;
        case '+': return true;
        case '-': return true;
        case '/': return true;
        case '^': return true;
        case 'rt': return true;
        default: return false;
    }
}
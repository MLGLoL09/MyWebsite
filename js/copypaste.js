function copyCardText(button) {
    const cardTextElement = button.closest(".card").querySelector(".card-text");
    if (cardTextElement) {
        const text = cardTextElement.innerText;
        navigator.clipboard.writeText(text)
            .then(() => alert("Text kopiert: " + text))
            .catch(err => alert("Fehler beim Kopieren: " + err));
    }
}

function pasteFromClipboard() {
    navigator.clipboard.readText()
        .then(text => {
            const anlTextarea = document.getElementById('anl');
            anlTextarea.value = text;
        })
        .catch(err => {
            console.error('Fehler beim Einfügen aus der Zwischenablage: ', err);
        });
}


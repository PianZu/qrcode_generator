

document.getElementById("generate-btn").addEventListener("click", () => {
    const text = document.getElementById("text-input").value;
    const qrContainer = document.getElementById("qr-code");

    if (!text) {
        alert("Bitte Text eingeben!");
        return;
    }

    // Bestehenden QR-Code löschen
    qrContainer.innerHTML = "";

    // QR-Code generieren
    const qrCode = new QRCode(qrContainer, {
        text: text,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    // Warte auf die QR-Code-Generierung
    setTimeout(() => {
        const qrImage = qrContainer.querySelector("img").src;

        // Download-Link erstellen
        const downloadLink = document.createElement("a");
        downloadLink.href = qrImage;
        downloadLink.download = "qr-code.png";
        downloadLink.textContent = "QR-Code herunterladen";
        downloadLink.style.display = "block";
        qrContainer.appendChild(downloadLink);
    }, 100);  // Wartezeit für die Generierung
});


const prezzoAlKm = 0.21
let kmTotali = prompt("Quanti chilometri vorrebbe percorrere in treno? (Tariffa di 0,21 €/Km)")

kmTotali = kmTotali.replace(",", ".")

kmTotali = parseFloat(kmTotali)

if (isNaN(kmTotali)) {
    alert("Attenzione: il numero inserito non è corretto")
} else {
    let eta = prompt("Inserire l'età")

    eta = parseInt(eta)

    if (isNaN(eta)) {
        alert("Attenzione: il numero inserito non è corretto")
    } else {
        let prezzoBiglietto = kmTotali * prezzoAlKm

        if (eta < 18) {
            alert("La sua età rientra nella fascia dove le verrà applicato uno sconto pari al 20% al prezzo intero del biglietto.");
            prezzoBiglietto = prezzoBiglietto - ((prezzoBiglietto * 20) / 100)
        } else if (eta >= 65) {
            alert("La sua età rientra nella fascia dove le verrà applicato uno sconto pari al 40% al prezzo intero del biglietto.");
            prezzoBiglietto = prezzoBiglietto - ((prezzoBiglietto * 40) / 100)
        }

        prezzoBiglietto = prezzoBiglietto.toFixed(2)

        alert("Il biglietto ha un costo di: " + prezzoBiglietto + "€.")
    }
}





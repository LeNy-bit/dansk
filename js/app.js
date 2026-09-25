
function quiz(svar) {

    const feedback = document.getElementById("feedback");

    if (svar === "rigtigt") {
        feedback.innerHTML =
            "<p style='color:green;'>✅ Korrekt! Påstand er argumentets hovedsynspunkt.</p>";
    } else {
        feedback.innerHTML =
            "<p style='color:red;'>❌ Ikke helt. Prøv igen.</p>";
    }

}
function flipCard(card) {
    card.classList.toggle("flipped");
}

document.querySelectorAll(".drag-item").forEach(item => {

    item.addEventListener("dragstart", function(e) {
        e.dataTransfer.setData(
            "text",
            e.target.id
        );
    });

});

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {

    ev.preventDefault();

    const data =
        ev.dataTransfer.getData("text");

    const answer =
        ev.target.dataset.answer;

    if (data === answer) {

        ev.target.innerHTML +=
            " ✅ Korrekt";

        ev.target.style.background =
            "#c6f6c6";

    }

    else {

        ev.target.innerHTML +=
            " ❌ Forkert";

        ev.target.style.background =
            "#ffd0d0";
    }
}
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {

    event.preventDefault();

    const cardId =
        event.dataTransfer.getData("text");

    const card =
        document.getElementById(cardId);

    const correctType =
        card.dataset.type;

    const targetType =
        event.currentTarget.dataset.answer;

    if (correctType === targetType) {

        event.currentTarget.appendChild(card);

        card.style.backgroundColor = "#b8f5b8";

        checkCompletion();

    } else {

        card.style.backgroundColor = "#ffb3b3";

        setTimeout(() => {
            card.style.backgroundColor = "";
        }, 1000);

    }

}

function checkCompletion() {

    const cards =
        document.querySelectorAll(".kort");

    let completed = true;

    cards.forEach(card => {

        const parent =
            card.parentElement;

        if (!parent.classList.contains("kategori")) {
            completed = false;
        }

    });

    if (completed) {

        document.getElementById("resultat")
            .innerHTML =
            "<p class='success'>✅ Flot! Alle kort er placeret korrekt.</p>";

    }

}

function tjekSvar(element, korrekt) {

    const feedback =
        document.getElementById("feedback");

    if (korrekt) {

        element.classList.add("korrekt");

        feedback.innerHTML =
            "✅ Korrekt! Det markerede tekststykke fungerer som belæg.";

    } else {

        element.classList.add("forkert");

        feedback.innerHTML =
            "❌ Prøv igen.";

    }

}
function forklar(type) {

    let tekst = "";

    if (type === "påstand") {
        tekst =
        "Påstanden er det synspunkt, afsenderen ønsker at overbevise modtageren om.";
    }

    if (type === "belæg") {
        tekst =
        "Belægget begrunder, hvorfor påstanden bør accepteres.";
    }

    document.getElementById("forklaring")
        .innerHTML = tekst;
}
``
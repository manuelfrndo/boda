document.getElementById("rsvpForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    var url = "https://script.google.com/macros/s/AKfycbwu2sjoRMNQKLhxA0CCf9cAJH7nfwotVt5eUuoO6HWsPySWfJMEVYYGf4HpPAMkFfHf/exec"; // 🔹 Reemplaza con la URL copiada de Google Apps Script

    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, email: email })
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("responseMessage").innerText = "¡Gracias por confirmar!";
        document.getElementById("rsvpForm").reset();
    })
    .catch(error => console.error("Error al enviar:", error));
});

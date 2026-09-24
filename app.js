// =========================
// FECHA ACTUAL
// =========================

const fecha = new Date();

document.getElementById("fecha").textContent =
    fecha.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });

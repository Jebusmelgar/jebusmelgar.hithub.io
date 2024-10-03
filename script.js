// Ejemplo de lugares turísticos
const lugares = [
    { nombre: "Ciudad de Roboré", descripcion: "Un hermoso lugar con flora y fauna nativa." },
    { nombre: "Comunidad Aguas Calientes", descripcion: "Un emblemático lugar de aguas termales naturales." },
    { nombre: "Localidad Santiago de Chiquitos", descripcion: "Un mirador espectacular,capital de arte rupestres." }
    
]
const lugaresList = document.getElementById('lugares-list');

lugares.forEach(lugar => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${lugar.nombre}</h3><p>${lugar.descripcion}</p>`;
    lugaresList.appendChild(div);
});

// Manejo del formulario
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert(`Gracias, ${form.name.value}! Tu mensaje ha sido enviado.`);
    form.reset();
});

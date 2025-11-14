const portfolio = document.querySelector("#porotito");

async function datos(raw) {
    try {
        let consulta = await fetch(raw);
        let trabajos = await consulta.json(); // tu JSON es un array directo

        trabajos.forEach((trabajo) => {

            // Columna Bootstrap
            const col = document.createElement('div');
            col.className = 'col';

            // Plantilla base sin datos del usuario (segura)
            col.innerHTML = `
                <div class="card shadow-sm">
                    <img class="card-img-top">
                    <div class="card-body">
                        <p class="card-text"></p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary"></button>
                            </div>
                            <small class="text-body-secondary"> ☆ ☆ ☆ </small>
                        </div>
                    </div>
                </div>
            `;

            // Inserción SEGURA de datos
            col.querySelector("img").src = trabajo.imagen;
            col.querySelector("img").alt = trabajo.alt || trabajo.titulo;
            col.querySelector(".card-text").textContent = trabajo.titulo;
            col.querySelector("button").textContent = trabajo.categoria;

            portfolio.appendChild(col);
        });

    } catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}

// Llama a tu API real
datos("https://api.myjson.online/v1/records/b0d4073d-220a-4cf2-ae65-7cc3fd54f00e");





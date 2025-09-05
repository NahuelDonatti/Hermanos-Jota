import { productos } from "./productos.js";
let count = 1;

function findProductById() {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));

  const product = productos.find((p) => p.id === id);

  const container = document.querySelector(".detalle-container");

  if (product) {
    container.innerHTML = `
      <img
        class="detalle-img"
        src="${product.img}"
        alt="Imagen de ${product.nombre}"
      />
      <div class="detalle-descripcion">
        <h2>${product.nombre}</h2>
        <p>$${product.precio}</p>
        <p>${product.descripcion}</p>
        <div class="detalle-cantidad">
          <p>Cantidad:</p>
          <div class="detalle-contador">
            <button class="btn-decrement">-</button>
            <p class="count-display">${count}</p>
            <button class="btn-increment">+</button>
          </div>
        </div>
        <button class="detalle-button">Comprar</button>
        
      </div>
      <div class="detalle-caracteristica">
            <h3>Caracteristicas</h3>
            <ul>
                <li>${product.materiales}</li>
                <li>${product.capacidad}</li>
                <li>${product.medidas}</li>
                <li>${product.acabado}</li>
            </ul>
        </div>
    `;

    const decrementBtn = container.querySelector(".btn-decrement");
    const incrementBtn = container.querySelector(".btn-increment");
    const countDisplay = container.querySelector(".count-display");

    decrementBtn.addEventListener("click", () => {
      if (count > 0) count--;
      countDisplay.textContent = count;
    });

    incrementBtn.addEventListener("click", () => {
      count++;
      countDisplay.textContent = count;
    });
  } else {
    container.innerHTML = `<p class="product-not-found">No se encontró un producto con id: ${id}</p>`;
  }
}

findProductById();

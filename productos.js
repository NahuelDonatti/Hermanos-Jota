// catalogo de productos
const productos = [
  {
    nombre: "Aparador Uspallata",
    precio: 1200,
    img: "./assets/aparadorUspallata.png",
  },
  {
    nombre: "Biblioteca Recoleta",
    precio: 1200,
    img: "./assets/bibliotecaRecoleta.png",
  },
  {
    nombre: "Butaca Mendoza",
    precio: 1200,
    img: "./assets/butacaMendoza.png",
  },
  {
    nombre: "Sillón Copacabana",
    precio: 1200,
    img: "./assets/sillonCopacabana.png",
  },
  {
    nombre: "Mesa de Centro Araucaria",
    precio: 1200,
    img: "./assets/mesaDeCentroAraucaria.png",
  },
  {
    nombre: "Mesa de Noche Aconcagua",
    precio: 1200,
    img: "./assets/mesaDeNocheAconcagua.png",
  },
  {
    nombre: "Cama Neuquén",
    precio: 1200,
    img: "./assets/camaNeuquen.png",
  },
  {
    nombre: "Sofá Patagonia",
    precio: 1200,
    img: "./assets/sofaPatagonia.png",
  },
  {
    nombre: "Mesa Comedor Pampa",
    precio: 1200,
    img: "./assets/mesaComedorPampa.png",
  },
  {
    nombre: "Sillas Córdoba",
    precio: 1200,
    img: "./assets/sillasCordoba.png",
  },
  {
    nombre: "Escritorio Costa",
    precio: 1200,
    img: "./assets/escritorioCosta.png",
  },
  {
    nombre: "Silla de Trabajo Belgrano",
    precio: 1200,
    img: "./assets/sillaDeTrabajoBelgrano.png",
  },
];

const listaProductos = document.getElementById("productos-list");
const iconoCarrito = document.getElementById("icono-carrito");
const contadorCarrito = document.getElementById("contador-carrito");
const ventanaCarrito = document.getElementById("ventana-carrito");
const itemsCarrito = document.getElementById("items-carrito");
const totalCarrito = document.getElementById("total-carrito");
const cerrarVentana = document.getElementById("cerrar-ventana");
const carrito = [];

function cargarListaProductos(lista) {
  // const contenedor = document.getElementById("productos-list");
  lista.forEach((producto) => {
    const article = document.createElement("article");
    article.className = "productos-item";
    article.innerHTML = `
           <img src=${producto.img} alt="${producto.nombre}">
           <div class="productos-descripcion">
             <h3>${producto.nombre}</h3>
             <p>$${producto.precio}</p>
             <button>Comprar</button>
            </div>
            `;
    const btn = article.querySelector("button");
    btn.addEventListener("click", () => agregarAlCarrito(producto));
    // contenedor.appendChild(article);
    listaProductos.appendChild(article);
  });
}

cargarListaProductos(productos);

function agregarAlCarrito(producto) {
  const existe = carrito.find((item) => item.nombre === producto.nombre);

  if (existe) {
    existe.cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  actualizarContador();
  actualizarVentana();
}

function actualizarContador() {
  const totalUnidades = carrito.reduce((sum, item) => sum + item.cantidad, 0);
  contadorCarrito.textContent = totalUnidades;
  if (totalUnidades > 0) {
    contadorCarrito.classList.add("visible");
  } else {
    contadorCarrito.classList.remove("visible");
  }
}

function actualizarVentana() {
  itemsCarrito.innerHTML = "";
  let total = 0;

  carrito.forEach((item, indice) => {
    total += item.precio * item.cantidad;

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("carrito-item");

    itemDiv.innerHTML = `
      <img src="${item.img}" alt="${item.nombre}">
      <div class="carrito-info">
        <strong>${item.nombre}</strong><br>
        <small>Unitario: $${item.precio}</small><br>
        <strong>$${item.precio * item.cantidad}</strong>
        <div class="cantidad-control">
          <button ${item.cantidad === 1 ? "disabled" : ""}>-</button>
          <span>${item.cantidad}</span>
          <button>+</button>
        </div>
      </div>
      <button class="btn-eliminar">Eliminar</button>
    `;

    const btnMenos = itemDiv.querySelector(".cantidad-control button:first-child");
    const btnMas = itemDiv.querySelector(".cantidad-control button:last-child");

    btnMenos.addEventListener("click", () => cambiarCantidad(indice, -1));
    btnMas.addEventListener("click", () => cambiarCantidad(indice, 1));

    const btnEliminar = itemDiv.querySelector(".btn-eliminar");
    btnEliminar.addEventListener("click", () => eliminarProducto(indice));

    itemsCarrito.appendChild(itemDiv);
  });

  totalCarrito.textContent = `$${total}`;
}

function cambiarCantidad(indice, count) {
  carrito[indice].cantidad += count;
  if (carrito[indice].cantidad < 1) {
    carrito[indice].cantidad = 1;
  }
  actualizarContador();
  actualizarVentana();
}

function eliminarProducto(indice) {
  carrito.splice(indice, 1);
  actualizarContador();
  actualizarVentana();
}

// Abrir/Cerrar ventana
iconoCarrito.addEventListener("click", () => {
  ventanaCarrito.classList.add("open");
});

cerrarVentana.addEventListener("click", () => {
  ventanaCarrito.classList.remove("open");
});
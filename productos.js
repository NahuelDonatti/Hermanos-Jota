const productos = [
  {
    id: 1,
    nombre: "Aparador Uspallata",
    descripcion:
      "Aparador de seis puertas fabricado en nogal sostenible con tiradores metálicos en acabado latón. Su silueta minimalista realza el veteado natural de la madera, creando una pieza que combina funcionalidad y elegancia atemporal para espacios contemporáneos.",
    medidas: "180 × 45 × 75 cm",
    materiales: "Nogal macizo FSC®, herrajes de latón",
    acabado: "Aceite natural ecológico",
    peso: "68kg",
    capacidad: "6 compartimientos interiores",
    precio: 1200,
    img: "./assets/aparadorUspallata.png",
    categoria: "sala",
  },
  {
    id: 2,
    nombre: "Biblioteca Recoleta",
    descripcion:
      "Sistema modular de estantes abierto que combina estructura de acero Sage Green y repisas en roble claro. Perfecta para colecciones y objetos de diseño, su diseño versátil se adapta a cualquier espacio contemporáneo con elegancia funcional.",
    medidas: "100 × 35 × 200 cm",
    materiales: "Estructura de acero, estantes de roble",
    acabado: "Laca mate ecológica",
    capacidad: "45 kg por estante",
    modulares: "5 estantes ajustables",
    precio: 1500,
    img: "./assets/bibliotecaRecoleta.png",
    categoria: "sala",
  },
  {
    id: 3,
    nombre: "Butaca Mendoza",
    descripcion:
      "Butaca tapizada en bouclé Dusty Rose con base de madera de guatambú. El respaldo curvo abraza el cuerpo y ofrece máximo confort, mientras que su diseño orgánico aporta calidez y sofisticación a cualquier ambiente contemporáneo.",
    medidas: "80 × 75 × 85 cm",
    materiales: "Guatambú macizo, tela bouclé",
    acabado: "Cera vegetal, tapizado premium",
    tapizado: "Repelente al agua y manchas",
    confort: "Espuma alta densidad",
    precio: 1000,
    img: "./assets/butacaMendoza.png",
    categoria: "sala",
  },
  {
    id: 4,
    nombre: "Sillón Copacabana",
    descripcion:
      "Sillón lounge en cuero cognac con base giratoria en acero Burnt Sienna. Inspirado en la estética brasilera moderna de los 60, combina comodidad excepcional con un diseño icónico que trasciende tendencias y épocas.",
    medidas: "90 × 85 × 95 cm",
    materiales: "Cuero curtido vegetal, acero pintado",
    acabado: "Cuero anilina premium",
    rotación: "360° silenciosa y suave",
    garantía: "10 años en estructura",
    precio: 1600,
    img: "./assets/sillonCopacabana.png",
    categoria: "sala",
  },
  {
    id: 5,
    nombre: "Mesa de Centro Araucaria",
    descripcion:
      "Mesa de centro con sobre circular de mármol Patagonia y base de tres patas en madera de nogal. Su diseño minimalista se convierte en el punto focal perfecto para cualquier sala de estar contemporánea, combinando la frialdad del mármol con la calidez de la madera.",
    medidas: "90 × 90 × 45 cm",
    materiales: "Sobre de mármol Patagonia, patas de nogal",
    acabado: "Mármol pulido, aceite natural en madera",
    peso: "42 kg",
    cargaMáxima: "25 kg distribuidos",
    precio: 400,
    img: "./assets/mesaDeCentroAraucaria.png",
    categoria: "sala",
  },
  {
    id: 6,
    nombre: "Mesa de Noche Aconcagua",
    descripcion:
      "Mesa de noche con cajón oculto y repisa inferior en roble certificado FSC®. Su diseño limpio y funcional permite convivir con diferentes estilos de dormitorio, ofreciendo almacenamiento discreto y elegante para objetos personales.",
    medidas: "45 × 35 × 60 cm",
    materiales: "Roble macizo FSC®, herrajes soft-close",
    acabado: "Barniz mate de poliuretano",
    almacenamiento: "1 cajón + repisa inferior",
    características: "Cajón con cierre suave",
    precio: 600,
    img: "./assets/mesaDeNocheAconcagua.png",
    categoria: "dormitorio",
  },
  {
    id: 7,
    nombre: "Cama Neuquén",
    descripcion:
      "Cama plataforma con cabecero flotante tapizado en lino natural y estructura de madera maciza. Su diseño minimalista y sofisticado crea un ambiente de serenidad y elegancia, perfecto para dormitorios contemporáneos que buscan paz y simplicidad.",
    medidas: "160 × 200 × 90 cm",
    materiales: "Roble macizo FSC®, tapizado lino",
    acabado: "Aceite natural, tapizado premium",
    colchón: "Compatible con colchón 160×200",
    características: "Cabecero flotante acolchado",
    precio: 2000,
    img: "./assets/camaNeuquen.png",
    categoria: "dormitorio",
  },
  {
    id: 8,
    nombre: "Sofá Patagonia",
    descripcion:
      "Sofá de tres cuerpos tapizado en lino Warm Alabaster con patas cónicas de madera. Los cojines combinan espuma de alta resiliencia con plumón reciclado, ofreciendo comodidad duradera y sostenible para el hogar moderno.",
    medidas: "220 × 90 × 80 cm",
    estructura: "Madera de eucalipto certificada FSC®",
    tapizado: "Lino 100% natural premium",
    relleno: "Espuma HR + plumón reciclado",
    sostenibilidad: "Materiales 100% reciclables",
    precio: 1800,
    img: "./assets/sofaPatagonia.png",
    categoria: "sala",
  },
  {
    id: 9,
    nombre: "Mesa Comedor Pampa",
    descripcion:
      "Mesa extensible de roble macizo con tablero biselado y sistema de apertura suave. Su diseño robusto y elegante se adapta perfectamente a reuniones íntimas o grandes celebraciones familiares, extendiéndose de 6 a 10 comensales.",
    medidas: "160-240 × 90 × 75 cm",
    materiales: "Roble macizo FSC®, mecanismo alemán",
    acabado: "Aceite-cera natural",
    capacidad: "6-10 comensales",
    extensión: "Sistema de mariposa central",
    precio: 900,
    img: "./assets/mesaComedorPampa.png",
    categoria: "comedor",
  },
  {
    id: 10,
    nombre: "Sillas Córdoba",
    descripcion:
      "Set de cuatro sillas apilables en contrachapado moldeado de nogal y estructura tubular pintada en Sage Green. Su diseño ergonómico y materiales de calidad garantizan comodidad y durabilidad en el uso diario, perfectas para comedores contemporáneos.",
    medidas: "45 × 52 × 80 cm (cada una)",
    materiales: "Contrachapado nogal, tubo de acero",
    acabado: "Laca mate, pintura epoxi",
    apilables: "Hasta 6 sillas",
    incluye: "Set de 4 sillas",
    precio: 300,
    img: "./assets/sillasCordoba.png",
    categoria: "comedor",
  },
  {
    id: 11,
    nombre: "Escritorio Costa",
    descripcion:
      "Escritorio compacto con cajón organizado y tapa pasacables integrada en bambú laminado. Ideal para espacios de trabajo en casa, combina funcionalidad moderna con estética minimalista y sostenible, perfecto para el trabajo remoto.",
    medidas: "120 × 60 × 75 cm",
    materiales: "Bambú laminado, herrajes ocultos",
    acabado: "Laca mate resistente",
    almacenamiento: "1 cajón con organizador",
    cables: "Pasacables integrado",
    precio: 1100,
    img: "./assets/escritorioCosta.png",
    categoria: "oficina",
  },
  {
    id: 12,
    nombre: "Silla de Trabajo Belgrano",
    descripcion:
      "Silla ergonómica regulable en altura con respaldo de malla transpirable y asiento tapizado en tejido reciclado. Diseñada para largas jornadas de trabajo con máximo confort y apoyo lumbar, ideal para oficinas en casa y espacios de coworking.",
    medidas: "60 × 60 × 90-100 cm",
    materiales: "Malla técnica, tejido reciclado",
    acabado: "Base cromada, tapizado premium",
    regulación: "Altura + inclinación respaldo",
    certificación: "Ergonomía europea EN 1335",
    precio: 700,
    img: "./assets/sillaDeTrabajoBelgrano.png",
    categoria: "oficina",
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


function obtenerProductos() {
  return new Promise((res) => {
    setTimeout(() => {
      res(productos);
    }, 500);
  });
}

obtenerProductos();

function cargarListaProductos(lista) {
  const contenedor = document.getElementById("productos-list");
  const p = document.querySelector(".cantidad-productos");

  if (!contenedor) return;
  p.textContent = `Mostrando ${lista.length} productos`;
  //vaciar el contenido del contenedor para evitar renderizaciones innecesarias
  contenedor.innerHTML = "";

  //mensaje para cuando la lista de productos este vacia
  if (lista.length === 0) {
    const elementoVacio = document.createElement("div");
    elementoVacio.className = "sin-contenido";
    elementoVacio.style.margin = "0 auto";
    elementoVacio.innerHTML = `
     <p>No se encontraron productos</p>`;
    contenedor.appendChild(elementoVacio);
  }

  //renderizar la lista de productos
  lista.forEach((producto) => {
    const article = document.createElement("article");
    article.className = "productos-item";
    article.innerHTML = `
           <img src=${producto.img} alt="${producto.nombre}">
           <div class="productos-descripcion">
             <h3>${producto.nombre}</h3>
             <p>$${producto.precio}</p>
             <button class="ver-btn" data-id=${producto.id}>Comprar</button>
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
let filtroByCategoria = "todos";
let filtroByPrecio = "todos";

function agregarFiltros(selector, variable, callback) {
  const listaDeFiltros = document.getElementById(selector);
  if (!listaDeFiltros) return;

  const itemsDeFiltro = listaDeFiltros.querySelectorAll("li");
  itemsDeFiltro.forEach((item) => {
    item.addEventListener("click", () => {
      //eliminar clases css de todos los items de la lista de filtros
      itemsDeFiltro.forEach((el) => el.classList.remove("active-filtro"));
      //darle estilo al filtro seleccionado
      item.classList.add("active-filtro");
      //setear los filtros
      if (variable === "filtroByCategoria") {
        filtroByCategoria = item.dataset.value;
      }
      if (variable === "filtroByPrecio") {
        filtroByPrecio = item.dataset.value;
      }
      //llama a la funcion listarLosProductosFiltrados()
      callback();
    });
  });
}

agregarFiltros(
  "categoria-filtro",
  "filtroByCategoria",
  listarLosProductosFiltrados
);
agregarFiltros("precio-filtro", "filtroByPrecio", listarLosProductosFiltrados);

async function listarLosProductosFiltrados() {
  const contenedor = document.getElementById("productos-list");

  //renderizar mensaje mientras carga la lista
  if (contenedor) {
    contenedor.innerHTML = `<div style="margin:0 auto">Cargando lista...<div>`;
  }

  const productosCargados = await obtenerProductos();

  let listaDeProductosFiltrada = productosCargados.filter((p) => {
    // filtrar por categoria
    const categoria =
      filtroByCategoria === "todos" || p.categoria === filtroByCategoria;

    // filtrar por precio
    const numero = p.precio;
    let precio = true;

    switch (filtroByPrecio) {
      case "bajo":
        precio = numero > 0 && numero <= 500;
        break;
      case "medio-bajo":
        precio = numero > 500 && numero <= 1000;
        break;
      case "medio-alto":
        precio = numero > 1000 && numero <= 1500;
        break;
      case "alto":
        precio = numero > 1500 && numero <= 2000;
        break;
      case "todos":
      default:
        precio = true;
    }

    return categoria && precio;
  });

  cargarListaProductos(listaDeProductosFiltrada);
}

listarLosProductosFiltrados();

const productList = document.getElementById("productos-list");

if (productList) {
  document.getElementById("productos-list").addEventListener("click", (e) => {
    if (e.target.classList.contains("ver-btn")) {
      const id = e.target.dataset.id;
      // pasando como parametro de la Url el id
      const params = new URLSearchParams({ id });
      // redirreción a la página producto.html
      window.location.href = "producto.html?" + params;
    }
  });
}

/* Renderizado por id en detalle producto */
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
      if (count > 1) count--;
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

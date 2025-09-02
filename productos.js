const productos = [
  {
    id: 1,
    nombre: "Aparador Uspallata",
    precio: 1200,
    img: "./assets/aparadorUspallata.png",
    categoria: "sala",
  },
  {
    id: 2,
    nombre: "Biblioteca Recoleta",
    precio: 1500,
    img: "./assets/bibliotecaRecoleta.png",
    categoria: "sala",
  },
  {
    id: 3,
    nombre: "Butaca Mendoza",
    precio: 1000,
    img: "./assets/butacaMendoza.png",
    categoria: "sala",
  },
  {
    id: 4,
    nombre: "Sillón Copacabana",
    precio: 1600,
    img: "./assets/sillonCopacabana.png",
    categoria: "sala",
  },
  {
    id: 5,
    nombre: "Mesa de Centro Araucaria",
    precio: 400,
    img: "./assets/mesaDeCentroAraucaria.png",
    categoria: "sala",
  },
  {
    id: 6,
    nombre: "Mesa de Noche Aconcagua",
    precio: 600,
    img: "./assets/mesaDeNocheAconcagua.png",
    categoria: "dormitorio",
  },
  {
    id: 7,
    nombre: "Cama Neuquén",
    precio: 2000,
    img: "./assets/camaNeuquen.png",
    categoria: "dormitorio",
  },
  {
    id: 8,
    nombre: "Sofá Patagonia",
    precio: 1800,
    img: "./assets/sofaPatagonia.png",
    categoria: "sala",
  },
  {
    id: 9,
    nombre: "Mesa Comedor Pampa",
    precio: 900,
    img: "./assets/mesaComedorPampa.png",
    categoria: "comedor",
  },
  {
    id: 10,
    nombre: "Sillas Córdoba",
    precio: 300,
    img: "./assets/sillasCordoba.png",
    categoria: "comedor",
  },
  {
    id: 11,
    nombre: "Escritorio Costa",
    precio: 1100,
    img: "./assets/escritorioCosta.png",
    categoria: "oficina",
  },
  {
    id: 12,
    nombre: "Silla de Trabajo Belgrano",
    precio: 700,
    img: "./assets/sillaDeTrabajoBelgrano.png",
    categoria: "oficina",
  },
];

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
    contenedor.appendChild(article);
  });
}

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

function listarLosProductosFiltrados() {
  let listaDeProductosFiltrada = productos.filter((p) => {
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

document.querySelectorAll(".ver-btn").forEach((boton) => {
  boton.addEventListener("click", () => {
    const id = boton.dataset.id;
    // pasando como parametro de la Url el id
    const params = new URLSearchParams({ id });
    // redirreción a la página producto.html
    window.location.href = "producto.html?" + params;
  });
});

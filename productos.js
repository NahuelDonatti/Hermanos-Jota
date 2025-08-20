// catalogo de productos
const productos = [
  {
    nombre: "Aparador Uspallata",
    precio: "1200",
    img: "./assets/aparadorUspallata.png",
  },
  {
    nombre: "Biblioteca Recoleta",
    precio: "1200",
    img: "./assets/bibliotecaRecoleta.png",
  },
  {
    nombre: "Butaca Mendoza",
    precio: "1200",
    img: "./assets/butacaMendoza.png",
  },
  {
    nombre: "Sillón Copacabana",
    precio: "1200",
    img: "./assets/sillonCopacabana.png",
  },
  {
    nombre: "Mesa de Centro Araucaria",
    precio: "1200",
    img: "./assets/mesaDeCentroAraucaria.png",
  },
  {
    nombre: "Mesa de Noche Aconcagua",
    precio: "1200",
    img: "./assets/mesaDeNocheAconcagua.png",
  },
  {
    nombre: "Cama Neuquén",
    precio: "1200",
    img: "./assets/camaNeuquen.png",
  },
  {
    nombre: "Sofá Patagonia",
    precio: "1200",
    img: "./assets/sofaPatagonia.png",
  },
  {
    nombre: "Mesa Comedor Pampa",
    precio: "1200",
    img: "./assets/mesaComedorPampa.png",
  },
  {
    nombre: "Sillas Córdoba",
    precio: "1200",
    img: "./assets/sillasCordoba.png",
  },
  {
    nombre: "Escritorio Costa",
    precio: "1200",
    img: "./assets/escritorioCosta.png",
  },
  {
    nombre: "Silla de Trabajo Belgrano",
    precio: "1200",
    img: "./assets/sillaDeTrabajoBelgrano.png",
  },
];

function cargarListaProductos(lista) {
  const contenedor = document.getElementById("productos-list");
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
    contenedor.appendChild(article);
  });
}

cargarListaProductos(productos);

// PRODUCTOS
const productos = [
  // LINEA-MEDICA
  {
    id: "uniforme-dama-01",
    titulo: "Uniforme dama 01",
    imagen: "./imagenes/linea.medica.dama.2.jpg",
    categoria: {
      nombre: "Linea Medica",
      id: "linea-medica",
    },
    precio: 900,
  },
  {
    id: "uniforme-dama-02",
    titulo: "Uniforme dama 02",
    imagen: "./imagenes/linea.medica.dama.3.jpg",
    categoria: {
      nombre: "Linea Medica",
      id: "linea-medica",
    },
    precio: 900,
  },
  {
    id: "uniforme-dama-03",
    titulo: "Uniforme dama 03",
    imagen: "./imagenes/linea.medica.dama.4.jpg",
    categoria: {
      nombre: "Linea Medica",
      id: "linea-medica",
    },
    precio: 900,
  },
  {
    id: "uniforme-dama-04",
    titulo: "Uniforme dama 04",
    imagen: "./imagenes/linea.medica.dama.5.webp",
    categoria: {
      nombre: "Linea Medica",
      id: "linea-medica",
    },
    precio: 900,
  },
  {
    id: "uniforme-dama-05",
    titulo: "Uniforme dama 05",
    imagen: "./imagenes/linea.medica.dama.6.webp",
    categoria: {
      nombre: "Linea Medica",
      id: "linea-medica",
    },
    precio: 900,
  },
  {
    id: "uniforme-dama-06",
    titulo: "Uniforme dama 06",
    imagen: "./imagenes/linea.medica.dama.7.webp",
    categoria: {
      nombre: "Linea Medica",
      id: "linea-medica",
    },
    precio: 900,
  },
  {
    id: "uniforme-dama-07",
    titulo: "Uniforme dama 07",
    imagen: "./imagenes/linea.medica.dama.8.webp",
    categoria: {
      nombre: "Linea Medica",
      id: "linea-medica",
    },
    precio: 900,
  },
  {
    id: "uniforme-dama-08",
    titulo: "Uniforme dama 08",
    imagen: "./imagenes/linea.medica.dama.10.jpg",
    categoria: {
      nombre: "Linea Medica",
      id: "linea-medica",
    },
    precio: 900,
  },
  // LINEA-RESTAURANTES
  {
    id: "uniformes-restaurante-01",
    titulo: "Uniformes restaurante 01",
    imagen: "./imagenes/linea.restaurante.2.jpg",
    categoria: {
      nombre: "Linea Restaurante",
      id: "linea-restaurante",
    },
    precio: 1200,
  },
  {
    id: "uniformes-restaurante-02",
    titulo: "Uniformes restaurante 02",
    imagen: "./imagenes/linea.restaurante.5.jpg",
    categoria: {
      nombre: "Linea Restaurante",
      id: "linea-restaurante",
    },
    precio: 1200,
  },
  {
    id: "uniformes-restaurante-03",
    titulo: "Uniformes restaurante 03",
    imagen: "./imagenes/linea.restaurante.6.jpg",
    categoria: {
      nombre: "Linea Restaurante",
      id: "linea-restaurante",
    },
    precio: 1200,
  },
  {
    id: "uniformes-restaurante-04",
    titulo: "Uniformes restaurante 04",
    imagen: "./imagenes/linea.restaurante.7.jpg",
    categoria: {
      nombre: "Linea Restaurante",
      id: "linea-restaurante",
    },
    precio: 1200,
  },
  {
    id: "uniformes-restaurante-05",
    titulo: "Uniformes restaurante 05",
    imagen: "./imagenes/linea.restaurante.8.jpg",
    categoria: {
      nombre: "Linea Restaurante",
      id: "linea-restaurante",
    },
    precio: 1200,
  },
  {
    id: "uniformes-restaurante-06",
    titulo: "Uniformes restaurante 06",
    imagen: "./imagenes/linea.restaurante.9.jpg",
    categoria: {
      nombre: "Linea Restaurante",
      id: "linea-restaurante",
    },
    precio: 1200,
  },
  {
    id: "uniformes-restaurante-07",
    titulo: "Uniforme restaurante 07",
    imagen: "./imagenes/linea.restaurante.10.jpg",
    categoria: {
      nombre: "Linea Restaurante",
      id: "linea-restaurante",
    },
    precio: 1200,
  },
  {
    id: "uniformes-restaurante-08",
    titulo: "Uniformes restaurante 08",
    imagen: "./imagenes/linea.restaurante.12.jpg",
    categoria: {
      nombre: "Linea Restaurante",
      id: "linea-restaurante",
    },
    precio: 1200,
  },
  // LINEA SPA
  {
    id: "uniforme-spa-dama-01",
    titulo: "Uniforme Spa dama 01",
    imagen: "./imagenes/linea.spa.dama.01.jpg",
    categoria: {
      nombre: "Linea Spa",
      id: "linea-spa",
    },
    precio: 2000,
  },
  {
    id: "uniforme-spa-dama-02",
    titulo: "Uniforme Spa dama 02",
    imagen: "./imagenes/linea.spa.dama.02.jpg",
    categoria: {
      nombre: "Linea Spa",
      id: "linea-spa",
    },
    precio: 1500,
  },
  {
    id: "uniforme-spa-dama-03",
    titulo: "Uniforme Spa dama 03",
    imagen: "./imagenes/linea.spa.dama.04.jpg",
    categoria: {
      nombre: "Linea Spa",
      id: "linea-spa",
    },
    precio: 1800,
  },
  {
    id: "uniforme-spa-dama-04",
    titulo: "Uniforme Spa dama 04",
    imagen: "./imagenes/linea.spa.dama.05.jpg",
    categoria: {
      nombre: "Linea Spa",
      id: "linea-spa",
    },
    precio: 1800,
  },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategoria = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {
  contenedorProductos.innerHTML = "";

  productosElegidos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
        <img
        class="producto-imagen"
        src="${producto.imagen}"
        alt="${producto.titulo}"/>
        <div class="producto-detalles">
        <h3 class="producto-titulo">${producto.titulo}</h3>
        <p class="producto-precio">${producto.precio}</p>
        <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>`;
    contenedorProductos.append(div);
  });

  actualizarBotonesAgragar();
}

cargarProductos(productos);

botonesCategoria.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    botonesCategoria.forEach((boton) => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");

    if (e.currentTarget.id !== "todos") {
      const pruebaNueva = productos.find(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      tituloPrincipal.innerText = pruebaNueva.categoria.nombre;

      const productoBoton = productos.filter(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      cargarProductos(productoBoton);
    } else {
      tituloPrincipal.innerText = "Todos los productos";
      cargarProductos(productos);
    }
  });
});

function actualizarBotonesAgragar() {
  botonAgregar = document.querySelectorAll(".producto-agregar");

  botonAgregar.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}
let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumerito();
} else {
  productosEnCarrito = [];
}

function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(
    (producto) => producto.id === idBoton
  );

  if (productosEnCarrito.some((producto) => producto.id === idBoton)) {
    const index = productosEnCarrito.findIndex(
      (producto) => producto.id === idBoton
    );
    productosEnCarrito[index].cantidad++;
  } else {
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
  }
  actualizarNumerito();
  console.log(productosEnCarrito);
}
function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce(
    (acc, producto) => acc + producto.cantidad,
    0
  );

  localStorage.setItem(
    "productos-en-carrito",
    JSON.stringify(productosEnCarrito)
  );
  numerito.innerText = nuevoNumerito;
}

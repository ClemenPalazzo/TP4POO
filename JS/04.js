class Producto {
    constructor(codigo, nombre, precio) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.precio = precio;
    }
  
 
    imprimeDatos() {
      return `
        <div class="product">
          <h3>${this.nombre}</h3>
          <p><strong>Código:</strong> ${this.codigo}</p>
          <p><strong>Precio:</strong> ${this.precio.toFixed(2)}€</p>
        </div>
      `;
    }
  }
  
  const productos = [];
  

  function crearProducto() {
    const codigo = parseInt(document.getElementById('codigo').value);
    const nombre = document.getElementById('nombre').value;
    const precio = parseFloat(document.getElementById('precio').value);
  
    if (isNaN(codigo) || nombre === "" || isNaN(precio)) {
      alert('Por favor, introduce valores válidos para código, nombre y precio.');
      return;
    }
  
    const producto = new Producto(codigo, nombre, precio);
    productos.push(producto);
    mostrarProductos();
  }

  function mostrarProductos() {
    const productosContainer = document.getElementById('productos-container');
    productosContainer.innerHTML = productos.map(producto => producto.imprimeDatos()).join('');
  }
  
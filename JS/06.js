class Libro {
  constructor(ISBN, titulo, autor, numeroPaginas) {
    this.ISBN = ISBN;
    this.titulo = titulo;
    this.autor = autor;
    this.numeroPaginas = numeroPaginas;
  }

  getISBN() {
    return this.ISBN;
  }

  getTitulo() {
    return this.titulo;
  }

  getAutor() {
    return this.autor;
  }

  getNumeroPaginas() {
    return this.numeroPaginas;
  }

  setISBN(ISBN) {
    this.ISBN = ISBN;
  }

  setTitulo(titulo) {
    this.titulo = titulo;
  }

  setAutor(autor) {
    this.autor = autor;
  }

  setNumeroPaginas(numeroPaginas) {
    this.numeroPaginas = numeroPaginas;
  }

  mostrarLibro() {
    return `El libro "${this.titulo}" con ISBN ${this.ISBN}, creado por el autor ${this.autor}, tiene ${this.numeroPaginas} páginas.`;
  }
}

const libro1 = new Libro(
  "978-3-16-148410-0",
  "El Quijote",
  "Miguel de Cervantes",
  863
);
const libro2 = new Libro(
  "978-0-14-143960-0",
  "Orgullo y Prejuicio",
  "Jane Austen",
  432
);

function mostrarLibros() {
  const libroContainer = document.getElementById("libro-container");
  libroContainer.innerHTML = `
      <div class="libro">
        <h3>Libro 1</h3>
        <p>${libro1.mostrarLibro()}</p>
      </div>
      <div class="libro">
        <h3>Libro 2</h3>
        <p>${libro2.mostrarLibro()}</p>
      </div>
      <div class="libro">
        <h3>Comparación</h3>
        <p>${compararPaginas(libro1, libro2)}</p>
      </div>
    `;
}

function compararPaginas(libro1, libro2) {
  if (libro1.getNumeroPaginas() > libro2.getNumeroPaginas()) {
    return `El libro "${libro1.getTitulo()}" tiene más páginas (${libro1.getNumeroPaginas()}) que el libro "${libro2.getTitulo()}" (${libro2.getNumeroPaginas()}).`;
  } else if (libro1.getNumeroPaginas() < libro2.getNumeroPaginas()) {
    return `El libro "${libro2.getTitulo()}" tiene más páginas (${libro2.getNumeroPaginas()}) que el libro "${libro1.getTitulo()}" (${libro1.getNumeroPaginas()}).`;
  } else {
    return `Ambos libros tienen el mismo número de páginas (${libro1.getNumeroPaginas()}).`;
  }
}

mostrarLibros();

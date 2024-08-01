class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  
    setAlto(nuevoAlto) {
      this.alto = nuevoAlto;
    }
  
    setAncho(nuevoAncho) {
      this.ancho = nuevoAncho;
    }
  
    getAlto() {
      return this.alto;
    }
  
    getAncho() {
      return this.ancho;
    }
  
    calcularPerimetro() {
      return 2 * (this.alto + this.ancho);
    }
  

    calcularArea() {
      return this.alto * this.ancho;
    }
  

    mostrarInformacion() {
      return `Rectángulo de alto: ${this.alto}, ancho: ${this.ancho}, perímetro: ${this.calcularPerimetro()}, área: ${this.calcularArea()}`;
    }
  }
  
  let rectangulo;
  

  function crearRectangulo() {
    const alto = parseFloat(document.getElementById('alto').value);
    const ancho = parseFloat(document.getElementById('ancho').value);
    if (isNaN(alto) || isNaN(ancho)) {
      alert('Por favor, introduce valores válidos para alto y ancho.');
      return;
    }
    rectangulo = new Rectangulo(alto, ancho);
    mostrarInformacion();
  }
  

  function modificarRectangulo() {
    if (!rectangulo) {
      alert('Primero crea un rectángulo.');
      return;
    }
    const nuevoAlto = parseFloat(document.getElementById('alto').value);
    const nuevoAncho = parseFloat(document.getElementById('ancho').value);
    if (isNaN(nuevoAlto) || isNaN(nuevoAncho)) {
      alert('Por favor, introduce valores válidos para alto y ancho.');
      return;
    }
    rectangulo.setAlto(nuevoAlto);
    rectangulo.setAncho(nuevoAncho);
    mostrarInformacion();
  }
  

  function mostrarInformacion() {
    if (!rectangulo) {
      alert('Primero crea un rectángulo.');
      return;
    }
    const estadoRectangulo = document.getElementById('estado-rectangulo');
    estadoRectangulo.textContent = rectangulo.mostrarInformacion();
  }
  
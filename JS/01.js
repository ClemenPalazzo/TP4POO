class Auto {
    constructor(color, marca, modelo) {
      this._color = color;
      this._marca = marca;
      this._modelo = modelo;
      this._encendido = false;
    }
  
    get color() {
      return this._color;
    }
  
    get marca() {
      return this._marca;
    }
  
    get modelo() {
      return this._modelo;
    }
  
    get encendido() {
      return this._encendido;
    }
  

    set color(nuevoColor) {
      this._color = nuevoColor;
    }
  
    set marca(nuevaMarca) {
      this._marca = nuevaMarca;
    }
  
    set modelo(nuevoModelo) {
      this._modelo = nuevoModelo;
    }
  

    encender() {
      if (!this._encendido) {
        this._encendido = true;
        this.actualizarEstado();
        console.log('El auto está encendido');
      } else {
        console.log('El auto ya está encendido');
      }
    }
  
    apagar() {
      if (this._encendido) {
        this._encendido = false;
        this.actualizarEstado();
        console.log('El auto se apagó');
      } else {
        console.log('El auto ya está apagado');
      }
    }
  
    actualizarEstado() {
      const estadoAuto = document.getElementById('estado-auto');
      estadoAuto.innerHTML = `
        <p>Color: ${this.color}</p>
        <p>Marca: ${this.marca}</p>
        <p>Modelo: ${this.modelo}</p>
        <p>Encendido: ${this.encendido ? 'Sí' : 'No'}</p>
      `;
    }
  }
  

  const miAuto = new Auto('rojo', 'Toyota', 'Corolla');
  miAuto.actualizarEstado(); 
  function mostrarEstado() {
    miAuto.actualizarEstado();
  }
  
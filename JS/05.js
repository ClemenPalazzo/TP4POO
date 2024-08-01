class Persona {
    constructor(nombre, edad, peso, altura, sexo, anioNacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.DNI = this.generaDNI();
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.anioNacimiento = anioNacimiento;
    }
  
    // Método para mostrar la generación
    mostrarGeneracion() {
      let generacion = '';
      let rasgo = '';
      if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
        generacion = 'Generación Z';
        rasgo = 'Irreverencia';
      } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
        generacion = 'Generación Y (millennials)';
        rasgo = 'Frustración';
      } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
        generacion = 'Generación X';
        rasgo = 'Obsesión por el éxito';
      } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
        generacion = 'Baby Boom';
        rasgo = 'Ambición';
      } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
        generacion = 'Silent Generation (Los niños de la posguerra)';
        rasgo = 'Austeridad';
      }
      return `Generación: ${generacion}, Rasgo característico: ${rasgo}`;
    }
  

    esMayorDeEdad() {
      return this.edad >= 18 ? 'La persona es mayor de edad.' : 'La persona no es mayor de edad.';
    }
  
    
    mostrarDatos() {
      return `
        <div class="persona">
          <h3>${this.nombre}</h3>
          <p><strong>Edad:</strong> ${this.edad}</p>
          <p><strong>DNI:</strong> ${this.DNI}</p>
          <p><strong>Sexo:</strong> ${this.sexo}</p>
          <p><strong>Peso:</strong> ${this.peso} kg</p>
          <p><strong>Altura:</strong> ${this.altura} cm</p>
          <p><strong>Año de Nacimiento:</strong> ${this.anioNacimiento}</p>
          <p><strong>Generación:</strong> ${this.mostrarGeneracion()}</p>
          <p><strong>Mayor de Edad:</strong> ${this.esMayorDeEdad()}</p>
        </div>
      `;
    }

    generaDNI() {
      return Math.floor(10000000 + Math.random() * 90000000);
    }
  }
  
  function crearPersona() {
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const sexo = document.getElementById('sexo').value;
    const anioNacimiento = parseInt(document.getElementById('anioNacimiento').value);
  
    if (isNaN(edad) || isNaN(peso) || isNaN(altura) || isNaN(anioNacimiento) || (sexo !== 'H' && sexo !== 'M')) {
      alert('Por favor, introduce valores válidos para todos los campos.');
      return;
    }
  
    const persona = new Persona(nombre, edad, peso, altura, sexo, anioNacimiento);
    const personaContainer = document.getElementById('persona-container');
    personaContainer.innerHTML = persona.mostrarDatos();
  }
  
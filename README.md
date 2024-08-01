# Ejercicios de Programación Orientada a Objetos (POO) en JavaScript TP4POO

## ¿Qué es la Programación Orientada a Objetos (POO)?
La Programación Orientada a Objetos (POO) es un paradigma de programación que organiza el diseño del software alrededor de "objetos", en lugar de funciones y lógica. Los objetos pueden representar entidades del mundo real, con propiedades y comportamientos.

### Características de la POO:
- **Clases y Objetos**: Una clase es un molde que define propiedades y métodos, mientras que un objeto es una instancia de una clase.
- **Encapsulamiento**: Agrupa los datos y métodos que operan sobre esos datos dentro de una clase, ocultando los detalles internos.
- **Abstracción**: Permite trabajar con conceptos a nivel de interfaz sin necesidad de conocer los detalles de implementación.
- **Herencia**: Permite crear nuevas clases basadas en clases existentes, reutilizando y extendiendo su funcionalidad.
- **Polimorfismo**: Permite que los objetos de diferentes clases sean tratados de manera uniforme mediante una interfaz común.

## Ejemplos de Ejercicios

### Agenda Telefónica
Este ejercicio consiste en crear una agenda telefónica de contactos utilizando la POO. Los contactos están definidos por un nombre y un teléfono. Una agenda de contactos permite realizar diversas operaciones como añadir, buscar, eliminar y listar contactos.

### git clone https://github.com/ClemenPalazzo/TP3Array.git

```javascript
class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

class Agenda {
  constructor(tamano = 10) {
    this.contactos = [];
    this.tamano = tamano;
  }

  aniadirContacto(contacto) {
    if (this.agendaLlena()) {
      console.log('La agenda está llena. No se puede añadir más contactos.');
      return 'La agenda está llena. No se puede añadir más contactos.';
    }
    if (this.existeContacto(contacto)) {
      console.log('El contacto ya existe en la agenda.');
      return 'El contacto ya existe en la agenda.';
    }
    this.contactos.push(contacto);
    console.log('Contacto añadido.');
    return 'Contacto añadido.';
  }

  existeContacto(contacto) {
    return this.contactos.some(c => c.nombre === contacto.nombre);
  }

  listarContactos() {
    return this.contactos.map(c => `Nombre: ${c.nombre}, Teléfono: ${c.telefono}`).join('\n');
  }

  buscarContacto(nombre) {
    const contacto = this.contactos.find(c => c.nombre === nombre);
    if (contacto) {
      return `Teléfono de ${nombre}: ${contacto.telefono}`;
    } else {
      return `El contacto ${nombre} no existe en la agenda.`;
    }
  }

  eliminarContacto(contacto) {
    const index = this.contactos.findIndex(c => c.nombre === contacto.nombre);
    if (index !== -1) {
      this.contactos.splice(index, 1);
      console.log('Contacto eliminado.');
      return 'Contacto eliminado.';
    } else {
      console.log('El contacto no existe en la agenda.');
      return 'El contacto no existe en la agenda.';
    }
  }

  agendaLlena() {
    return this.contactos.length >= this.tamano;
  }

  huecosLibres() {
    return this.tamano - this.contactos.length;
  }
}

// Ejemplo de uso
const agenda = new Agenda();

const contacto1 = new Contacto('Alice', '123456789');
const contacto2 = new Contacto('Bob', '987654321');

agenda.aniadirContacto(contacto1);
agenda.aniadirContacto(contacto2);

console.log(agenda.listarContactos());

console.log(agenda.buscarContacto('Alice'));

agenda.eliminarContacto(contacto1);

console.log(agenda.listarContactos());

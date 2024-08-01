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
      console.log("La agenda está llena. No se puede añadir más contactos.");
      return "La agenda está llena. No se puede añadir más contactos.";
    }
    if (this.existeContacto(contacto)) {
      console.log("El contacto ya existe en la agenda.");
      return "El contacto ya existe en la agenda.";
    }
    this.contactos.push(contacto);
    console.log("Contacto añadido.");
    return "Contacto añadido.";
  }

  existeContacto(contacto) {
    return this.contactos.some((c) => c.nombre === contacto.nombre);
  }

  listarContactos() {
    return this.contactos
      .map((c) => `Nombre: ${c.nombre}, Teléfono: ${c.telefono}`)
      .join("\n");
  }

  buscarContacto(nombre) {
    const contacto = this.contactos.find((c) => c.nombre === nombre);
    if (contacto) {
      return `Teléfono de ${nombre}: ${contacto.telefono}`;
    } else {
      return `El contacto ${nombre} no existe en la agenda.`;
    }
  }

  eliminarContacto(contacto) {
    const index = this.contactos.findIndex((c) => c.nombre === contacto.nombre);
    if (index !== -1) {
      this.contactos.splice(index, 1);
      console.log("Contacto eliminado.");
      return "Contacto eliminado.";
    } else {
      console.log("El contacto no existe en la agenda.");
      return "El contacto no existe en la agenda.";
    }
  }

  agendaLlena() {
    return this.contactos.length >= this.tamano;
  }

  huecosLibres() {
    return this.tamano - this.contactos.length;
  }
}

const agenda = new Agenda();

function mostrarMenu() {
  let opcion;
  do {
    opcion = prompt(
      "Seleccione una opción:\n1. Añadir contacto\n2. Existe contacto\n3. Listar contactos\n4. Buscar contacto\n5. Eliminar contacto\n6. Agenda llena\n7. Huecos libres\n8. Salir"
    );

    switch (opcion) {
      case "1":
        const nombre = prompt("Ingrese el nombre del contacto:");
        const telefono = prompt("Ingrese el teléfono del contacto:");
        const nuevoContacto = new Contacto(nombre, telefono);
        alert(agenda.aniadirContacto(nuevoContacto));
        break;

      case "2":
        const nombreExiste = prompt(
          "Ingrese el nombre del contacto que desea verificar:"
        );
        const contactoExiste = new Contacto(nombreExiste, "");
        alert(
          agenda.existeContacto(contactoExiste)
            ? "El contacto existe."
            : "El contacto no existe."
        );
        break;

      case "3":
        alert(agenda.listarContactos());
        break;

      case "4":
        const nombreBuscar = prompt(
          "Ingrese el nombre del contacto que desea buscar:"
        );
        alert(agenda.buscarContacto(nombreBuscar));
        break;

      case "5":
        const nombreEliminar = prompt(
          "Ingrese el nombre del contacto que desea eliminar:"
        );
        const contactoEliminar = new Contacto(nombreEliminar, "");
        alert(agenda.eliminarContacto(contactoEliminar));
        break;

      case "6":
        alert(
          agenda.agendaLlena()
            ? "La agenda está llena."
            : "La agenda no está llena."
        );
        break;

      case "7":
        alert(`Huecos libres: ${agenda.huecosLibres()}`);
        break;

      case "8":
        alert("Saliendo del menú.");
        break;

      default:
        alert("Opción no válida. Intente de nuevo.");
    }
  } while (opcion !== "8");
}

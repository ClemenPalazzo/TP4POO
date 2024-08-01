class Cuenta {
  constructor(titular) {
    this.titular = titular;
    this.saldo = 0;
  }

  ingresar(cantidad) {
    this.saldo += cantidad;
    console.log(`Ingresados ${cantidad} en la cuenta de ${this.titular}.`);
  }

  extraer(cantidad) {
    if (cantidad > this.saldo) {
      console.log("Saldo insuficiente para realizar la operación.");
    } else {
      this.saldo -= cantidad;
      console.log(`Extraídos ${cantidad} de la cuenta de ${this.titular}.`);
    }
  }

  informar() {
    return `Titular: ${this.titular}\nSaldo: ${this.saldo}€`;
  }
}

const cuenta = new Cuenta("Alex");

function mostrarInformacion() {
  const estadoCuenta = document.getElementById("estado-cuenta");
  estadoCuenta.textContent = cuenta.informar();
}

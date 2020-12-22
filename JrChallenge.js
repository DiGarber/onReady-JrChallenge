

class Auto {
  constructor(marca, modelo, puertas, cilindrada, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.puertas = puertas;
    this.cilindrada = cilindrada;
    this.precio = precio;
  }
}

const car1 = new Auto("Peugeot", "206", "4", "", "200.000,00");
const car2 = new Auto("Honda", "Titan", "", "125cc", "60.000,00");
const car3 = new Auto("Peugeot", "208", "5", "", "250.000,00");
const car4 = new Auto("Yamaha", "YBR", "", "160cc", "80.500,50");

const VehiculosPorConsola = () => {
  const carArray = [car1, car2, car3, car4];
  const modelWithY = carArray.filter((vehiculo) =>
  vehiculo.modelo.includes("Y")
  );
  
  carArray.forEach((vehiculo) => {
    vehiculo.puertas
      ? console.log(
          `Marca: ${vehiculo.marca} // Modelo: ${vehiculo.modelo} // Puertas: ${vehiculo.puertas} // Precio: ${vehiculo.precio} `
          )
      : console.log(
        `Marca: ${vehiculo.marca} // Modelo: ${vehiculo.modelo} // Cilindrada: ${vehiculo.cilindrada} // Precio: ${vehiculo.precio} `
        );
  });

  const orderedCarArray = carArray.sort(
    (vehiculo, vehiculo2) =>
      parseInt(vehiculo2.precio) -  parseInt(vehiculo.precio) 
  );
  console.log("=============================");

  console.log(
    `Vehículo más caro: ${orderedCarArray[0].marca} ${orderedCarArray[0].modelo}`
  );
  console.log(
    `Vehículo más barato: ${
      orderedCarArray[orderedCarArray.length - 1].marca
    } ${orderedCarArray[orderedCarArray.length - 1].modelo}`
  );
  console.log(
    `Vehículo que contiene en el modelo la letra ‘Y’: ${modelWithY[0].marca}  ${modelWithY[0].modelo}  ${modelWithY[0].precio}`
  );
  console.log("=============================");
  console.log("Vehículos ordenados por precio de mayor a menor:");
  orderedCarArray.forEach((vehiculo) => {
    console.log(`${vehiculo.marca} ${vehiculo.modelo}`);
  });
};

VehiculosPorConsola()
const ordenador1 = {
  marca: "HP",
  procesador: "i7",
  ram: "16Gb",
  hd: "1Tb",
  precio: 1500,
  extras: ["cámara HD", "microfono stereo", "disco de acceso rápido"],
  maletin: true,
};
 

console.log('mi ordenador es un ' + ordenador1.marca + ' con procesador ' + ordenador1['procesador'] + ' y ' + ordenador1.ram + 'de RAM' )


for (let x in ordenador1) {
    console.log(ordenador1[x])
}

console.log(ordenador1.extras[2])


const galletas = {
marca: 'Artiach',
nombre: 'Chiquilin',
descripción: 'Galletas de Mantequilla',
precio: 2.75,
hayExistencia: true,
};

console.log(galletas)
galletas.oferta = true

console.log(galletas)

galletas['nombre'] = 'Dinosaurus' 
console.log(galletas)

delete galletas.precio 
console.log(galletas)

console.log(Object.keys(galletas))
console.log(Object.values(galletas))




const concesionario = [
    {
      name: "Bugatti Veyron",
      Brand: "Bugatti",
      HorsePower: 1001,
      Price: 1500000
    },
    {
      name: "Koenigsegg Agera RS",
      Brand: "Koenigsegg",
      HorsePower: 1160,
      Price: "2500000"
    },
    {
      name: "Hennessey Venom GT",
      Brand: "Hennessey",
      HorsePower: 1244,
      Price: "1200000"
    },
    {
      name: "Rimac C_Two",
      Brand: "Rimac",
      HorsePower: 1914,
      Price: "2000000"
    },
    {
      name: "McLaren Speedtail",
      Brand: "McLaren",
      HorsePower: 1035,
      Price: "2000000"
    }
  ]


document.addEventListener('DOMContentLoaded', function() {
    const formkeySelector = document.getElementById('keySelector');
    formkeySelector.addEventListener('submit', function(event) {
        event.preventDefault();

        const keySelected = document.getElementById('claveInput').value
        
        valorDeLaClave(keySelected)
    }
    );
}
);

function valorDeLaClave(clave) {
    if (clave == "name"){ 
        function showNameList(array, clave) {
            array.forEach(objeto => {
                if ( objeto.hasOwnP
                
            });
        }
        console.log(concesionario[1].name + 'prueba')

    }
}


/* let moreHP = concesionario[0]

for (let i=1; i < concesionario.length; i++) {
    if (concesionario[i].HorsePower > moreHP.HorsePower) {
        moreHP = concesionario[i]
    }
}


console.log('el coche con mas HP es ' +moreHP.name + ' con ' + moreHP.HorsePower + 'HP')
 */


    
let propiedadesJSON = [
  {
    name: 'Casa de campo',
    description: 'Un lugar ideal para descansar de la ciudad',
    src:
      'https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg',
    rooms: 2,
    m: 170
  },
  {
    name: 'Casa de playa',
    description: 'Despierta tus días oyendo el oceano',
    src:
      'https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg',
    rooms: 2,
    m: 130
  },
  {
    name: 'Casa en el centro',
    description: 'Ten cerca de ti todo lo que necesitas',
    src:
      'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    rooms: 1,
    m: 80
  },
  {
    name: 'Casa rodante',
    description: 'Conviertete en un nómada del mundo sin salir de tu casa',
    src:
      'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    rooms: 1,
    m: 6
  },
  {
    name: 'Departamento',
    description: 'Desde las alturas todo se ve mejor',
    src:
      'https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg',
    rooms: 3,
    m: 200
  },
  {
    name: 'Mansión',
    description: 'Vive una vida lujosa en la mansión de tus sueños ',
    src:
      'https://image.shutterstock.com/image-illustration/luxury-mansion-garden-expensive-cars-260nw-2025532670.jpg',
    rooms: 5,
    m: 500
  }
]

let html = ''
let propSeleccionada
let total

cajaPropiedades = document.querySelector('.propiedades')
cantidad = document.getElementById('cantidad')

cargaInicial()

//FUNCION CARGA INICIAL
function cargaInicial () {
  for (let propiedad of propiedadesJSON) {
    html += `
      <div class="propiedad">
        <div class="img" style="background-image: url(${propiedad.src})"></div>
        <section>
          <h5>${propiedad.name}</h5>
          <div class="d-flex justify-content-between">
            <p>Cuartos: ${propiedad.rooms}</p>
            <p>Metros: ${propiedad.m}</p>
          </div>
          <p class="my-3">${propiedad.description}</p>
          <button class="btn btn-info ">Ver más</button>
        </section>
      </div>`
  }

  cajaPropiedades.innerHTML = html
}

//  FUNCION BUSCAR
function buscar () {
  // VACIO EL HTML
  html = ''
  let total

  // INPUTS
  valorCuartos = Number(document.getElementById('input-cuartos').value)
  valorM2Desde = Number(document.getElementById('input-m2-desde').value)
  valorM2Hasta = Number(document.getElementById('input-m2-hasta').value)

  if (valorCuartos == '' || valorM2Desde == '' || valorM2Hasta == '') {
    alert('No puede haber un campo vacio')
  } else {
    propSeleccionada = propiedadesJSON.filter(prop => {
      return (
        prop.rooms >= valorCuartos &&
        prop.m >= valorM2Desde && prop.m <= valorM2Hasta
      )
    })

    for (let propiedad of propSeleccionada) {
      template(propiedad)
    }

    total = propSeleccionada.length
    cantidad.innerHTML = total
  }

  if (total == 0) {
    cajaPropiedades.innerHTML =
      '<div><h1>Intenta buscar nuevamente <i class="bi bi-search"></i></h1></div>'
    cantidad.innerHTML = 0
    alert('No hay resultados')
  }
}

function template(propiedad) {
  html += `
    <div class="propiedad">
      <div class="img" style="background-image: url(${propiedad.src})"></div>
      <section>
        <h5>${propiedad.name}</h5>
        <div class="d-flex justify-content-between">
          <p>Cuartos: ${propiedad.rooms}</p>
          <p>Metros: ${propiedad.m}</p>
        </div>
        <p class="my-3">${propiedad.description}</p>
        <button class="btn btn-info ">Ver más</button>
      </section>
    </div>`

  cajaPropiedades.innerHTML = html
}

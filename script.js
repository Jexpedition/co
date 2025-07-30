// ✅ Definición de productos turísticos
const productos = [
  {
    ciudad: "San Andrés",
    nombre: "Viaje completo 4 días",
    nombreEN: "Complete 4 day Trip",   //ingles
    tipo: "viaje",
    imagen: "img/sanandres.jpg",
    imagenes: [
      "img/sanandres.jpg",
      "img/sanandres2.jpg",
      "img/sanandres3.jpg"
    ],
    precioCOP: 100000,
    descripcion: "Disfruta de 4 días inolvidables en las playas paradisíacas de San Andrés. Todo incluido: vuelos, hotel, alimentación y tours."
  },
  {
    ciudad: "Cartagena",
    nombre: "Pasadía en Isla Barú",
    nombreEN: "Day trip to Isla Barú",   //ingles
    tipo: "pasadía",
    imagen: "img/baru.jpg",
    imagenes: [
      "img/baru.jpg",
      "img/baru2.jpg",
      "img/baru3.jpg"
    ],
    precioCOP: 100000,
    descripcion: "Escápate por un día a las aguas cristalinas de Isla Barú. Transporte, almuerzo y actividades acuáticas incluidas."
  },
  {
    ciudad: "Santa Marta",
    nombre: "Tour a Ciudad Perdida",
    nombreEN: "Tour to Lost City",   //ingles
    tipo: "tour",
    imagen: "img/santamarta.jpg",
    imagenes: [
      "img/santamarta.jpg",
      "img/santamarta2.jpg",
      "img/santamarta3.jpg"
    ],
    precioCOP: 800000,
    descripcion: "Aventura de varios días en la Sierra Nevada hasta Ciudad Perdida, una experiencia mágica llena de historia y naturaleza."
  },
  {
  ciudad: "San Andrés",
  nombre: "Tour Acuático en Johnny Cay",
  nombreEN: "Johnny Cay Water Tour",   //ingles
  tipo: "tour",
  imagen: "img/sanandres2.jpg",
  imagenes: [
    "img/sanandres2.jpg",
    "img/sanandres3.jpg",
    "img/sanandres.jpg"
  ],
  precioCOP: 150000,
  descripcion: "Explora Johnny Cay con guía local, disfruta de playas cristalinas, snorkeling y almuerzo típico isleño."
},
{
  ciudad: "Cartagena",
  nombre: "Recorrido en Chiva Rumbera",
  nombreEN: "Chiva Rumbera Tour",   //ingles
  tipo: "pasadía",
  imagen: "img/baru2.jpg",
  imagenes: [
    "img/baru2.jpg",
    "img/baru.jpg",
    "img/baru3.jpg"
  ],
  precioCOP: 70000,
  descripcion: "Vive la fiesta cartagenera en una chiva rumbera con música, bebidas, y paradas por sitios emblemáticos."
},
{
  ciudad: "Santa Marta",
  nombre: "Día de Playa en Bahía Concha",
  nombreEN: "Beach Day in Bahia Concha",   //ingles
  tipo: "pasadía",
  imagen: "img/santamarta2.jpg",
  imagenes: [
    "img/santamarta2.jpg",
    "img/santamarta.jpg",
    "img/santamarta3.jpg"
  ],
  precioCOP: 85000,
  descripcion: "Relájate en Bahía Concha, una joya del Parque Tayrona. Transporte, entrada y refrigerio incluidos."
},
{
  ciudad: "Cartagena",
  nombre: "Crucero al atardecer con cena",
  nombreEN: "Sunset Dinner Cruise",   //ingles
  tipo: "viaje",
  imagen: "img/baru3.jpg",
  imagenes: [
    "img/baru3.jpg",
    "img/baru.jpg",
    "img/baru2.jpg"
  ],
  precioCOP: 180000,
  descripcion: "Navega por la bahía de Cartagena al atardecer mientras disfrutas de una cena gourmet a bordo."
},
{
  ciudad: "Santa Marta",
  nombre: "Tour indígena en Sierra Nevada",
  nombreEN: "Indigenous tour in Sierra Nevada",   //ingles
  tipo: "tour",
  imagen: "img/santamarta3.jpg",
  imagenes: [
    "img/santamarta3.jpg",
    "img/santamarta2.jpg",
    "img/santamarta.jpg"
  ],
  precioCOP: 250000,
  descripcion: "Adéntrate en la cultura indígena Wiwa en una experiencia única de aprendizaje y conexión con la naturaleza."
},
{
  ciudad: "San Andrés",
  nombre: "Buceo en arrecifes coralinos",
  nombreEN: "Diving in coral reefs",   //ingles
  tipo: "pasadía",
  imagen: "img/sanandres3.jpg",
  imagenes: [
    "img/sanandres3.jpg",
    "img/sanandres.jpg",
    "img/sanandres2.jpg"
  ],
  precioCOP: 220000,
  descripcion: "Explora el increíble ecosistema submarino de San Andrés con todo el equipo incluido y guía profesional."
},

];



// Función para abrir el panel
function abrirMenu() {
  const panel = document.getElementById('panelMenu');
  panel.style.display = 'flex'; // Muestra el panel
      document.body.classList.add('body-no-scroll'); // 🚫 desactiva scroll
}

// Función para cerrar el panel
function cerrarMenu() {
  const panel = document.getElementById('panelMenu');
  panel.style.display = 'none'; // Oculta el panel
      document.body.classList.remove('body-no-scroll'); // ✅ vuelve a activar scroll
}








// ✅ Abre el modal con ID "modal-moneda"
function abrirModalIdiomaMoneda() {
  const modal = document.getElementById('modal-moneda');
  if (modal) {
    modal.classList.remove('oculto');
    modal.style.display = 'flex';
    document.body.classList.add('body-no-scroll'); // 🚫 desactiva scroll
  }
}


// ✅ Cierra el modal
function cerrarModalIdiomaMoneda() {
  const modal = document.getElementById('modal-moneda');
  if (modal) {
    modal.classList.add('oculto');
    modal.style.display = 'none';
    document.body.classList.remove('body-no-scroll'); // ✅ vuelve a activar scroll
  }
}


// ✅ Agrega evento para abrir modal desde botón o ícono
// Ejemplo: botón con id "abrir-configuracion"
document.addEventListener('DOMContentLoaded', () => {
  const btnAbrir = document.getElementById('abrir-configuracion');
  if (btnAbrir) {
    btnAbrir.addEventListener('click', abrirModalIdiomaMoneda);
  }
});



const simbolos = {
  COP: "$", USD: "US$", EUR: "€", MXN: "MX$",
  ARS: "AR$", BRL: "R$", GBP: "£", CLP: "CLP$", PEN: "S/"
};

function normalizarTexto(texto) {
  return texto.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, '').replace(/[^a-z0-9\s]/gi, '');
}

function obtenerPrecioTexto(producto) {
  const moneda = localStorage.getItem('monedaSeleccionada') || 'COP';
  const tasas = JSON.parse(localStorage.getItem('tasasCambio')) || { COP: 1 };
  const tasa = tasas[moneda] || 1;
  const simbolo = simbolos[moneda] || '';
  const precio = producto.precioCOP * tasa;

  return moneda === 'COP'
    ? `${simbolo} ${Math.round(precio).toLocaleString('es-CO')}`
    : `${simbolo} ${precio.toLocaleString('es-CO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

















function abrirModalProducto(prod) {
  const precioTexto = obtenerPrecioTexto(prod);
  const modal = document.createElement('div');
  modal.className = 'modal-producto';

  // Evita scroll de fondo
  document.body.classList.add('body-no-scroll');

  modal.innerHTML = `
    <div class="contenido-modal">
      <div class="barra-superior-modal">
        <img src="iconos/volver.png" alt="Cerrar" class="icono-cerrar" onclick="cerrarModalProducto(this)">
      </div>

      <!-- Collage -->
      <div class="collage-principal">
        <div class="imagen-grande">
          <img src="${prod.imagenes[0]}">
        </div>
        <div class="imagenes-pequenas">
          <img src="${prod.imagenes[1]}">
          <img src="${prod.imagenes[2]}">
        </div>
      </div>

      <!-- Galería secundaria -->
      <div class="galeria">
        ${prod.imagenes.map(img => `<img src="${img}">`).join('')}
      </div>

      <h2 id="productomodal">${prod.nombre}</h2>
      <p id="ciudad"><strong>${prod.ciudad}</strong> - ${prod.tipo.toUpperCase()}</p>
      <span id="precio">${precioTexto}</span>

      <p class="descripcion-producto">${prod.descripcion}</p>


<p id="selecciona-tu-fecha"><strong>Selecciona tu fecha de reserva</strong></p>
<div class="reserva-flex">
  <!-- Calendario -->

  <div class="contenedor-calendario">
    <div id="fecha-reserva"></div>
  </div>

  <!-- Contadores -->
  <div class="contadores">
    ${[
      { tipo: "Adultos", edad: "13 o más años" },
      { tipo: "Niños", edad: "3 a 12 años" },
      { tipo: "Bebés", edad: "0 a 2 años" },
      { tipo: "Mascotas", edad: "Cualquier edad" }
    ].map(({ tipo, edad }) => `
      <div class="contador" data-tipo="${tipo.toLowerCase()}">
        <div class="fila-contador">
          <div class="info-contador">
            <span class="tipo-contador">${tipo}</span>
            <span class="edad-contador">${edad}</span>
          </div>
          <div class="botones-contador">
            <button type="button" onclick="modificarContador(this, -1)">−</button>
            <span class="valor">0</span>
            <button type="button" onclick="modificarContador(this, 1)">+</button>
          </div>
        </div>
        <div class="campos-nombres"></div>
      </div>
    `).join('')}
  </div>
</div>


<!-- Datos del titular -->
<div class="datos-titular">
  <h3>Datos del titular de la reserva</h3>

  <label for="nombre-titular">Nombre completo:</label>
  <input type="text" id="nombre-titular" placeholder="">

<label for="celular-titular">Número de celular:</label>
<div class="grupo-telefono">
  <select id="codigo-internacional">
    <option>Cargando códigos...</option>
  </select>
  <input type="tel" id="celular-titular" placeholder="Ej. 3123456789" />
</div>



  <label for="ubicacion-titular">Lugar donde se encuentra:</label>
  <input type="text" id="ubicacion-titular" placeholder="Ciudad o región">

  <label for="direccion-titular">Dirección, hotel o apartamento:</label>
  <input type="text" id="direccion-titular" placeholder="Ej: Calle, Hotel, Apto 301 ">


  <label for="metodo-pago">Método de pago:</label>
  <select id="metodo-pago">
    <option value="" disabled selected>Seleccione una opción</option>
    <option value="efectivo">Efectivo</option>
    <option value="transferencia">Transferencia</option>
    <option value="tarjeta">Tarjeta</option>
  </select>
</div>


<!-- Cupón de descuento -->
<div class="cupon">
  <label for="input-codigo" class="label-cupon">
    Ingresa tu código de descuento:
  </label>
  
  <input
    type="text"
    id="input-codigo"
    placeholder="Código de promoción (ej: JEXP10)" 
  />
  
  <button type="button" id="btn-aplicar-codigo">Aplicar</button>
  <div id="mensaje-codigo" class="mensaje-codigo"></div>
</div>





      <!-- Footer fijo -->
      <div class="footer-modal">
        <div class="contenido-footer">
          <div class="bloque-precio">
            <div class="fila-secundaria">
              <div id="precio-total"
                   data-precio-base="${prod.precioCOP}"
                   data-simbolo="${precioTexto.match(/[^\d.,\s]+/g)?.[0] || '$'}"
                   class="precio-grande">
                ${precioTexto}
                <span class="etiqueta-precio">Precio</span>
              </div>
<a id="btn-whatsapp"
   target="_blank"
   class="btn-wsp">
   Reservar por WhatsApp
</a>

            </div>
          </div>
        </div>
      </div>
    </div>
  `;

document.body.appendChild(modal);
setTimeout(() => cargarCodigosInternacionales(), 0);

// ⬇️ Inicializa la lógica del cupón dentro de este modal
initCuponDescuento(modal);




  


// Validaciones en tiempo real: titular
const inputNombreTitular = modal.querySelector('#nombre-titular');
const inputCelularTitular = modal.querySelector('#celular-titular');

inputNombreTitular.addEventListener('input', function () {
  // Solo letras y espacios
  this.value = this.value.replace(/[0-9]/g, '');

  // Capitaliza cada palabra
  this.value = this.value
    .toLowerCase()
    .split(' ')
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' ');
});

inputCelularTitular.addEventListener('input', function () {
  // Solo números
  this.value = this.value.replace(/\D/g, '');
});



const btnWhatsApp = modal.querySelector('#btn-whatsapp');
const numero = "3239717041";

btnWhatsApp.addEventListener('click', function (e) {
  const nombreProducto = prod.nombre;                 // ES
  const nombreProductoEN = prod.nombreEN || prod.nombre; // EN (fallback a ES si no existe)
  const ciudad = prod.ciudad;
  const tipo = prod.tipo;

  const calendario = flatpickrInstance?.selectedDates?.[0];
  const fecha = calendario
    ? calendario.toLocaleDateString('es-CO', { day: '2-digit', month: '2-digit', year: 'numeric' })
    : null;

  const contadores = modal.querySelectorAll('.contador');
  let cantidades = '';
  let hayAdultos = false;
  let hayAlMenosUnNombre = false;

  // Limpiar errores visuales anteriores
  modal.querySelectorAll('.shake, .error').forEach(el => el.classList.remove('shake', 'error'));

  contadores.forEach(cont => {
    const tipoCont = cont.dataset.tipo;
    const tipoCapitalizado = tipoCont.charAt(0).toUpperCase() + tipoCont.slice(1);
    const cantidad = parseInt(cont.querySelector('.valor').textContent);

    if (tipoCont === 'adultos' && cantidad > 0) hayAdultos = true;
    if (cantidad === 0) return;

    cantidades += `*${tipoCapitalizado}:* ${cantidad}\n`;

    const camposNombres = cont.querySelectorAll('input');
    camposNombres.forEach(input => {
      const nombre = input.value.trim();
      if (nombre) {
        cantidades += `${nombre}\n`;
        hayAlMenosUnNombre = true;
      }
    });

    cantidades += `\n`;
  });

  // Obtener datos del titular
  const inputNombreTitular = modal.querySelector('#nombre-titular');
  const inputCelularTitular = modal.querySelector('#celular-titular');
  const inputUbicacionTitular = modal.querySelector('#ubicacion-titular');
  const inputDireccionTitular = modal.querySelector('#direccion-titular');

  const nombreTitular = inputNombreTitular.value.trim();
  const codigoInternacional = modal.querySelector('#codigo-internacional').value;
  const celularSinEspacios = inputCelularTitular.value.replace(/\s+/g, '');
  const celularTitular = `${codigoInternacional} ${celularSinEspacios}`;
  const ubicacionTitular = inputUbicacionTitular.value.trim();
  const direccionTitular = inputDireccionTitular.value.trim();
  const selectMetodoPago = modal.querySelector('#metodo-pago');
  const metodoPago = selectMetodoPago.value;

  // Validaciones
  let valid = true;

  if (!hayAdultos) {
    valid = false;
    const contAdultos = modal.querySelector('.contador[data-tipo="adultos"]');
    contAdultos.classList.add('error');
    restartShake(contAdultos);
  }

  if (!fecha) {
    valid = false;
    const calendarioEl = modal.querySelector('.flatpickr-calendar.inline');
    calendarioEl?.classList.add('error');
    restartShake(calendarioEl);
  }

  if (!hayAlMenosUnNombre) {
    valid = false;
    modal.querySelectorAll('.contador input').forEach(input => {
      if (input.value.trim() === '') {
        input.classList.add('error');
        restartShake(input);
      }
    });
  }

  if (!nombreTitular) {
    valid = false;
    inputNombreTitular.classList.add('error');
    restartShake(inputNombreTitular);
  }

  const soloNumerosCelular = celularSinEspacios.replace(/\D/g, '');
  if (!soloNumerosCelular || soloNumerosCelular.length < 7) {
    valid = false;
    inputCelularTitular.classList.add('error');
    restartShake(inputCelularTitular);
  }

  if (!ubicacionTitular) {
    valid = false;
    inputUbicacionTitular.classList.add('error');
    restartShake(inputUbicacionTitular);
  }

  if (!direccionTitular) {
    valid = false;
    inputDireccionTitular.classList.add('error');
    restartShake(inputDireccionTitular);
  }

  if (!metodoPago) {
    valid = false;
    selectMetodoPago.classList.add('error');
    restartShake(selectMetodoPago);
  }

  if (!valid) {
    e.preventDefault();
    const primerError = modal.querySelector('.error');
    if (primerError && !isElementInViewport(primerError)) {
      primerError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return;
  }

  // Generar mensaje WhatsApp
const precioTotal =
  modal.querySelector('#precio-total .precio-grande')?.textContent.trim()
  || modal.querySelector('#precio-total')?.textContent.trim()
  || '';


  // Traducciones de tipo de producto
  const traduccionesTipo = {
    "viaje": "Travel",
    "pasadía": "Day Trip",
    "pasadia": "Day Trip",
    "tour": "Tour"
  };

  // Traducciones de métodos de pago
  const traduccionesPago = {
    "efectivo": "Cash",
    "transferencia": "Bank Transfer",
    "tarjeta": "Card"
  };

  // Traducciones de los contadores (tal como los escribes en ES en 'cantidades')
  const traduccionesContadores = {
    "Adultos": "Adults",
    "Niños": "Children",
    "Bebés": "Babies",
    "Mascotas": "Pets"
  };

  // Helper para reemplazar todas las ocurrencias (compatible con navegadores sin replaceAll)
  function reemplazarTodos(texto, buscar, reemplazo) {
    const re = new RegExp(buscar.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    return texto.replace(re, reemplazo);
  }

  // Traducción dinámica
  const tipoTraducido = traduccionesTipo[tipo.toLowerCase()] || tipo;
  const pagoTraducido = traduccionesPago[metodoPago.toLowerCase()] || metodoPago;

  // Traducción de cantidades (líneas "Adultos", "Niños", etc.)
  let cantidadesEN = cantidades;
  for (const [es, en] of Object.entries(traduccionesContadores)) {
    cantidadesEN = reemplazarTodos(cantidadesEN, es, en);
  }


























  
  // Mensaje bilingüe:
  // ES usa nombreProducto (español)
  // EN usa nombreProductoEN (inglés) ✅
  const mensaje =
    `*Hola, quiero reservar en Jexpedition*\n\n` +
    `*${nombreProducto}*\n*${ciudad}* - *${tipo.toUpperCase()}*\n` +
    `*Fecha:* ${fecha}\n\n` +
    `${cantidades}` +
    `*Datos del titular:*\n` +
    `*Nombre:* ${nombreTitular}\n` +
    `*Teléfono:* ${celularTitular}\n` +
    `*Lugar:* ${ubicacionTitular}\n` +
    `*Dirección:* ${direccionTitular}\n\n` +
    `*Método de pago:* ${metodoPago.charAt(0).toUpperCase() + metodoPago.slice(1)}\n` +
    `*Precio total:* ${precioTotal}\n\n` +

    `------------------------------\n\n` +

    `*Hello, I want to book with Jexpedition*\n\n` +
    `*${nombreProductoEN}*\n*${ciudad}* - *${tipoTraducido.toUpperCase()}*\n` +
    `*Date:* ${fecha}\n\n` +
    `${cantidadesEN}` +
    `*Guest info:*\n` +
    `*Name:* ${nombreTitular}\n` +
    `*Phone:* ${celularTitular}\n` +
    `*Location:* ${ubicacionTitular}\n` +
    `*Address:* ${direccionTitular}\n\n` +
    `*Payment method:* ${pagoTraducido}\n` +
    `*Total price:* ${precioTotal}\n\n`;

    const mensajeWhatsApp = encodeURIComponent(mensaje);
const url = `https://wa.me/57${numero}?text=${mensajeWhatsApp}`;

const inputCodigo = modal.querySelector('#input-codigo');
const mensajeCodigo = modal.querySelector('#mensaje-codigo');
const codigoDescuento = inputCodigo?.value.trim() || '';
const mensajeDescuento = mensajeCodigo?.textContent?.trim() || '';

// ✅ Abrir la nueva pestaña con todos los datos necesarios
const ruta = `boleto.html`;
const parametros = new URLSearchParams({
  producto: nombreProducto,
  ciudad,
  tipo,
  fecha,
  cantidades,
  nombre: nombreTitular,
  celular: celularTitular,
  ubicacion: ubicacionTitular,
  direccion: direccionTitular,
  pago: metodoPago,
  precio: precioTotal,
  codigo: codigoDescuento,
  mensaje: mensajeDescuento,
  url // ya viene codificada
});



  window.open(`${ruta}?${parametros.toString()}`, '_blank');

});





















// Remover la clase error y shake cuando el usuario llena el campo
modal.querySelectorAll('input, .flatpickr-input').forEach(input => {
  input.addEventListener('input', function () {
    if (input.value.trim() !== '') {
      input.classList.remove('error', 'shake');
    }
  });
});

// Función para reiniciar la animación de shake
function restartShake(element) {
  element.classList.add('shake');
  
  // Elimina la clase 'shake' y 'error' después de 0.5 segundos
  setTimeout(() => {
    element.classList.remove('shake', 'error');
  }, 1000); // 500ms es el tiempo de la animación
}


// Función para verificar si el elemento está visible en el viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}













// Define la variable arriba
let flatpickrInstance;

// Inicializa Flatpickr y guarda la instancia
if (window.flatpickr) {
  flatpickrInstance = flatpickr("#fecha-reserva", {
    inline: true,
    minDate: "today",
    dateFormat: "Y-m-d",
    locale: "es"
  });
}




  // Agregar evento para abrir visor en imágenes del collage y galería
const todasLasImagenes = modal.querySelectorAll('.collage-principal img, .galeria img');
todasLasImagenes.forEach(img => {
  const src = img.getAttribute('src');
  const index = prod.imagenes.indexOf(src);
  if (index !== -1) {
    img.addEventListener('click', () => abrirVisorImagenes(prod.imagenes, index));
  }
});


if (!document.getElementById('visor-imagenes')) {
  const visor = document.createElement('div');
  visor.id = 'visor-imagenes';
  visor.innerHTML = `
    <div class="fondo-visor" onclick="cerrarVisorImagenes()"></div>
    <div class="contenido-visor">
      <button class="btn-navegar prev" onclick="cambiarImagen(-1)">❮</button>
      <img id="imagen-grande-visor" src="" alt="imagen ampliada">
      <button class="btn-navegar next" onclick="cambiarImagen(1)">❯</button>
    </div>
    <button class="btn-cerrar-visor" onclick="cerrarVisorImagenes()">×</button>
  `;
  document.body.appendChild(visor);
}

}







// ====== CUPONES ======
const CUPONES = {
  'VARGAS20': 20,
  'MULETT20': 20,
  'FERRER20': 20,
  'GAMARRA20': 20,
  'ANONIMOX20': 20,
};

window.cuponAplicado = null;

/**
 * Inicializa la lógica de cupones dentro del modal actual.
 * Llama: initCuponDescuento(modal)
 */
function initCuponDescuento(scope = document) {
  const input = scope.querySelector('#input-codigo');
  const btn   = scope.querySelector('#btn-aplicar-codigo');
  const msg   = scope.querySelector('#mensaje-codigo');
  const precioTotalEl = scope.querySelector('#precio-total');

  if (!input || !btn || !msg || !precioTotalEl) {
    console.warn('Cupón: faltan elementos (#input-codigo, #btn-aplicar-codigo, #mensaje-codigo o #precio-total).');
    return;
  }

  // Engancha a tu actualizarPrecioTotal para recalcular con descuento
  hookActualizarPrecioTotal(recalcularConDescuento);

  btn.addEventListener('click', () => aplicarCupon());
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') aplicarCupon(); });

  function aplicarCupon() {
    const codigo = (input.value || '').trim().toUpperCase();
    if (!codigo) {
      mostrarMsg('Ingresa un código de promoción.', 'warn');
      return;
    }
    const porcentaje = CUPONES[codigo];
    if (!porcentaje) {
      window.cuponAplicado = null;
      mostrarMsg('Código inválido o vencido.', 'error');
      recalcularConDescuento(); // quita descuento si había
      return;
    }
    window.cuponAplicado = { codigo, porcentaje };
    mostrarMsg(`Código aplicado: ${codigo} (−${porcentaje}%)`, 'ok');
    recalcularConDescuento();
  }

  function recalcularConDescuento() {
    const baseCOP = parseFloat(precioTotalEl.dataset.precioBase) || 0;
    const moneda  = localStorage.getItem('monedaSeleccionada') || 'COP';
    const tasas   = JSON.parse(localStorage.getItem('tasasCambio') || '{"COP":1}');
    const tasa    = tasas[moneda] || 1;

    // Personas SIN mascotas
    const totalPersonas = Array.from(scope.querySelectorAll('.contador')).reduce((sum, cont) => {
      const tipo = cont.dataset.tipo;
      if (tipo === 'mascotas') return sum;
      const cant = parseInt(cont.querySelector('.valor')?.textContent || '0', 10);
      return sum + (isNaN(cant) ? 0 : cant);
    }, 0);

    const cantidad = totalPersonas > 0 ? totalPersonas : 1;
    const subtotal = baseCOP * cantidad * tasa;

    const pct = window.cuponAplicado?.porcentaje || 0;
    const descuento = subtotal * (pct / 100);
    const totalConDescuento = subtotal - descuento;

    const simbolos = { COP: "$", USD: "US$", EUR: "€", MXN: "MX$", ARS: "AR$", BRL: "R$", GBP: "£", CLP: "CLP$", PEN: "S/" };
    const simbolo = precioTotalEl.dataset.simbolo || simbolos[moneda] || '$';

    const formato = new Intl.NumberFormat('es-CO', {
      minimumFractionDigits: moneda === 'COP' ? 0 : 2,
      maximumFractionDigits: moneda === 'COP' ? 0 : 2
    });

    if (pct > 0) {
      const subtotalTxt = `${simbolo} ${formato.format(subtotal)}`;
      const totalTxt    = `${simbolo} ${formato.format(totalConDescuento)}`;
      precioTotalEl.innerHTML = `
        <span class="precio-tachado" style="opacity:.7;text-decoration:line-through;display:block;line-height:1;">
          ${subtotalTxt}
        </span>
        <span class="precio-grande" style="display:block;font-weight:700;">
          ${totalTxt}
        </span>
        <span class="badge-descuento" style="display:inline-block;font-size:.85rem;padding:.15rem .5rem;border-radius:.5rem;background:#e6f9ee;">
          −${pct}% OFF
        </span>
        <span class="etiqueta-precio">Precio</span>
      `;
    } else {
      precioTotalEl.innerHTML = `
        ${simbolo} ${formato.format(subtotal)}
        <span class="etiqueta-precio">Precio</span>
      `;
    }
  }

  function mostrarMsg(texto, tipo) {
    msg.textContent = texto;
    msg.className = 'mensaje-codigo ' + (tipo || '');
  }

  function hookActualizarPrecioTotal(cb) {
    if (typeof window.actualizarPrecioTotal === 'function') {
      const original = window.actualizarPrecioTotal;
      window.actualizarPrecioTotal = function() {
        original.apply(this, arguments);
        try { cb(); } catch {}
      };
    } else {
      // Respaldo: observa cambios en el nodo de precio
      const obs = new MutationObserver(() => { try { cb(); } catch {} });
      obs.observe(precioTotalEl, { childList: true, subtree: true, characterData: true });
    }
  }

  // Pinta estado inicial
  recalcularConDescuento();
}












let imagenesVisor = [];
let indiceActual = 0;

function abrirVisorImagenes(listaImagenes, indiceInicial) {
  if (!Array.isArray(listaImagenes) || !listaImagenes[indiceInicial]) {
    console.error('No se pudo abrir la imagen, lista inválida:', listaImagenes);
    return;
  }

  imagenesVisor = listaImagenes;
  indiceActual = indiceInicial;

  const visor = document.getElementById('visor-imagenes');
  const img = document.getElementById('imagen-grande-visor');

  if (visor && img) {
    visor.classList.add('visible');
    img.src = imagenesVisor[indiceActual];
  }
}



function cerrarVisorImagenes() {
  const visor = document.getElementById('visor-imagenes');
  if (visor) {
    visor.classList.remove('visible');
    document.body.classList.remove('body-no-scroll');
  }
}

function cambiarImagen(direccion) {
  indiceActual += direccion;
  if (indiceActual < 0) indiceActual = imagenesVisor.length - 1;
  if (indiceActual >= imagenesVisor.length) indiceActual = 0;

  const imgElemento = document.getElementById('imagen-grande-visor');
  if (imgElemento) {
    imgElemento.style.opacity = 0;
    setTimeout(() => {
      imgElemento.src = imagenesVisor[indiceActual];
      imgElemento.style.opacity = 1;
    }, 200);
  }
}


// Navegación con teclado dentro del visor
document.addEventListener('keydown', (e) => {
  const visor = document.getElementById('visor-imagenes');
  if (!visor || !visor.classList.contains('visible')) return;

  if (e.key === 'ArrowLeft') {
    cambiarImagen(-1);
  } else if (e.key === 'ArrowRight') {
    cambiarImagen(1);
  } else if (e.key === 'Escape') {
    cerrarVisorImagenes();
  }
});
















function modificarContador(btn, delta) {
  const contador = btn.closest('.contador');
  const valorSpan = contador.querySelector('.valor');
  const campos = contador.querySelector('.campos-nombres');
  const tipo = contador.dataset.tipo;
  let valor = parseInt(valorSpan.textContent);

  if (delta === 1) {
    valor++;
    const input = document.createElement('input');
    input.type = 'text';
    input.name = `${tipo}-${valor}`;
    input.placeholder = `Nombre de ${tipo.charAt(0).toUpperCase() + tipo.slice(1)} ${valor}`;
    input.classList.add('input-nombre');

    // ❌ Elimina números
    // ✅ Aplica capitalización
    input.addEventListener('input', function () {
      // Quitar números
      this.value = this.value.replace(/[0-9]/g, '');

      // Formatear texto capitalizado
      this.value = this.value
        .toLowerCase()
        .split(' ')
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(' ');
    });

    campos.appendChild(input);
  } else if (delta === -1 && valor > 0) {
    campos.removeChild(campos.lastElementChild);
    valor--;
  }

  valorSpan.textContent = valor;
  actualizarPrecioTotal();
}




function cerrarModalProducto(btn) {
  const modal = btn.closest('.modal-producto');
  if (modal) {
    modal.remove();
    document.body.classList.remove('body-no-scroll');
  }
}



function actualizarPrecioTotal() {
  const precioTotalEl = document.getElementById('precio-total');
  if (!precioTotalEl) return;

  const baseCOP = parseFloat(precioTotalEl.dataset.precioBase) || 0;
  const simbolo = precioTotalEl.dataset.simbolo || '$';

  const moneda = localStorage.getItem('monedaSeleccionada') || 'COP';
  const tasas = JSON.parse(localStorage.getItem('tasasCambio')) || { COP: 1 };
  const tasa = tasas[moneda] || 1;

  // Sumar solo adultos, niños y bebés (excluye mascotas)
  const totalPersonas = Array.from(document.querySelectorAll('.contador')).reduce((sum, cont) => {
    const tipo = cont.dataset.tipo;
    if (tipo === 'mascotas') return sum; // 👈 Ignoramos mascotas
    const cantidad = parseInt(cont.querySelector('.valor')?.textContent || '0');
    return sum + cantidad;
  }, 0);

  const cantidad = totalPersonas > 0 ? totalPersonas : 1;
  const total = baseCOP * cantidad * tasa;

  const formateado = new Intl.NumberFormat('es-CO', {
    minimumFractionDigits: moneda === 'COP' ? 0 : 2,
    maximumFractionDigits: moneda === 'COP' ? 0 : 2
  }).format(total);

  precioTotalEl.innerHTML = `
    ${simbolo} ${formateado}
  `;
}

























function mostrarProductos(lista) {
  const contenedor = document.getElementById("lista-productos");
  contenedor.innerHTML = "";

  lista.forEach(p => {
    const card = document.createElement("div");
    card.className = "producto animar";
    card.setAttribute("data-nombre", normalizarTexto(p.nombre));
    card.setAttribute("data-destino", normalizarTexto(p.ciudad));

    const precioTexto = obtenerPrecioTexto(p);

    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}" class="producto-img" />
      <div class="info">
        <h3 class="producto-nombre">${p.nombre}</h3>
        <p class="producto-ciudad"><strong>${p.ciudad}</strong></p>
        <p class="producto-tipo">${p.tipo.charAt(0).toUpperCase() + p.tipo.slice(1)}</p>
        <p class="precio" data-precio-base="${p.precioCOP}"><strong>${precioTexto}</strong></p>
      </div>
    `;
    card.onclick = () => abrirModalProducto(p);
    contenedor.appendChild(card);
    setTimeout(() => card.classList.add("visible"), 100);
  });

  actualizarPrecios();
}

function actualizarPrecios() {
  document.querySelectorAll('[data-precio-base]').forEach(el => {
    const base = parseFloat(el.dataset.precioBase);
    el.innerHTML = `<strong>${formatearMoneda(base * tasaConversion)}</strong>`;
  });
}

function formatearMoneda(valor) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: monedaSeleccionada
  }).format(valor);
}

// --- tasas de cambio ---
function cargarTasaMoneda() {
  if (monedaSeleccionada === 'COP') {
    tasaConversion = 1;
    actualizarPrecios();
    return;
  }
  fetch('https://open.er-api.com/v6/latest/COP')
    .then(res => res.json())
    .then(data => {
      tasaConversion = data.rates?.[monedaSeleccionada] || 1;
      localStorage.setItem('tasasCambio', JSON.stringify(data.rates));
      actualizarPrecios();
    })
    .catch(() => {
      tasaConversion = 1;
      actualizarPrecios();
    });
}

let tasaConversion = 1;
let monedaSeleccionada = localStorage.getItem('monedaSeleccionada') || 'COP';

document.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('selector-moneda');
  if (selector) {
    selector.value = monedaSeleccionada;
    selector.addEventListener('change', e => {
      monedaSeleccionada = e.target.value;
      localStorage.setItem('monedaSeleccionada', monedaSeleccionada);
      cargarTasaMoneda();
    });
  }
  cargarTasaMoneda();
  mostrarProductos(productos);
});
























window.buscarActividades = function() {
  const texto = normalizarTexto(document.getElementById("search").value.trim());
  if (!texto) {
    mostrarProductos(productos);
    return;
  }
  const resultado = productos.filter(p =>
    normalizarTexto(p.nombre).includes(texto) ||
    normalizarTexto(p.ciudad).includes(texto) ||
    normalizarTexto(p.tipo).includes(texto)
  );
  mostrarProductos(resultado);
};

window.filtrarPorCategoria = function(tipo) {
  document.getElementById("search").value = '';
  mostrarProductos(productos.filter(p => p.tipo === tipo));
};

window.addEventListener('DOMContentLoaded', () => {
  const inputFecha = document.getElementById("fecha");
  if (inputFecha) inputFecha.style.display = 'none';

  if (!document.getElementById('hero-jexp')) {
    const hero = document.createElement('section');
    hero.id = 'hero-jexp';
  }
  mostrarProductos(productos);
});

(function() {
  // Función de distancia de Levenshtein para similitud ortográfica
  function levenshtein(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    let matrix = [];
    for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1] + (a[j - 1] === b[i - 1] ? 0 : 1),
                               Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
      }
    }
    return matrix[b.length][a.length];
  }
})();


  // Resalta coincidencias en cualquier parte del texto
  function resaltarCoincidencias(texto, input) {
    let normTexto = normalizarTexto(texto);
    let normInput = normalizarTexto(input);
    if (!normInput) return texto;
    let palabras = normInput.split(' ').filter(Boolean);
    let out = '';
    let i = 0;
    while (i < texto.length) {
      let match = false;
      for (let w of palabras) {
        if (w.length > 0 && normTexto.slice(i, i + w.length) === w) {
          out += `<span style='background:#d0f0ff;color:#1e90ff;font-weight:bold;'>${texto.slice(i, i + w.length)}</span>`;
          i += w.length;
          match = true;
          break;
        }
      }
      if (!match) {
        out += texto[i];
        i++;
      }
    }
    return out;
  }

let sugerenciasDiv;

function crearSugerenciasDiv() {
  sugerenciasDiv = document.getElementById('sugerencias-buscador');
  if (!sugerenciasDiv) {
    sugerenciasDiv = document.createElement('div');
    sugerenciasDiv.id = 'sugerencias-buscador';
    sugerenciasDiv.className = 'sugerencias-buscador';
    document.body.appendChild(sugerenciasDiv);
  }
}

function posicionarSugerencias() {
  const input = document.getElementById('search');
  if (!input || !sugerenciasDiv) return;
  const rect = input.getBoundingClientRect();
  sugerenciasDiv.style.left = rect.left + window.scrollX + 'px';
  sugerenciasDiv.style.top = (rect.bottom + window.scrollY + 2) + 'px';
  sugerenciasDiv.style.width = rect.width + 'px';
}

function mostrarSugerencias(texto) {
  crearSugerenciasDiv();
  posicionarSugerencias();
  texto = normalizarTexto(texto.trim());

  let sugeridos = [];
  let exactos = [], inicios = [], contiene = [], similares = [];

  if (texto.length < 1) {
    sugeridos = productos.slice(0, 6).map((p, idx) => ({ p, idx, score: 1, tipo: 'inicio' }));
  } else {
    let palabras = texto.split(' ').filter(Boolean);

    exactos = productos.map((p, idx) => {
      const nombreNorm = normalizarTexto(p.nombre);
      const ciudadNorm = normalizarTexto(p.ciudad);
      const tipoNorm = normalizarTexto(p.tipo);
      let campos = [nombreNorm, ciudadNorm, tipoNorm];
      let todas = palabras.every(w => campos.some(c => c.includes(w)));
      let score = 0;
      if (todas && nombreNorm === texto) score = 1000;
      else if (todas && ciudadNorm === texto) score = 900;
      else if (todas && tipoNorm === texto) score = 800;
      return score > 0 ? { p, idx, score, tipo: 'exacto' } : null;
    }).filter(Boolean);

    inicios = productos.map((p, idx) => {
      const nombreNorm = normalizarTexto(p.nombre);
      const ciudadNorm = normalizarTexto(p.ciudad);
      const tipoNorm = normalizarTexto(p.tipo);
      let campos = [nombreNorm, ciudadNorm, tipoNorm];
      let todas = palabras.every(w => campos.some(c => c.includes(w)));
      let score = 0;
      if (todas && nombreNorm.startsWith(texto)) score = 700;
      else if (todas && ciudadNorm.startsWith(texto)) score = 600;
      else if (todas && tipoNorm.startsWith(texto)) score = 500;
      return score > 0 ? { p, idx, score, tipo: 'inicio' } : null;
    }).filter(Boolean);

    contiene = productos.map((p, idx) => {
      const nombreNorm = normalizarTexto(p.nombre);
      const ciudadNorm = normalizarTexto(p.ciudad);
      const tipoNorm = normalizarTexto(p.tipo);
      let campos = [nombreNorm, ciudadNorm, tipoNorm];
      let todas = palabras.every(w => campos.some(c => c.includes(w)));
      let score = 0;
      if (todas) {
        palabras.forEach(w => {
          if (nombreNorm.includes(w)) score += 120;
          if (ciudadNorm.includes(w)) score += 80;
          if (tipoNorm.includes(w)) score += 40;
        });
      }
      return (score > 0 && todas) ? { p, idx, score, tipo: 'contiene' } : null;
    }).filter(Boolean);

    let todos = [...exactos, ...inicios, ...contiene];

    if (todos.length < 4) {
      let contieneAlguna = productos.map((p, idx) => {
        const nombreNorm = normalizarTexto(p.nombre);
        const ciudadNorm = normalizarTexto(p.ciudad);
        const tipoNorm = normalizarTexto(p.tipo);
        let score = 0;
        palabras.forEach(w => {
          if (nombreNorm.includes(w)) score += 60;
          if (ciudadNorm.includes(w)) score += 40;
          if (tipoNorm.includes(w)) score += 20;
        });
        return score > 0 ? { p, idx, score, tipo: 'alguna' } : null;
      }).filter(Boolean);
      todos = [...todos, ...contieneAlguna];
    }

    let vistos = new Set();
    sugeridos = todos.filter(obj => {
      const key = obj.p.nombre + '|' + obj.p.ciudad + '|' + obj.p.tipo;
      if (vistos.has(key)) return false;
      vistos.add(key);
      return true;
    }).sort((a, b) => b.score - a.score);

    if (sugeridos.length === 0) {
      let maxDist = texto.length <= 5 ? 1 : (texto.length <= 8 ? 2 : 3);
      similares = productos.map((p, idx) => {
        const nombreNorm = normalizarTexto(p.nombre);
        const ciudadNorm = normalizarTexto(p.ciudad);
        const tipoNorm = normalizarTexto(p.tipo);
        let minDist = Math.min(
          levenshtein(nombreNorm, texto),
          levenshtein(ciudadNorm, texto),
          levenshtein(tipoNorm, texto)
        );
        return minDist <= maxDist ? { p, idx, score: 100 - minDist * 20, minDist, tipo: 'similar' } : null;
      }).filter(Boolean).sort((a, b) => a.minDist - b.minDist || b.score - a.score);
    }
  }

  let html = '';

  const renderItems = (titulo, arr) => {
    html += `<div class="titulo-seccion">${titulo}</div>`;
    html += arr.slice(0, 4).map(obj => {
      const p = obj.p;
      return `<div class="sugerencia-item" tabindex="0" data-idx="${obj.idx}">
        <img src="${p.imagen}" alt="miniatura">
        <div>
          <div class="nombre">${resaltarCoincidencias(p.nombre, texto)}</div>
          <div class="descripcion">${p.tipo.charAt(0).toUpperCase() + p.tipo.slice(1)} · <span>${resaltarCoincidencias(p.ciudad, texto)}</span></div>
        </div>
      </div>`;
    }).join('');
  };

  if (exactos.length) renderItems('Coincidencias exactas', exactos);
  if (inicios.length) renderItems('Coincidencias por inicio', inicios);
  if (contiene.length) renderItems('Coincidencias parciales', contiene);

  if (sugeridos.length === 0 && similares.length > 0) {
    html += `<div class="titulo-seccion">¿Quisiste decir:</div>`;
    html += similares.slice(0, 6).map(obj => {
      const p = obj.p;
      let campoMostrado = p.nombre;
      if (levenshtein(normalizarTexto(p.nombre), texto) === obj.minDist) campoMostrado = resaltarCorreccion(p.nombre, texto);
      else if (levenshtein(normalizarTexto(p.ciudad), texto) === obj.minDist) campoMostrado = resaltarCorreccion(p.ciudad, texto) + ' (' + p.nombre + ')';
      else if (levenshtein(normalizarTexto(p.tipo), texto) === obj.minDist) campoMostrado = resaltarCorreccion(p.tipo, texto) + ' (' + p.nombre + ')';
      return `<div class="sugerencia-item" tabindex="0" data-idx="${productos.indexOf(p)}">
        <img src="${p.imagen}" alt="miniatura">
        <div>
          <div class="nombre">${campoMostrado}</div>
          <div class="descripcion">${p.tipo.charAt(0).toUpperCase() + p.tipo.slice(1)} · <span>${p.ciudad}</span></div>
        </div>
      </div>`;
    }).join('');
  }

  if (!html) {
    sugerenciasDiv.innerHTML = '';
    sugerenciasDiv.style.display = 'none';
    return;
  }

  sugerenciasDiv.innerHTML = html;
  sugerenciasDiv.style.display = 'block';

  // Ahora, en lugar de abrir un producto, filtramos directamente los productos
  Array.from(sugerenciasDiv.querySelectorAll('.sugerencia-item')).forEach(item => {
    item.onclick = function () {
      const idx = parseInt(this.getAttribute('data-idx'));
      sugerenciasDiv.style.display = 'none';
      // Filtrar los productos según el nombre de la sugerencia
      const productoFiltrado = productos.filter(p => normalizarTexto(p.nombre).includes(normalizarTexto(item.querySelector('.nombre').innerText)));
      mostrarProductos(productoFiltrado);
    };
  });

  let items = Array.from(sugerenciasDiv.querySelectorAll('.sugerencia-item'));
  let input = document.getElementById('search');
  let idxSel = -1;

  input.onkeydown = function (e) {
    if (!['ArrowDown', 'ArrowUp', 'Enter', 'Escape'].includes(e.key)) return;

    if (e.key === 'ArrowDown') {
      idxSel = Math.min(idxSel + 1, items.length - 1);
    } else if (e.key === 'ArrowUp') {
      idxSel = Math.max(idxSel - 1, 0);
    } else if (e.key === 'Enter') {
      items[idxSel].click();
    } else if (e.key === 'Escape') {
      sugerenciasDiv.style.display = 'none';
      return;
    }

    items.forEach((item, idx) => {
      item.classList.toggle('seleccionado', idx === idxSel);
    });
  };
}


document.addEventListener('click', function (e) {
  if (!sugerenciasDiv) return;
  if (!sugerenciasDiv.contains(e.target) && e.target.id !== 'search') {
    sugerenciasDiv.style.display = 'none';
  }
});

window.addEventListener('DOMContentLoaded', function () {
  crearSugerenciasDiv();
  const input = document.getElementById('search');
  if (!input) return;
  input.setAttribute('autocomplete', 'off');
  input.addEventListener('input', function () {
    mostrarSugerencias(this.value);
  });
  input.addEventListener('focus', function () {
    mostrarSugerencias(this.value);
  });
  window.addEventListener('resize', posicionarSugerencias);
  window.addEventListener('scroll', posicionarSugerencias, true);
});

















// api funcion que caga nuneros internacionales ej: +57 

async function cargarCodigosInternacionales() {
  const select = document.getElementById('codigo-internacional');
  if (!select) {
    console.warn("No se encontró el elemento #codigo-internacional en el DOM.");
    return;
  }

  try {
    const response = await fetch('https://countriesnow.space/api/v0.1/countries/info?returns=flag,dialCode');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const json = await response.json();
    const data = json.data;

    if (!Array.isArray(data)) throw new Error('Respuesta inesperada del API');

    // Filtrar países válidos con nombre y dialCode
    const paisesValidos = data.filter(pais => pais.name && pais.dialCode);

    // Ordenar alfabéticamente por nombre
    paisesValidos.sort((a, b) => a.name.localeCompare(b.name));

    // Insertar opciones en el select
    select.innerHTML = paisesValidos.map(pais => {
      const nombre = pais.name;
      const codigo = `+${pais.dialCode.replace(/^\+/, '')}`;  // Siempre agrega el '+'
      return `<option value="${codigo}">${codigo} - ${nombre}</option>`;
    }).join('');

    // Seleccionar Colombia por defecto si existe
    const col = [...select.options].find(opt => opt.text.includes('Colombia'));
    if (col) select.value = col.value;

  } catch (error) {
    console.error('Error cargando países:', error);
    select.innerHTML = `<option>Error al cargar códigos</option>`;
  }
}




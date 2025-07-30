window.addEventListener('DOMContentLoaded', () => {
  // Espera un pequeño tiempo para asegurar que todo se haya renderizado
  setTimeout(() => {
    descargarPDF();
  }, 500); // puedes ajustar el tiempo si es necesario
});






function getParametro(nombre) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nombre) || '';
}

// ✅ Generar código de referencia único
function generarCodigoReferencia() {
  const now = new Date();
  const ref = `JEX-${now.getFullYear()}${(now.getMonth() + 1)
    .toString().padStart(2, '0')}${now.getDate()
    .toString().padStart(2, '0')}-${now.getHours()
    .toString().padStart(2, '0')}${now.getMinutes()
    .toString().padStart(2, '0')}${now.getSeconds()
    .toString().padStart(2, '0')}-${Math.floor(Math.random() * 900 + 100)}`;
  return ref;
}

// ✅ Generar referencia global al cargar
const refGenerado = generarCodigoReferencia();
document.getElementById('ref-id').textContent = `Ref: ${refGenerado}`;

// ✅ Obtener datos desde URL
const producto = getParametro('producto');
const ciudad = getParametro('ciudad');
const tipo = getParametro('tipo');
const fecha = getParametro('fecha');
const cantidades = getParametro('cantidades');
const nombre = getParametro('nombre');
const celular = getParametro('celular');
const ubicacion = getParametro('ubicacion');
const direccion = getParametro('direccion');
const pago = getParametro('pago');
const precio = getParametro('precio');
const codigo = getParametro('codigo');
const mensaje = getParametro('mensaje');
const urlWsp = getParametro('url');

// ✅ Mostrar datos en el resumen
const area = document.getElementById('area-resumen');
area.innerHTML = `
  <div class="campo"><span class="label">Producto:</span> <span class="valor">${producto}</span></div>
  <div class="campo"><span class="label">Ciudad:</span> <span class="valor">${ciudad}</span></div>
  <div class="campo"><span class="label">Tipo:</span> <span class="valor">${tipo}</span></div>
  <div class="campo"><span class="label">Fecha:</span> <span class="valor">${fecha}</span></div>
  <div class="campo"><span class="label">Participantes:</span><span class="valor"><pre>${cantidades}</pre></span></div>
  <div class="campo"><span class="label">Nombre Titular:</span> <span class="valor">${nombre}</span></div>
  <div class="campo"><span class="label">Teléfono:</span> <span class="valor">${celular}</span></div>
  <div class="campo"><span class="label">Ubicación:</span> <span class="valor">${ubicacion}</span></div>
  <div class="campo"><span class="label">Dirección:</span> <span class="valor">${direccion}</span></div>
  <div class="campo"><span class="label">Método de pago:</span> <span class="valor">${pago}</span></div>
  ${codigo ? `
    <div class="campo">
      <span class="label">Cupón aplicado:</span>
      <span class="valor">${codigo}</span>
      <span class="descuento">${mensaje}</span>
    </div>` : ''}
  <div class="campo"><span class="label">Precio total:</span> <span class="valor">${precio}</span></div>
`;

// ✅ Activar botón de WhatsApp
const btnWsp = document.getElementById('btn-wsp');
if (btnWsp && urlWsp) {
  btnWsp.href = urlWsp;
}

// ✅ Descargar boleto como PDF con nombre personalizado
async function descargarPDF() {
  const boleto = document.querySelector('.boleto');
  const canvas = await html2canvas(boleto, {
    scale: 2,
    useCORS: true
  });

  const imgData = canvas.toDataURL('image/png');

  const isMobile = window.innerWidth <= 768;

  const pdf = new jspdf.jsPDF({
    orientation: isMobile ? 'portrait' : 'landscape',
    unit: 'pt',
    format: 'letter'
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const ratio = Math.min(pageWidth / canvas.width, pageHeight / canvas.height);
  const imgWidth = canvas.width * ratio;
  const imgHeight = canvas.height * ratio;
  const x = (pageWidth - imgWidth) / 2;
  const y = (pageHeight - imgHeight) / 2;

  pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
  pdf.save(`boleto_${refGenerado}.pdf`);
}


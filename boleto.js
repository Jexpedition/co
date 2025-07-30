function getParametro(nombre) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nombre) || '';
}

// ✅ Generar código de referencia único
function generarCodigoReferencia() {
  const now = new Date();
  return `JEX-${now.getFullYear()}${(now.getMonth() + 1)
    .toString().padStart(2, '0')}${now.getDate()
    .toString().padStart(2, '0')}-${now.getHours()
    .toString().padStart(2, '0')}${now.getMinutes()
    .toString().padStart(2, '0')}${now.getSeconds()
    .toString().padStart(2, '0')}-${Math.floor(Math.random() * 900 + 100)}`;
}

// ✅ Recuperar o generar referencia persistente
let refGenerado = localStorage.getItem('codigoReferencia');
if (!refGenerado) {
  refGenerado = generarCodigoReferencia();
  localStorage.setItem('codigoReferencia', refGenerado);
}

window.addEventListener('DOMContentLoaded', () => {
  const producto = getParametro('producto');
  const ciudad = getParametro('ciudad');
  const tipo = getParametro('tipo');
  const fecha = getParametro('fecha');
  const cantidadesRaw = getParametro('cantidades');
  const cantidades = cantidadesRaw
    .replace(/\*/g, '')
    .replace(/:\s*/g, ': ')
    .replace(/\n/g, '<br>');
  const nombre = getParametro('nombre');
  const celular = getParametro('celular');
  const ubicacion = getParametro('ubicacion');
  const direccion = getParametro('direccion');
  const pago = getParametro('pago');
  const precio = getParametro('precio');
  let precioOriginal = getParametro('precioOriginal');
  const codigo = getParametro('codigo');
  const mensaje = getParametro('mensaje');
  const urlWsp = getParametro('url');
  const moneda = getParametro('moneda') || 'COP';

// ✅ Calcular precio original si aplica
if (!precioOriginal && codigo && mensaje && precio) {
  const porcentaje = parseInt(mensaje.match(/-?(\d+)%/)?.[1] || 0);
  if (porcentaje > 0) {
    const valorFinal = parseFloat(precio.replace(/[^\d.]/g, ''));
    const valorOriginal = valorFinal / (1 - (porcentaje / 100));

    const formateador = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: moneda,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    });

    precioOriginal = formateador.format(valorOriginal);
  }
}



  const area = document.getElementById('area-resumen');
  area.innerHTML = `
    <div class="campo"><span class="label">Producto:</span> <span class="valor">${producto} - ${ciudad} - ${tipo}</span></div>

    <div class="campo"><span class="label">Fecha a reservar:</span> <span class="valor">${fecha}</span></div>
    <div class="campo"><span class="label">Participantes:</span><span class="valor">${cantidades}</span></div>
    <div class="campo"><span class="label">Nombre Titular:</span> <span class="valor">${nombre}</span></div>
    <div class="campo"><span class="label">Teléfono:</span> <span class="valor">${celular}</span></div>
    <div class="campo"><span class="label">Ubicación:</span> <span class="valor">${ubicacion} - ${direccion}</span></div>

    <div class="campo"><span class="label">Método de pago:</span> <span class="valor">${pago}</span></div>
    ${codigo ? `
      <div class="campo">
        <span class="label">Cupón aplicado:</span>
        <span class="descuento">${mensaje}</span>
      </div>` : ''}
    <div class="campo">
      <span class="label">Precio total:</span>
      <span class="valor">
        <strong class="precio-final">${precio}</strong>
      </span>
    </div>
  <div id="seccion-acciones" class="campo qr-container">
    <div id="qr-ref"></div>
  </div>
  `;

  // ✅ Mostrar referencia si hay contenedor adicional
  const refEl = document.getElementById('ref-id');
  if (refEl) {
    refEl.textContent = `Ref: ${refGenerado}`;
  }

  // ✅ Generar QR
  const qrDiv = document.getElementById('qr-ref');
  if (qrDiv) {
    new QRCode(qrDiv, {
      text: refGenerado,
      width: 100,
      height: 100,
      correctLevel: QRCode.CorrectLevel.H
    });
  }

  // ✅ Scroll
  const acciones = document.getElementById('seccion-acciones');
  if (acciones) {
    acciones.scrollIntoView({ behavior: 'smooth' });
  }

  // ✅ Activar WhatsApp
  const btnWsp = document.getElementById('btn-wsp');
  if (btnWsp && urlWsp) {
    btnWsp.href = urlWsp;
    btnWsp.style.pointerEvents = 'none';
    btnWsp.style.opacity = '0.5';

    btnWsp.addEventListener('click', function (e) {
      if (btnWsp.style.pointerEvents === 'none') {
        e.preventDefault();
        alert('Por favor descarga el boleto antes de enviarlo por WhatsApp.');
      }
    });
  }
});

// ✅ Descargar PDF
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

  const btnWsp = document.getElementById('btn-wsp');
  if (btnWsp) {
    btnWsp.style.pointerEvents = 'auto';
    btnWsp.style.opacity = '1';
  }
}

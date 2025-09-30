function getParametro(nombre) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nombre) || "";
}




// ✅ Toma la referencia que generó script.js (primero por URL, si no por localStorage, si no usa '---')
const refGenerado = getParametro("referencia") || localStorage.getItem("codigoReferencia") || '---';





window.addEventListener("DOMContentLoaded", () => {
  const producto = getParametro("producto");
  const ciudad = getParametro("ciudad");
  const tipo = getParametro("tipo");
  const fecha = getParametro("fecha");
  const cantidadesRaw = getParametro("cantidades");
  const cantidades = cantidadesRaw
    .replace(/\*/g, "")
    .replace(/:\s*/g, ": ")
    .replace(/\n/g, "<br>");

  const nombre = getParametro("nombre");
  const tipoDocumento = getParametro("tipoDocumento");
  const numeroDocumento = getParametro("numeroDocumento");
  const celular = getParametro("celular");
  const ubicacion = getParametro("ubicacion");
  const direccion = getParametro("direccion");
  const pago = getParametro("pago");
  const precio = getParametro("precio");
  let precioOriginal = getParametro("precioOriginal");
  const codigo = getParametro("codigo");
  const mensaje = getParametro("mensaje");
  const urlWsp = getParametro("url");
  const moneda = getParametro("moneda") || "COP";

  // ✅ Calcular precio original si aplica
  if (!precioOriginal && codigo && mensaje && precio) {
    const porcentaje = parseInt(mensaje.match(/-?(\d+)%/)?.[1] || 0);
    if (porcentaje > 0) {
      const valorFinal = parseFloat(precio.replace(/[^\d.]/g, ""));
      const valorOriginal = valorFinal / (1 - porcentaje / 100);

      const formateador = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: moneda,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      });

      precioOriginal = formateador.format(valorOriginal);
    }
  }

  const area = document.getElementById("area-resumen");
  area.innerHTML = `
    <div class="campo"><span class="label">Producto:</span> <span class="valor">${producto} - ${ciudad} - ${tipo}</span></div>
    <div class="campo"><span class="label">Fecha a reservar:</span> <span class="valor">${fecha}</span></div>
    <div class="campo"><span class="label">Participantes:</span><span class="valor">${cantidades}</span></div>
    <div class="campo"><span class="label">Nombre Titular:</span> <span class="valor">${nombre}</span></div>
    <div class="campo"><span class="label">Documento:</span> <span class="valor">${tipoDocumento} ${numeroDocumento}</span></div>
    <div class="campo"><span class="label">Teléfono:</span> <span class="valor">${celular}</span></div>
    <div class="campo"><span class="label">Ubicación:</span> <span class="valor">${ubicacion} - ${direccion}</span></div>
    <div class="campo"><span class="label">Método de pago:</span> <span class="valor">${pago}</span></div>
    ${
      codigo
        ? `
      <div class="campo">
        <span class="label">Cupón aplicado:</span>
        <span class="descuento">${mensaje}</span>
      </div>`
        : ""
    }
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
  const refEl = document.getElementById("ref-id");
  if (refEl) {
    refEl.textContent = `Ref: ${refGenerado}`;
  }

  // ✅ Generar QR
  const qrDiv = document.getElementById("qr-ref");
  if (qrDiv) {
    new QRCode(qrDiv, {
      text: refGenerado,
      width: 100,
      height: 100,
      correctLevel: QRCode.CorrectLevel.H,
    });
  }

  // ✅ Scroll
  const acciones = document.getElementById("seccion-acciones");
  if (acciones) {
    acciones.scrollIntoView({ behavior: "smooth" });
  }

  // ✅ Activar WhatsApp
  const btnWsp = document.getElementById("btn-wsp");
  if (btnWsp && urlWsp) {
    btnWsp.style.pointerEvents = "auto";
    btnWsp.style.opacity = "1";

    btnWsp.addEventListener("click", (e) => {
      e.preventDefault(); // Evita que se abra por defecto

      enviarDatosASheets(); // 🔁 Se envía en segundo plano (sin bloquear)
      window.open(urlWsp, "_blank"); // ✅ WhatsApp se abre inmediatamente
    });
  }
});

// ✅ Descargar PDF
async function descargarPDF() {
  const boleto = document.querySelector(".boleto");
  const canvas = await html2canvas(boleto, {
    scale: 2,
    useCORS: true,
  });

  const imgData = canvas.toDataURL("image/png");

  const isMobile = window.innerWidth <= 768;

  const pdf = new jspdf.jsPDF({
    orientation: isMobile ? "portrait" : "landscape",
    unit: "pt",
    format: "letter",
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const ratio = Math.min(pageWidth / canvas.width, pageHeight / canvas.height);
  const imgWidth = canvas.width * ratio;
  const imgHeight = canvas.height * ratio;
  const x = (pageWidth - imgWidth) / 2;
  const y = (pageHeight - imgHeight) / 2;

  pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
  pdf.save(`Boleto_${refGenerado}.pdf`);
}

// ✅ Función que envía los datos a Google Sheets
async function enviarDatosASheets() {
  const referencia = refGenerado; // 👈 usa el mismo que ya cargaste al inicio
  const fechaEnvio = new Date().toLocaleString("es-CO");
  const params = new URLSearchParams(window.location.search);

  // 1. Obtener producto original
  const productoNombre = params.get("producto") || "";
  const productos = JSON.parse(
    localStorage.getItem("productosDisponibles") || "[]"
  );
  const producto = productos.find((p) => p.nombre === productoNombre);
  const precioCOP = producto?.precioCOP || 0;

  // 2. Calcular cantidad de personas (adultos, niños, bebés)
  const cantidadesTexto = params.get("cantidades") || "";
  const matches = cantidadesTexto.match(/\*\w+:\* (\d+)/g) || [];
  const totalPersonas = matches.reduce((sum, txt) => {
    const n = parseInt(txt.match(/\d+/)?.[0] || "0");
    return sum + (isNaN(n) ? 0 : n);
  }, 0);

  // 3. Descuento por cupón
  const porcentaje = parseInt(
    (params.get("mensaje") || "").match(/(\d+)%/)?.[1] || "0"
  );
  const totalCOP = precioCOP * totalPersonas;
  const descuento = totalCOP * (porcentaje / 100);
  const precioConDescuento = Math.round(totalCOP - descuento);




  const formatoCOP = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });


// Obtener porcentaje de ganancia desde el producto
const porcentajeGanancia = producto?.ganancia || 0;

// ✅ Calcular total de ganancia sobre el precio con descuento si existe
let baseGanancia;
if (precioConDescuento && precioConDescuento > 0) {
  baseGanancia = precioConDescuento;
} else {
  baseGanancia = totalCOP;
}

const totalGanancia = baseGanancia * porcentajeGanancia;



// Preparar datos a enviar a Google Sheets
const datos = {
  referencia,
  fecha_envio: fechaEnvio,
  producto: productoNombre,
  tipo: params.get("tipo") || "",
  fecha_reserva: params.get("fecha") || "",
  participantes: cantidadesTexto,
  nombre: params.get("nombre") || "",
  tipo_documento: params.get("tipoDocumento") || "",
  numero_documento: params.get("numeroDocumento") || "",
  telefono: "'" + (params.get("celular") || ""),
  ubicacion: `${params.get("ubicacion") || ""} - ${params.get("direccion") || ""}`,
  metodo_pago: params.get("pago") || "",
  cupon: params.get("codigo") || "",
  descripcion_cupon: params.get("mensaje") || "",
  precio_total: formatoCOP.format(totalCOP),
  precio_descuento: formatoCOP.format(precioConDescuento),
  porcentaje_ganancia: porcentajeGanancia,   // Q
  total_ganancia: formatoCOP.format(totalGanancia) // R
};



// 🟢 Consola detallada
console.log("==== DATOS A ENVIAR A GOOGLE SHEETS ====");
Object.entries(datos).forEach(([key, value], i) => {
  console.log(`${i + 1}. ${key}:`, value);
});
console.log("========================================");

  const urlScript =
    "https://script.google.com/macros/s/AKfycby4rmEwjo-dTeCTfrc_YR5WOgJOkANXJsSnSMkcTA0SNHjE_Yo7KkqD8ppp3rwrxxBg/exec";

  try {
    await fetch(urlScript, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    console.log("✅ Datos enviados a Google Sheets");
  } catch (error) {
    console.error("❌ Error al enviar a Google Sheets:", error);
  }
}

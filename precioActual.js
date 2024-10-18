export async function actualizarFecha() {
  const spreadsheetId = "18QD-WU3iNJGlPzmzfvtpmSbA_ShesBEe9-TLRfHtOo4"; // Reemplaza con tu ID de hoja
  const apiKey = "AIzaSyCy2l1z9kQ6OeurD9096JX7R8BahergP5Y"; // Reemplaza con tu API Key

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/F1?key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener la fecha de la celda F1");
    }

    const data = await response.json();

    // La fecha estará en la propiedad "values"
    const fecha = data.values ? data.values[0][0] : null;

    if (!fecha) {
      throw new Error("No se encontró la fecha en la celda F1");
    }

    // Retornar la fecha para usarla en otro archivo
    return fecha;
  } catch (error) {
    console.error(error);
    return null; // Retorna null en caso de error
  }
}

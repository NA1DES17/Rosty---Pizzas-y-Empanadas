// sheet.js
export async function getProductos() {
  const spreadsheetId = "18QD-WU3iNJGlPzmzfvtpmSbA_ShesBEe9-TLRfHtOo4";
  const apiKey = "AIzaSyCy2l1z9kQ6OeurD9096JX7R8BahergP5Y";

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A2:B19?key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const rows = data.values;

    return rows.map((row) => ({
      sabor: row[0],
      precio: `$${row[1]}`,
    }));
  } catch (error) {
    console.error("Error al obtener datos:", error);
    return [];
  }
}

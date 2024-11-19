export function formatDate(newDate) {
  const date = new Date(newDate);

  // Ekstrakcija delova datuma
  const day = date.getDate(); // Dan u mesecu
  const month = date.toLocaleString("sr-RS", { month: "long" }); // Mesec kao naziv
  const year = date.getFullYear(); // Godina

  // Ekstrakcija vremena
  const hours = date.getHours(); // Sati
  const minutes = date.getMinutes().toString().padStart(2, "0"); // Minuti sa vodećom nulom

  // Kombinovanje u željeni format
  const formattedDate = `${day}. ${month} ${year}. ${hours}:${minutes}`;

  return formattedDate;
}

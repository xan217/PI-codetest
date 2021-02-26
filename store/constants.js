export const STATUS = [
  'NOT_SAVED',
  'SAVED_BUT_NOT_SENT',
  'SENT'
];
  
export const MESSAGES = {
  not_saved:          "Los datos no pudieron ser guardados en el dispositivo. Por favor intente de nuevo.",
  saved_but_not_sent: "No se pudo establecer conexión con el servidor. Por favor intenta guardar los datos de nuevo.",
  sent:               "Datos guardados de forma existosa."
};

export const HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Method": "*",
  "Access-Control-Allow-Header": "*",
  'Content-Type': 'application/json'
};

export const dateFormat = (date) => {
  const fecha = new Date(date)
  const opciones = { hour: 'numeric', minute: 'numeric', hour12: true, month: 'long', day: 'numeric' }
  return fecha.toLocaleString('es-ES', opciones).replace(',', ' |')
}

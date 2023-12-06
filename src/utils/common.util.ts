import moment from 'moment'

export function compareTime(time: Date) {
  const fecha = moment(time) // Reemplaza con tu fecha
  // Compara si es hoy
  const esHoy = fecha.isSame(moment(), 'day')

  // Compara si es ayer
  const esAyer = fecha.isSame(moment().subtract(1, 'day'), 'day')

  if (esHoy) {
    return 'TODAY'
  } else if (esAyer) {
    return 'YESTERDAY'
  } else {
    return fecha.format('D MMMM, YYYY')
  }
}

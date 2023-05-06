export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

// export function FormatDate(date: string): any {
//   const datesplit = date.split('T')[0]
//   const day = datesplit.split('-')[2]
//   const month = datesplit.split('-')[1]
//   const year = datesplit.split('-')[0]
//   return day + '-' + month + '-' + year
// }

export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

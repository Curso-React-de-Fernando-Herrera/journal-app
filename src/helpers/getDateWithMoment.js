import moment from 'moment'

moment.updateLocale('en', {
  weekdaysShort: ['Lun.', 'Mar.', 'Mie.', 'Jue.', 'Vie.', 'Sab.', 'Dom.'],
})

export const handleGetDate = (date) => {
  const formatedDate = moment(date)
  return {
    formatedDate,
  }
}

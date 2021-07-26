import moment from 'moment'

moment.updateLocale('en', {
  weekdaysShort: ['Dom.', 'Lun.', 'Mar.', 'Mie.', 'Jue.', 'Vie.', 'Sab.'],
})

export const handleGetDate = (date) => {
  const formatedDate = moment(date)
  return {
    formatedDate,
  }
}

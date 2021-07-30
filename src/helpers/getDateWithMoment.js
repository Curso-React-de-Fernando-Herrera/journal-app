import moment from 'moment'
import 'moment/locale/es'

moment.locale('es')

export const handleGetDate = (date) => {
  const formatedDate = moment(date)
  return {
    formatedDate,
  }
}

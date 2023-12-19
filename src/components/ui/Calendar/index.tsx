import { CalendarProps } from 'react-calendar'
import { StyledCalendar } from './calendar.style'

export const Calendar: React.FC<CalendarProps> = ({
  locale = 'en',
  ...props
}) => {
  return <StyledCalendar locale={locale} {...props} />
}

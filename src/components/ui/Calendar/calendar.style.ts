import styled from 'styled-components'
import 'react-calendar/dist/Calendar.css'
import ReactCalendar from 'react-calendar'

export const StyledCalendar = styled(ReactCalendar)`
  &.react-calendar {
    border: 1px solid ${({ theme }) => theme.colors.neutral[2]};
    background: ${({ theme }) => theme.colors.neutral[5]};

    .react-calendar__navigation {
      color: ${({ theme }) => theme.colors.neutral[1]};
    }

    .react-calendar__month-view__weekdays__weekday {
      color: ${({ theme }) => theme.colors.neutral[1]};

      abbr {
        text-decoration: none;
      }
    }

    .react-calendar__tile {
      color: ${({ theme }) => theme.colors.neutral[1]};
    }

    .react-calendar__month-view__days__day--neighboringMonth {
      color: ${({ theme }) => theme.colors.neutral[2]};
    }

    .react-calendar__tile--now {
      border-radius: 2px;
      background: ${({ theme }) => theme.colors.primary[4]};
    }

    .react-calendar__navigation button:enabled:hover,
    .react-calendar__navigation button:enabled:focus {
      background-color: ${({ theme }) => theme.colors.neutral[4]};
    }

    .react-calendar__tile--active {
      background-color: ${({ theme }) => theme.colors.neutral[4]};
    }

    .react-calendar__tile--active:enabled:hover,
    .react-calendar__tile--active:enabled:focus {
      background-color: ${({ theme }) => theme.colors.neutral[3]};
    }

    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus {
      background-color: ${({ theme }) => theme.colors.neutral[4]};
    }
  }
`

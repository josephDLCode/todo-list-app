import { Avatar } from '../components/ui/Avatar'
import { IncreaseDecreaseIcon } from '../icons/IncreaseDecreaseIcon'

export const SELECTOR_ESTIMATE_ITEMS = [
  {
    label: {
      icon: <IncreaseDecreaseIcon />,
      text: '0 Points'
    },
    value: 'ZERO'
  },
  {
    label: {
      icon: <IncreaseDecreaseIcon />,
      text: '1 Points'
    },
    value: 'ONE'
  },
  {
    label: {
      icon: <IncreaseDecreaseIcon />,
      text: '2 Points'
    },
    value: 'TWO'
  },
  {
    label: {
      icon: <IncreaseDecreaseIcon />,
      text: '4 Points'
    },
    value: 'FOUR'
  },
  {
    label: {
      icon: <IncreaseDecreaseIcon />,
      text: '8 Points'
    },
    value: 'EIGHT'
  }
]

export const SELECTOR_ASSIGNEE_ITEMS = [
  {
    label: {
      icon: (
        <Avatar
          $size="sm"
          alt="gstone@fake.com"
          src="https://i.stack.imgur.com/hMDvl.jpg?s=256&g=1"
        />
      ),
      text: 'Grace Stone'
    },
    value: '703de395-1d49-4471-aafa-d990dcf32cd1'
  },
  // generar mas items con el mismo formato pero con el icon diferente usando imagenes de gravatar
  {
    label: {
      icon: (
        <Avatar
          $size="sm"
          alt="jdoe@fake.com"
          src="https://i.stack.imgur.com/mfavW.png?s=128&g=1"
        />
      ),
      text: 'Jhon Doe'
    },
    value: 'a35d73eb-6829-4a92-ab82-43fe987ae02f'
  },
  {
    label: {
      icon: (
        <Avatar
          $size="sm"
          alt="rbarnes@fake.com"
          src="https://i.stack.imgur.com/8b7FJ.jpg?s=128&g=1"
        />
      ),
      text: 'Romeo Barnes'
    },
    value: '885fe214-60ac-4860-80cc-9c58179c59b4'
  },
  {
    label: {
      icon: (
        <Avatar
          $size="sm"
          alt="razorij20@gmail.com"
          src="https://i.stack.imgur.com/aW4ez.jpg?s=128&g=1"
        />
      ),
      text: 'Joseph Rivas'
    },
    value: '5c103c09-3f11-44c7-be4d-50122eebfd1f'
  }
]

export const SELECTOR_TASK_TAG_ITEMS = [
  {
    label: {
      text: 'ANDROID'
    },
    value: 'ANDROID'
  },
  {
    label: {
      text: 'IOS'
    },
    value: 'IOS'
  },
  {
    label: {
      text: 'NODE_JS'
    },
    value: 'NODE_JS'
  },
  {
    label: {
      text: 'RAILS'
    },
    value: 'RAILS'
  },
  {
    label: {
      text: 'REACT'
    },
    value: 'REACT'
  }
]

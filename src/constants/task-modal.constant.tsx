import { Avatar } from '../components/uis/Avatar'
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
          alt="jeromeBell12@gmail.com"
          src="https://i.stack.imgur.com/hMDvl.jpg?s=256&g=1"
        />
      ),
      text: 'Jerome Bell'
    },
    value: 'jeromeBell12@gmail.com'
  },
  // generar mas items con el mismo formato pero con el icon diferente usando imagenes de gravatar
  {
    label: {
      icon: (
        <Avatar
          $size="sm"
          alt="rfox2010@gmail.com"
          src="https://i.stack.imgur.com/mfavW.png?s=128&g=1"
        />
      ),
      text: 'Robert Fox'
    },
    value: 'rfox2010@gmail.com'
  },
  {
    label: {
      icon: (
        <Avatar
          $size="sm"
          alt="marmck_22@gmail.com"
          src="https://i.stack.imgur.com/8b7FJ.jpg?s=128&g=1"
        />
      ),
      text: 'Marvin McKinney'
    },
    value: 'marmck_22@gmail.com'
  },
  {
    label: {
      icon: (
        <Avatar
          $size="sm"
          alt="joneco@gmail.com"
          src="https://i.stack.imgur.com/aW4ez.jpg?s=128&g=1"
        />
      ),
      text: 'Jone Cooper'
    },
    value: 'joneco@gmail.com'
  },
  {
    label: {
      icon: (
        <Avatar
          $size="sm"
          alt="raed_guards@gmail.com"
          src="https://i.stack.imgur.com/SxEaw.jpg?s=128&g=1ack.imgur.com/aW4ez.jpg?s=128&g=1"
        />
      ),
      text: 'Ralph Edwards'
    },
    value: 'raed_guards@gmail.com'
  },
  {
    label: {
      icon: (
        <Avatar
          $size="sm"
          alt="w2garren@gmail.com"
          src="https://lh3.googleusercontent.com/a/ACg8ocIQoMTSBI_1UQ1UHOcDLZI1HGAjDQrModuL_VpDJpyflRQ=k-s96"
        />
      ),
      text: 'Wade Warren'
    },
    value: 'w2garren@gmail.com'
  },
  {
    label: {
      icon: (
        <Avatar
          $size="sm"
          alt="savannaguyen@gmail.com"
          src="https://i.stack.imgur.com/n1doi.jpg?s=128&g=1"
        />
      ),
      text: 'Savannah Nguyen'
    },
    value: 'savannaguyen@gmail.com'
  }
]

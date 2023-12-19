import styled from 'styled-components'
import { getAvatarSize } from '../../../utils/avatar.util'

export const StyledAvatar = styled.picture<AvatarProps>`
  border-radius: 50%;
  width: ${({ $size }) => getAvatarSize($size)};
  height: ${({ $size }) => getAvatarSize($size)};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`

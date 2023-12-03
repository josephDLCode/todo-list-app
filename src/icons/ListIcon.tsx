import { SVGProps } from 'react'

export const ListIcon: React.FC<SVGProps<SVGSVGElement>> = ({
  height = '1em',
  width = '1em',
  fill = 'currentColor'
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill={fill} />
    </svg>
  )
}

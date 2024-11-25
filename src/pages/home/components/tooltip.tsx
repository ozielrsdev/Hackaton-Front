import { Tooltip } from '@material-tailwind/react'

export interface TooltipProps {
  title: string
  content: string
}

export function TooltipWithHelperIcon({ title, content }: TooltipProps) {
  return (
    <Tooltip
      content={
        <div className="w-80 rounded p-1 bg-primary-variant drop-shadow-lg">
          <div className="text-secondary border-b border-zinc-200 opacity-65 font-medium">
            {title}
          </div>
          <p className="text-secondary text-sm font-normal opacity-80">
            {content}
          </p>
        </div>
      }
    >
      {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        className="h-5 w-5 cursor-pointer text-secondary-variant"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>
    </Tooltip>
  )
}

import { TooltipWithHelperIcon } from './tooltip'

interface CardProps {
  bgImage: string
  children: string
  tooltipTitle: string
  tooltipContent: string
}

export function CategoryCard({
  bgImage,
  children,
  tooltipTitle,
  tooltipContent,
}: CardProps) {
  return (
    <div className="w-full h-full flex items-center flex-col">
      <div
        className={`w-32 h-32 ${bgImage} rounded-lg relative gap-6 flex-col bg-cover bg-center flex items-center justify-center`}
      >
        <p className="text-xl text-wrap text-center font-bold leading-none text-primary drop-shadow-shadow-thin">
          {children}
        </p>
        <div className="w-full flex absolute bottom-0 mr-2 mb-2 justify-end">
          <TooltipWithHelperIcon
            title={tooltipTitle}
            content={tooltipContent}
          />
        </div>
      </div>
    </div>
  )
}

interface CardProps {
  bgImage: string
  children: string
}

export function CategoryCard({ bgImage, children }: CardProps) {
  return (
    <div className="w-full h-full flex items-center flex-col">
      <div
        className={`w-32 h-32 ${bgImage} bg-cover bg-center flex items-center justify-center`}
      >
        <p className="text-xl text-wrap text-center font-bold text-primary drop-shadow-shadow-thin">
          {children}
        </p>
      </div>
    </div>
  )
}

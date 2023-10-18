import { cn } from '@common/utils/theme'

interface TitleProps {
  title: string
  subtitle: string
  className?: string
}

export default function Header({ title, subtitle, className }: TitleProps) {
  return (
    <header
      className={cn(
        'flex w-[90%] flex-col items-center rounded-b-full bg-secondary pb-[15%] pt-[6%]',
        className,
      )}
    >
      <h1 className="header text-center">{title}</h1>
      <h3 className="sub-header w-[60%] text-center">{subtitle}</h3>
    </header>
  )
}

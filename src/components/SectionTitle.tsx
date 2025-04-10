import { cn } from '@/lib/utils'

const SectionTitle = ({
  title,
  className,
}: {
  title: string
  className?: string
}) => {
  return <h1 className={cn(className, 'text-4xl font-bold')}>{title}</h1>
}

export default SectionTitle

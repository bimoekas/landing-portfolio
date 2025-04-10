import { Theme, useTheme } from './theme-provider'
import { Button } from './ui/button'

const ThemeToggle = () => {
  const { setTheme } = useTheme()

  return (
    <div className="border-primary fixed top-1/3 right-4 bottom-4 z-50 hidden flex-col items-center justify-center gap-2 rounded-2xl border-4 px-3 py-2 shadow-md transition-all sm:flex md:top-1/3 md:right-4 md:bottom-auto">
      {[
        { theme: 'orange', color: 'bg-orange-500' },
        { theme: 'blue', color: 'bg-blue-500' },
        { theme: 'yellow', color: 'bg-yellow-500' },
        { theme: 'light', color: 'bg-white' },
        { theme: 'dark', color: 'bg-black' },
      ].map(({ theme, color }) => (
        <Button
          key={theme}
          onClick={() => setTheme(theme as Theme)}
          className={`h-9 w-9 rounded-full border ${color} hover:${color} ${
            theme === 'light' ? 'border-black' : 'border-white'
          }`}
        />
      ))}
    </div>
  )
}

export default ThemeToggle
